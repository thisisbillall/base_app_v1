"use client";

import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Footer() {
    return (
        <footer className="bg-gray-200 text-black py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-2xl font-bold mb-4">Sign up for our newsletter</h2>
                    <div className="flex justify-center items-center gap-4">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <Button>
                             Subscribe
                        </Button>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <p className="text-lg mb-4">our office address: Srikrishna Finvest Pvt Ltd, Unit 004, Tower 1, Peninsula Corporate Park, Lower Parel, Mumbai </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
                        <div className="flex flex-col items-center">
                            <p className="font-bold mb-2">PredixionAI</p>
                            <Link href="https://www.linkedin.com/company/company-name" target="_blank">
                                <Image src="/assets/predixionai_logo.png" alt="LinkedIn" width={60} height={60} />
                            </Link>
                        </div>
                        <div className="flex flex-col items-center">
                            <Link href="https://x.com/company-name" target="_blank">
                                <Image src="/assets/linkedin.png" alt="X" width={36} height={24} />
                            </Link>
                        </div>

                        <div className="flex flex-col items-center">
                            <Link href="https://x.com/company-name" target="_blank">
                                <Image src="/assets/x_twitter.jpg" alt="X" width={66} height={66} />
                            </Link>
                        </div>
                      
                      
                        <div className="flex flex-col items-center">
                        <Link href="/terms" className="text-black underline hover:underline">
                                Terms of Use
                            </Link>
                            <Link href="/policy" className="text-black underline hover:underline">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
