"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '@/components/Button';
import axios from 'axios';

export default function Login() {
    
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const response = await axios.post('http://localhost:8000/login', {
                email: email,
                password: password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setSuccess('logged in successfully');
            setTimeout(() => {
                router.push('/pricing');
            }, 2000);
        } catch (err) {
            console.log('err',  err)
            setError(err.response?.data?.detail || 'An error occurred');
        }
    };

    return (
        <div className="min-h-screen flex mt-8">
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-transparent">
                <Image
                    src="/assets/mail_logo.png"
                    alt="Email Emoji"
                    width={500}
                    height={500}
                    className="mb-0"
                />
                <h1 className="text-3xl font-bold text-center mt-[-8px]">AI NATIVE DEBT COLLECTION SYSTEM</h1>
            </div>


            <div className="flex-1 flex items-center justify-center p-8">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg shadow-gray-500/50 border border-gray-300">
            {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                    <h2 className="text-2xl font-bold mb-4">Login</h2>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            className="mr-2"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            Remember Me
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <Button
                            className=""
                        >
                            Login
                        </Button>
                    </div>
                    <div className="flex justify-center">
                        <Link className="underline text-xs"
                            href="submit"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
