import bcrypt
from . import models
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, SessionLocal
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from typing import Annotated
from .schemas import UserBase

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"], 
    allow_headers=["*"],  
)

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


db_dependency = Annotated[Session, Depends(get_db)]


@app.get('/')
async def home():
    return {'msg':'Nice!'}


@app.post('/signup')
async def create_user(user: UserBase, db: db_dependency):
    existing_user = db.query(models.Users).filter(models.Users.email == user.email).first()
    if existing_user:
        raise HTTPException(status_code=400, detail="Email already registered")

    encryption_salt = bcrypt.gensalt()
    encrypted_password = bcrypt.hashpw(user.password.encode('utf-8'), encryption_salt).decode('utf-8')
    db_user = models.Users(name=user.name, email=user.email, password=encrypted_password)
    
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
    except IntegrityError:
        db.rollback()
        raise HTTPException(status_code=400, detail="Error occurred while creating user")

    return {"message": "User registered successfully"}