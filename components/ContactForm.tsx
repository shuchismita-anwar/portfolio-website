"use client";

import React, { useState } from "react";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement; // Type assertion to HTMLFormElement

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/mqakeqgp", { // Your Formspree endpoint
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("There was an issue with your submission. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-5 text-white">Contact Me</h2>
      <div className="mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="name"
          required
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          name="email"
          required
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        />
      </div>
      <div className="mb-3">
        <textarea
          placeholder="Your message"
          name="message"
          required
          className="w-full px-3 py-2 text-sm text-gray-200 placeholder-gray-400 bg-white border-0 rounded shadow"
        ></textarea>
      </div>
      <button className="px-6 mb-10 py-3 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 hover:bg-blue-400">
        Send a message
      </button>
      {submitted && <p className="text-green-500 mt-4">Thank you for your message!</p>}
    </form>
  );
};

export default ContactForm;
