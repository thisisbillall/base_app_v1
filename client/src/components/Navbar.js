"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white p-4 fixed top-0 left-0 w-full z-50">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto">
                <Link href="/" className="flex items-center text-black text-2xl font-bold">
                    <Image
                        src="/assets/predixionai_logo.png"
                        alt="Logo"
                        width={80}
                        height={40}
                    />
                </Link>

                <ul className="hidden md:flex flex-grow justify-center space-x-6">
                    <li className="text-black hover:text-gray-300">
                        <Link href="/about">About Us</Link>
                    </li>
                    <li className="text-black hover:text-gray-300">
                        <Link href="/pricing">Pricing</Link>
                    </li>
                    <li className="text-black hover:text-gray-300">
                        <Link href="/blog">Blog</Link>
                    </li>
                </ul>

                <div className="flex space-x-4">
                    <Link href="/signup">
                        <Button>
                            Sign Up
                        </Button>
                    </Link>
                    <Link href="/login">

                        <Button>
                            Login
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
