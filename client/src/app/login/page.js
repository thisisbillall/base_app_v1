import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Login() {
    return (
        <div className="min-h-screen flex mt-8">
            <div className="flex-1 flex items-center justify-center  p-8">
                <Image
                    src="/assets/mail_logo.png" 
                    alt="Email Emoji"
                    width={800}  
                    height={800} 
                />
            </div>

            <div className="flex-1 flex items-center justify-center p-8">
                <form className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Login</h2>
                   
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
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
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div className="mb-4 flex justify-center">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            className="mr-2"
                            required
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            Remember Me
                        </label>
                    </div>
                  
                  <div className="flex justify-center"> 
                  <Button
                        type="submit"
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
