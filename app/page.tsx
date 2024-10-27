"use client";

// import Image from "next/image";
// import { Socials } from "../constants";


export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div
        className="flex items-center w-full h-full bg-cover bg-center"
        style={{ backgroundImage: "url(/Mountainss.jpg)" }}
      >
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[800px]">
          <h1 className="text-[50px] text-white font-semibold">
            Innovating with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              AI and Quantum Intelligence
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            AI enthusiast with a strong foundation in computer science and expertise in machine learning and computer vision.
            Skilled in developing and deploying AI models for various applications, including medical diagnostics and conversational AI.
            Proficient in Python and popular machine learning libraries, with additional experience in web development using React.js and Node.js.
            Passionate about leveraging AI to solve real-world problems and currently involved in innovative research to push the boundaries of AI
            technology, with a secondary interest in quantum computing.
          </p>

          {/* Social Links Section with <a> tags
          <div className="flex gap-4 mt-6">
            {Socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"                  // Opens in a new tab
                rel="noopener noreferrer"        // Security attribute for new tab links
                className="text-white hover:text-blue-400"
              >
                <img src={social.src} alt={social.name} width={30} height={30} />
              </a>
            ))}
          </div>
           */}
          {/* Other Links */}
          <div className="flex-col md:flex-row hidden md:flex gap-5 mt-5">
            <a
              href="/my-skills"
              className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Learn more
            </a>
            <a
              href="/my-projects"
              className="rounded-[20px] group relative bg-transparent px-5 border border-white py-3 text-lg text-white max-w-[200px]"
            >
              My projects
            </a>
            <a
              href="/my-researches"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Researches
            </a>
            <a
              href="/contact-me"
              className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Other content */}
    </main>
  );
}
