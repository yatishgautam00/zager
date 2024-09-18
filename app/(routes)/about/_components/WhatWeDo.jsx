"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "@/app/_components/CustomText";
import StartSteps from "@/app/_components/StartSteps";
import { staggerContainer, fadeIn, planetVariants } from "@/app/utils/motion";
import { newFeatures } from "@/app/constants";
import { SparklesPreview } from "@/app/_components/SparklesPreview";
// import NewFeatures from "@/app/_components/NewFeatures";

const WhatsNew = () => (
  <section className="paddings relative z-10">
    <motion.div
      variants={staggerContainer(0.25, 0.25)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="innerWidth mx-auto flex lg:flex-row flex-col gap-8"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* <TypingText title="| What We Do" textStyles={""} /> */}
        <SparklesPreview
            name={<TypingText title={"| What We Do"} textStyles="" />}
            extraWidth={10}
          />
        <TitleText
          title={
            <div className="md:text-5xl text-3xl">
              Comprehensive Digital Solutions
            </div>
          }
        />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature) => (
            <p key={feature} className="text-justify text-sm md:text-lg">
              {feature.subtitle}
            </p>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className="flex-1 flexCenter"
      >
        <Image
          src="/ourServices/whatwedo.png"
          width={1000}
          height={1000}
          priority={true}
          alt="whats-new"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
