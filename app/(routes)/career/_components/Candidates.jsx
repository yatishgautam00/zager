"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "@/app/_components/CustomText";
import { staggerContainer } from "@/app/utils/motion";
import CandidateCard from "../../_components/CandidateCard";
import { candidateCard } from "@/app/constants";

const Candidate = () => {
  const [active, setActive] = useState("1");

  return (
    <section className="paddings relative" id="explore">
      <div className="gradient-03 z-0" />
      <motion.div
        variants={staggerContainer(0.25, 0.25)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="innerWidth mx-auto flex flex-col"
      >
        <TypingText title="| OUR IDEAL CANDIDATES" textStyles="text-center" />
        <TitleText
          title={
            <span className="text-2xl">
              We are looking for individuals who are:
            </span>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70wh] gap-5">
          {candidateCard.map((world, index) => (
            <CandidateCard
              key={world.title}
              {...world}
              active={active}
              index={index}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Candidate;