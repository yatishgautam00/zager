"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";

const PlainCard = ({ title, description, index }) => {
  return (
    <section>
      <motion.div
        className="card"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: index % 2 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <div className="shadow-lg rounded-lg flex flex-col justify-between bg-brand p-6 pb-0 px-0 text-center w-full lg:w-full">
          <div className="flex justify-center mb-4">
            <Image
              src="/ourServices/rocket.gif"
              alt={title}
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <div className="bg-white rounded-b-lg ">
            <p className="text-sm text-justify rto text-gray-600 px-6 pb-6 pt-6">
              {description}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PlainCard;
