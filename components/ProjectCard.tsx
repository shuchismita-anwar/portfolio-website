"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  image: string;
  title: string;
  text: string;
  link: string;  // Add link prop
}

const ProjectCard = ({ image, title, text, link }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleFlip}
      className="relative w-[450px] h-[280px] rounded-md cursor-pointer perspective"
    >
      <motion.div
        className={`relative w-full h-full rounded-md shadow-lg transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Front Side: Title and Placeholder */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-md backdrop-blur-lg bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] p-4"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-indigo-400 font-semibold">
            Learn more &gt;
          </p>
        </div>

        {/* Back Side: Detailed Information with Link */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-[rgba(0,0,0,0.8)] p-4 text-white rotate-y-180"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-300 mt-2">{text}</p>
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="mt-4 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600"
          >
            View Project
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
