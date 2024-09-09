'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/app/utils/motion";

const PlainCard = ({ title, description }) => {
  return (
    <section>

    <div className="shadow-lg rounded-lg flex flex-col justify-between bg-brand p-6 pb-0 px-0 text-center w-full lg:w-[300px]">
      <div className="flex justify-center mb-4">
        <Image src="/ourServices/rocket.gif" alt={title} width={100} height={100} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="bg-white rounded-b-lg ">
      <p className="text-sm text-justify rto text-gray-600 px-6 pb-6 pt-6">{description}</p></div>
    </div>

    </section>
  );
};

export default PlainCard;
