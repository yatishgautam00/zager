import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

function About() {
  return (
    <div className="h-[40rem] rounded-md bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 flex flex-col items-center justify-center relative w-full overflow-hidden">
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>
      
      <h2 className="relative flex flex-col md:flex-row z-10 text-4xl md:text-6xl md:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-gray-300 to-gray-500 flex items-center gap-2 md:gap-8">
        <div className="flex flex-col">
          <span className="uppercase text-white tracking-widest">ABOUT US</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-400">
            ZAGER DIGITAL SERVICES
          </span>
        </div>
      </h2>
      
      <p className="relative z-10 mt-4 max-w-3xl text-center text-lg md:text-xl text-gray-200">
        We specialize in providing innovative IT solutions to empower your business in the digital age.
      </p>
      
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}

export default About;
