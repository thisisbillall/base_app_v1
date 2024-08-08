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
            features: [
                '24/7 Support',
                '1TB Storage',
                'Dedicated Account Manager',
                'Custom Updates'
            ],
            imageSrc: '/assets/mail_logo.png' 
        }
    ];

    return (
        <div className="min-h-screen flex flex-col items-center p-8 mt-40 ">
            <div className="flex flex-col md:flex-row gap-12">
                {plans.map((plan, index) => (
                    <div key={index} className="bg-white p-16 rounded-lg shadow-lg border border-gray-300 flex flex-col items-center max-w-xs md:max-w-sm">
                        <Image
                            src={plan.imageSrc}
                            alt={`${plan.name} Plan`}
                            width={150}
                            height={150}
                            className="mb-6"
                        />
                        <h2 className="text-3xl font-bold mb-6 uppercase">{plan.name}</h2>
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
                    </div>
                ))}
            </div>
        </div>
    );
}
