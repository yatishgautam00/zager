import React from "react";
import About from "./_components/About";
import Hero from "./_components/Hero";
import AboutUsText from "./_components/AboutUsText";
import OurMissionText from "./_components/OurMissionText";
import OurValues from "./_components/OurValues";
import WhatWeDo from "../gyaanadari/_components/WhatWeDo";
import WhatsNew from "./_components/WhatWeDo";
import Insights from "./_components/Insights";

function page() {
  return (
    <main className="bg-primary-black overflow-hidden flex flex-col gap-14">
      <Hero />
      <div className="pt-24 px-14">
        <AboutUsText />
      </div>
      <div className="pt-24 px-14" id="ourmission">
      <OurMissionText />
      </div>

      <div className="pt-24 px-14 relative " id="ourvalues">
      <OurValues />
      </div>
      <div className="pt-24 px-14 relative " id="what-we-do">
      <WhatsNew/>
      </div>
      <div className="pt-24 px-14 mb-10 relative " id="insights">
      <Insights />
      </div>
      {/* <Explore /> 
      {/* <section className="relative">
        <GetStarted />
        <div className="gradient-03 z-0" /> 
        <WhatsNew />
      </section>
      <World />
      <section className="relative">
        <Insights />
        <div className="gradient-03 z-0" />
        <Feedback />
      </section> */}
    </main>
  );
}

export default page;
