"use client";
import React from "react";
import { motion } from "framer-motion";

const companies = [
  { src: "/logo/Google.png", alt: "Google" },
  { src: "/logo/Netflix.png", alt: "Netflix" },
  { src: "/logo/IBM.png", alt: "IBM" },
  { src: "/logo/Amazonpay.png", alt: "Amazon Pay" },
  { src: "/logo/Zoom.png", alt: "Zoom" },
  // Add more company logos as needed
];

function CompaniesScroll() {
  return (
    <div className="relative w-full overflow-hidden bg-gray-300 " >
      <motion.div
        className="flex md:space-x-24 space-x-12"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          duration: 15, // Increased speed by reducing duration
          repeat: Infinity,
        }}
      >
        {[...companies, ...companies].map((company, index) => (
          <img
            key={index}
            src={company.src}
            alt={company.alt}
            className="h-auto md:w-32 w-24"
          />
        ))}
      </motion.div>
    </div>
  );
}

export default CompaniesScroll;
