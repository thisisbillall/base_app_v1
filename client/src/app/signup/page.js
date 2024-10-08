"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import axios from 'axios';

export default function Signup() {

    const router = useRouter();

    const [signUpData, setSignUpData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        termsAndCondition: false
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setSignUpData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (signUpData.password !== signUpData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        if (!signUpData.termsAndCondition) {
            setError('Please check terms and conditions.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/signup', {
                name: signUpData.name,
                email: signUpData.email,
                password: signUpData.password
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            setSuccess('User created successfully');
            setTimeout(() => {
                router.push('/login');
            }, 2000);
        } catch (err) {
            setError(err.response?.data?.detail || 'An error occurred');
        }
    };

    return (
        <div className="min-h-screen flex mt-12">
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
                    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={signUpData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={signUpData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={signUpData.password}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={signUpData.confirmPassword}
                            onChange={handleChange}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-2 flex items-center">
                        <input
                            type="checkbox"
                            id="termsAndCondition"
                            name="termsAndCondition"
                            checked={signUpData.termsAndCondition}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label htmlFor="termsAndCondition" className="text-sm text-gray-600">
                            I agree to the <Link href="/terms"><span className='underline'>Terms of Use</span></Link> and <Link href="/policy"><span className='underline'>Privacy Policy.</span></Link>
                        </label>
                    </div>

                    <div className="flex justify-center">
                        <Button>
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
