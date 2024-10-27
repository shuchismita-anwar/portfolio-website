"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Education data
const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "BRAC University, Dhaka",
    year: "2020 - 2024",
  },
  {
    degree: "Higher School Certificate (HSC)",
    institution: "Birshreshtha Noor Mohammad Public College, Dhaka",
    year: "2019",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Birshreshtha Noor Mohammad Public College, Dhaka",
    year: "2017",
  },
];

// Variants for card animations
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.2)" },
};

const EducationPage = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    style={{
      backgroundImage: "url('/mountains.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
  >
    <div className="max-w-[85%] h-[75%] flex flex-col items-center relative">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3, // Sequential fade-in for each card
            },
          },
        }}
        className="flex flex-col items-center space-y-2"
      >
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className={`relative w-7/12 p-8 rounded-lg shadow-lg bg-[rgba(255,255,255,0.1)] text-white transition-transform duration-300 ${
              index % 2 === 0 ? "self-start mr-auto pr-8" : "self-end ml-auto pl-8"
            }`} // Added pr-8 and pl-8 to push cards away from center line
          >
            {/* Timeline marker */}
            <div
              className={`absolute top-1/2 w-6 h-6 rounded-full bg-indigo-500 transform -translate-y-1/2 ${
                index % 2 === 0 ? "-right-4" : "-left-4"
              }`}
            />
            {/* Card content */}
            <h3 className="text-2xl font-bold mb-2">{item.degree}</h3>
            <p className="text-lg text-gray-300">{item.institution}</p>
            <p className="text-md text-gray-400 mb-2">{item.year}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

export default EducationPage;
