import bcrypt
from . import models
from fastapi import FastAPI, Depends, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from .database import engine, SessionLocal
from sqlalchemy.orm import Session
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


db_deependency = Annotated[Session, Depends(get_db)]


@app.get('/')
async def home():
    return {'msg':'Nice!'}

@app.post('/users/')
async def create_user(user: UserBase, db: db_deependency):
    encription_salt = bcrypt.gensalt()
    encrypted_password = bcrypt.hashpw(user.password.encode('utf-8'), encription_salt)
    db_user = models.Users(name=user.name, email=user.email, password=encrypted_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user
