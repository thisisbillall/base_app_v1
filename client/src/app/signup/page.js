import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

export default function Signup() {
    return (
        <div className="min-h-screen flex mt-8">
            {/* Left Column: Large Email Emoji */}
            <div className="flex-1 flex items-center justify-center  p-8">
                <Image
                    src="/assets/mail_logo.png"  // Path to your email emoji image
                    alt="Email Emoji"
                    width={800}  // Adjust size as needed
                    height={800} // Adjust size as needed
                />
            </div>

            {/* Right Column: Signup Form */}
            <div className="flex-1 flex items-center justify-center p-8">
                <form className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            required
                        />
                    </div>
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
                    <div className="mb-4">
                        <label htmlFor="retype-password" className="block text-sm font-medium text-gray-700">Retype Password</label>
                        <input
                            type="password"
                            id="retype-password"
                            name="retype-password"
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
                            I agree to the <Link href="/terms">terms and conditions</Link>
                        </label>
                    </div>
                  
                  <div className="flex justify-center"> 
                  <Button
                        type="submit"
                        className=""
                    >
                        Sign Up
                    </Button>
                  </div>
                </form>
            </div>
        </div>
    );
}
