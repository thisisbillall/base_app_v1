"use client";

import Image from 'next/image';

export default function About() {
    const founders = [
        {
            name: 'Varun Bhalla',
            imageSrc: '/assets/varun.jfif', 
            details: 'He is a tech sales leader working with lenders on solving their critical business problems uing innovative solutions over 2 decades.'
        },
        {
            name: 'Vaibhav Goyal',
            imageSrc: '/assets/vaibhav.jpg',
            details: 'He has experience of building deep tech/AI based products for past 2 decades. He is also recognised as Linkedin Top Voice in India.'
        }
    ];

    return (
        <div className="min-h-screen mt-28 p-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Our Founders</h1>
            </div>
            <div className="flex flex-col md:flex-row gap-32 justify-center">
                {founders.map((founder, index) => (
                    <div key={index} className="p-4 md:p-6 rounded-lg shadow-lg border border-gray-300 max-w-md w-full flex flex-col items-center">
                        <Image
                            src={founder.imageSrc}
                            alt={`${founder.name} Image`}
                            width={180} 
                            height={180} 
                            className="mb-4 rounded-full"
                        />
                        <h2 className="text-xl md:text-2xl font-bold mb-4">{founder.name}</h2>
                        <p className="text-base md:text-lg text-gray-700 text-center">
                            {founder.details}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
