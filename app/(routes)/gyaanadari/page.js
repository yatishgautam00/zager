import React from "react";
import LandingView from "../_components/LandingView";
import WhatWeDo from "./_components/WhatWeDo";
import OurMission from "../_components/OurMissionCard";
import AboutUs from "../_components/AboutUs";
import ValuesSection from "./_components/ValueSection";
import JoinUs from "./_components/JoinUs";

function page() {
  const content = {
    ourMission:
      "Our mission at Gyaanadri is to empower our audience with valuable knowledge and perspectives through a variety of content formats. We strive to be a trusted source for the latest news, thought-provoking interviews, and enriching podcasts. By curating and creating content that resonates with our audience, we aim to foster a more informed and connected community.",

    about:
      " Welcome to Gyaanadri, your premier destination for insightful content and engaging media. At Gyaanadri, we're dedicated to delivering high-quality, informative content that informs, inspires, and entertains. Our platform is designed to be a hub for diverse content ranging from breaking news and in-depth interviews to captivating podcasts and informative articles.",
  };
  return (
    <div className="flex bg-white flex-col gap-4 pb-16">
      <LandingView heading={"GYAANADRI"} msg={"Clear vision & Pure thoughts"} />
      <AboutUs content={content.about}/>
      <OurMission content={content.ourMission} />

      <WhatWeDo />
      <ValuesSection />
      <JoinUs />
    </div>
  );
}

export default page;
