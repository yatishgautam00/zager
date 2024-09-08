import React from "react";

function AboutUs({content}) {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 w-full bg-white">
      {/* Left Section (About Us Text) */}
      <div className="flex flex-col items-end pr-6">
        <h2 className="text-xl font-light text-gray-700">ABOUT</h2>
        <h1 className="text-4xl font-extrabold text-gray-900">US</h1>
      </div>

      {/* Divider Line */}
      <div className="border-l border-black mx-6 h-36"></div>

      {/* Right Section (Description) */}
      <div className="text-gray-800 max-w-5xl">
        <p className="text-lg leading-relaxed text-justify">
         {content}
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
