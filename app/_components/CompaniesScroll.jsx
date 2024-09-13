"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const companies = [
  { src: "/logo/argo.png", alt: "logo" },
  { src: "/logo/arise.jpg", alt: "logo" },
  { src: "/logo/Boxoffice.png", alt: "logo" },
  { src: "/logo/church.png", alt: "logo" },
  { src: "/logo/csit.png", alt: "logo" },
  { src: "/logo/eye.png", alt: "logo" },
  { src: "/logo/finedine.png", alt: "logo" },
  { src: "/logo/front.png", alt: "logo" },
  { src: "/logo/Front@4x.png", alt: "logo" },
  { src: "/logo/fusion.png", alt: "logo" },
  { src: "/logo/hygiene.jpg", alt: "logo" },
  { src: "/logo/Logo.png", alt: "logo" },
  { src: "/logo/Logo@4x.png", alt: "logo" },
  { src: "/logo/lpc.png", alt: "logo" },
  { src: "/logo/momos_nation2.png", alt: "logo" },
  { src: "/logo/nidaanmonopng.PNG.png", alt: "logo" },
  { src: "/logo/revive.png", alt: "logo" },
  { src: "/logo/SANKALPA.png", alt: "logo" },
  { src: "/logo/silveroak.png", alt: "logo" },
  { src: "/logo/skygym.png", alt: "logo" },
  { src: "/logo/timepass.png", alt: "logo" },
  { src: "/logo/vkb.png", alt: "logo" },
];

const CompaniesScroll = () => {
  const containerRef = useRef(null);
  const totalWidth = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      totalWidth.current = container.scrollWidth;
    }
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-gray-300">
      <motion.div
        className="flex flex-row gap-4 md:gap-6 lg:gap-10 py-3"
        style={{ whiteSpace: "nowrap", display: "flex" }}
        animate={{
          x: `-${totalWidth.current / 2}px`,
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        ref={containerRef}
      >
        {/* Render the original array of images */}
        {companies.map((company, index) => (
          <img
            key={index}
            src={company.src}
            alt={company.alt}
            className="md:h-20  md:w-32 w-20 h-16"
          />
        ))}
        {/* Render the duplicate array of images for seamless transition */}
        {companies.map((company, index) => (
          <img
            key={`duplicate-${index}`}
            src={company.src}
            alt={company.alt}
            className="h-16 w-20 md:h-20 md:w-32"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default CompaniesScroll;
