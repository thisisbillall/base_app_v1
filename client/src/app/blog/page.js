"use client";

import Image from 'next/image';
import Button from '@/components/Button';

export default function Blog() {
    return (
        <div className="min-h-screen mt-24 p-8 md:px-16 lg:px-32">
            <div className="flex flex-col md:flex-row mb-16">
                <div className="md:w-5/12 flex justify-center items-center mb-8 md:mb-0">
                    <Image
                        src="/assets/mail_logo.png" 
                        alt="Email Image"
                        width={500}
                        height={500}
                        className="object-contain"
                    />
                </div>
                <div className="md:w-7/12 flex flex-col justify-center items-start text-left px-6">
                    <p className="mb-4">
                        Discover the transformative potential of our AI-driven solutions tailored for effective debt collection. Our advanced algorithms analyze borrower behavior, enabling you to personalize approaches that build trust and ensure better outcomes.
                    </p>
                    <h2 className="text-4xl font-bold mb-6">Collect Your Loan</h2>
                    <Button>Try for Free</Button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-16 px-6">
                <div className="md:w-5/12 flex flex-col justify-center items-start text-left">
                    <h2 className="text-3xl font-bold mb-4">Unleashing the Power of Mixture of Experts</h2>
                    <p className="mb-8">
                        Experience the cutting-edge technology of AI agents designed to optimize every aspect of your debt collection process.
                        Experience the cutting-edge technology of AI agents designed to optimize every aspect of your debt collection process.

                    </p>
                </div>
                <div className="md:w-7/12 flex justify-center gap-8">
                    <Image
                        src="/assets/all_agents.jpg" 
                        alt="AI Agents"
                        width={550}
                        height={450}
                        className="object-contain"
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row mb-16 px-6">
                <div className="md:w-5/12 flex flex-col justify-center items-start text-left">
                    <h2 className="text-3xl font-bold mb-4">Data Enrichment</h2>
                    <Image
                        src="/assets/data_enrich.png"
                        alt="Data Enrichment"
                        width={200}
                        height={200}
                        className="object-contain mb-6"
                    />
                    <p>
                        Enhance your data with structured and unstructured sources to gain a 360-degree view of each borrower.
                        Enhance your data with structured and unstructured sources to gain a 360-degree view of each borrower.

                    </p>
                </div>
                <div className="md:w-7/12 flex flex-col ml-36 justify-center items-start text-left">
                    <h3 className="text-xl font-bold mb-4">Structured and Unstructured Data Sources</h3>
                    <ul className="list-disc pl-5 space-y-2 font-bold">
                        <li>DPI</li>
                        <li>Bureau</li>
                        <li>Loan App</li>
                        <li>Income Data</li>
                        <li>CRM</li>
                        <li>Public Data Sources</li>
                        <li>Social Media and more.</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-16 px-6">
                <div className="md:w-5/12 flex flex-col justify-center items-start text-left mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Personalize Incentives and Offers for Every Borrower</h2>
                    <p>
                        Build trust and create loyal borrowers by offering personalized incentives and offers based on their unique profiles and behaviors.
                        Build trust and create loyal borrowers by offering personalized incentives and offers based on their unique profiles and behaviors.

                    </p>
                </div>
                <div className="md:w-7/12 flex justify-center items-center">

                    <Image
                        src="/assets/repay.jpg"
                        alt="Hand Holding Payment"
                        width={300}
                        height={300}
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
