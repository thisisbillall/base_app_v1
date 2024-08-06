"use client";

import React from 'react';

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-transparent text-black border border-black font-medium py-1 px-3 rounded
                 sm:py-1.5 sm:px-4 md:py-2 md:px-5 lg:py-2.5 lg:px-6 
                 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
    >
      {children}
    </button>
  );
}
