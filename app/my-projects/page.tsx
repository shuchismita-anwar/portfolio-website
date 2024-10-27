"use client";

import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { Projects } from '@/constants';

const Page = () => (
  <div
    style={{ backgroundImage: "url(/Mountains.jpg)" }}
    className="w-screen h-screen flex items-center justify-center bg-center bg-cover"
  >
    {/* Main scrollable grid container */}
    <div className="scroll-container max-w-[85%] max-h-[80%] overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-8 p-4 mx-auto">
      {Projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          text={project.text}
          link={project.link}
          image={"/default-image.jpg"} 
        />
      ))}
    </div>
  </div>
);

export default Page;
