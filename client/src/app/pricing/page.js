"use client";

import Image from 'next/image';
import Button from '@/components/Button';

export default function Pricing() {
    const plans = [
        {
            name: 'FREE',
            features: [
                'Basic Support',
                'Limited Storage',
                'Community Access',
                'Weekly Updates'
            ],
            imageSrc: '/assets/mail_logo.png'
        },
        {
            name: 'STARTUP',
            features: [
                'Priority Support',
                '100GB Storage',
                'Dedicated Support',
                'Daily Updates'
            ],
            imageSrc: '/assets/mail_logo.png'
        },
        {
            name: 'ENTERPRISE',
            imageSrc: '/assets/mail_logo.png'
        }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center p-8 mt-40">
            <div className="flex flex-col md:flex-row gap-12">
                {plans.map((plan, index) => (
                    <div key={index} className="relative bg-white p-16 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center max-w-xs md:max-w-sm">
                        {plan.name === 'STARTUP' && (
                            <div className="absolute top-2 right-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                                Recommended
                            </div>
                        )}
                        <Image
                            src={plan.imageSrc}
                            alt={`${plan.name} Plan`}
                            width={150}
                            height={150}
                            className="mb-6"
                        />
                        <h2 className="text-3xl font-bold mb-6 uppercase">{plan.name}</h2>
                        {plan.name !== 'ENTERPRISE' ? (
                            <>
                                <ul className="list-disc list-inside mb-6 text-lg">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center mb-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="mt-auto">
                                    Buy Now
                                </Button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center">
                                <div className="mb-4 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                    <p className="text-lg">Call Us</p>
                                </div>
                                <div className="mb-4 text-center">
                                    <center>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                    </center>
                                    <p className="text-lg">contact@predixionai.com</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
