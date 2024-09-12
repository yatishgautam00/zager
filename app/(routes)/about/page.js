import React from "react";
import About from "./_components/About";
import Hero from "./_components/Hero";
import AboutUsText from "./_components/AboutUsText";
import OurMissionText from "./_components/OurMissionText";
import OurValues from "../_components/OurValues";
import WhatWeDo from "../../_components/WhatWeDo";
import WhatsNew from "./_components/WhatWeDo";
import Insights from "./_components/Insights";
import { startingFeatures } from "@/app/constants";
function page() {
  return (
    <main className="bg-primary-black overflow-hidden flex flex-col gap-14">
      {/* <Hero /> */}
      <div className="pt-24 px-14">
        <AboutUsText />
      </div>
      <div className="pt-24 px-14" id="ourmission">
        <OurMissionText />
      </div>

      <div className="pt-24 px-14 relative " id="ourvalues">
        <OurValues startingFeatures={startingFeatures} />
      </div>
      <div className="pt-24 px-14 relative " id="what-we-do">
        <WhatsNew />
      </div>
      <div className="pt-24 px-14 mb-10 relative " id="insights">
        <Insights />
      </div>
    </main>
  );
}

export default page;
