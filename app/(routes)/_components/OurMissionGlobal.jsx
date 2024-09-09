'use client'
import React from "react";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/app/utils/motion";
function OurMissionGlobal({content}) {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="/ourServices/landingview.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <motion.div
            variants={staggerContainer(0.25, 0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=""
          >
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className=""
            >
              <div className="relative flex items-center bg-gray-100">
                <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                <div className="p-8 sm:p-16 lg:p-24">
                  <h2 className="text-2xl font-bold text-black sm:text-3xl">
                    OUR MISSION
                  </h2>

                  <p className="mt-4 text-gray-600">
                   {content}
                  </p>

                  <a
                    href="#"
                    className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  >
                    Get in Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default OurMissionGlobal;