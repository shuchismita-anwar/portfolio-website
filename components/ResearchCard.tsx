"use client";

import React, { useState } from 'react';

// Define the props type for ResearchCard
interface ResearchCardProps {
  title: string;
  text: string;
  details: string;
}

const ResearchCard = ({ title, text, details }: ResearchCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleReadMoreClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-white text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-300 mt-2">{text}</p>
      <button 
        onClick={handleReadMoreClick} 
        className="text-blue-500 mt-4"
      >
        Read More
      </button>

      {/* Modal - Overlaying the full screen */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-900 p-6 rounded-lg max-w-md w-full text-white shadow-lg">
            <h2 className="text-xl font-semibold">{title}</h2>
            <p className="mt-4">{details}</p>
            <button 
              onClick={handleCloseModal} 
              className="mt-4 text-blue-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResearchCard;
