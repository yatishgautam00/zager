"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

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
 

  return (
    <div className="relative w-full overflow-hidden border-b-8 border-b-brand bg-gray-300">
      <InfiniteMovingCards
      items={companies}
      direction="left"
      speed="normal"
      pauseOnHover={true}
      className="my-custom-class"
    />
    </div>
  );
};

export default CompaniesScroll;
