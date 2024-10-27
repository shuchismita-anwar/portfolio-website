import ResearchCard from '@/components/ResearchCard';
import { Researches } from '@/constants';
import React from 'react';

const ResearchPage = () => (
  <div
    className="w-screen h-screen flex flex-col items-center justify-center bg-cover bg-center p-4 sm:p-8 overflow-y-auto"
    style={{ backgroundImage: "url(/Mountains.jpg)" }}
  >
    <h1 className="text-white text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Researches</h1>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-4xl">
      {Researches.map((research, index) => (
        <ResearchCard 
          key={index}
          title={research.title}
          text={research.text}
          details={research.details}
          image={research.image}
        />
      ))}
    </div>
  </div>
);

export default ResearchPage;
