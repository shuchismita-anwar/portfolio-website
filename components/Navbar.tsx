"use client";
import { Socials } from "@/constants";
// // import Image from "next/image";
// import React, { useState } from "react";
// import Toast from "./Toast"; // Import Toast component

const Navbar = () => {
  // const [showToast, setShowToast] = useState(false);
  // const [toastMessage, setToastMessage] = useState(""); // Define toastMessage if using Toast

  // Uncomment and implement if you want a copy-to-clipboard feature
  // const copyToClipboard = (url: string) => {
  //   navigator.clipboard.writeText(url)
  //     .then(() => {
  //       setToastMessage("Link copied to clipboard!");
  //       setShowToast(true);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to copy: ", error);
  //       setToastMessage("Failed to copy link.");
  //       setShowToast(true);
  //     });
  // };

  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-gradient-to-b from-gray-900 to-transparent shadow-md flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* Uncomment this if you want to display a logo */}
          {/* <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          /> */}
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          Shuchismita Anwar |{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            AI & Quantum
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank" // Opens in a new tab
            rel="noopener noreferrer" // Security attribute for new tab links
            className="text-white hover:text-blue-400"
          >
            <img src={social.src} alt={social.name} width={35} height={35} />
          </a>
        ))}
      </div>

      {/* Render Toast when showToast is true */}
      {/* {showToast && (
        <Toast
          message={toastMessage}
          onClose={() => setShowToast(false)} // Hide the toast when closed
        />
      )} */}
    </div>
  );
};

export default Navbar;
