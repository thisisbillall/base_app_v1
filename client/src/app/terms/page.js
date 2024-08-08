"use client";

import Image from 'next/image';

export default function Terms() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8 ">
            <div className=" p-8 rounded-lg shadow-lg border border-gray-300 max-w-4xl w-full">
                <div className="flex flex-col items-center">
                    <Image
                        src="/assets/mail_logo.png" 
                        alt="Mail Image"
                        width={150}
                        height={150}
                        className="mb-6"
                    />
                    <h1 className="text-4xl font-bold mb-6">Terms of Use</h1>
                    <p className="text-lg text-gray-700 text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </div>
    );
}
