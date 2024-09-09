import React from "react";
import LandingView from "../_components/LandingView";
import AboutUsG from "../_components/AboutUsG";
import OurMissionGlobal from "../_components/OurMissionGlobal";
import WhatWeDo from "@/app/_components/WhatWeDo";
import OurValues from "../_components/OurValues";
import {
  aboutUsOfira,
  ourMissionOfira,
  whatWeDoira,
  ourValuesOfira,
} from "@/app/constants";
function page() {
  return (
    <div className="overflow-hidden  lg:space-y-6 bg-white">
      <LandingView
        heading={"IRA MEDIA & PRODUCTIONS"}
        msg={"Clear vision & Pure thoughts"}
      />
      <AboutUsG content={aboutUsOfira} />
      <OurMissionGlobal content={ourMissionOfira} />
      <WhatWeDo services={whatWeDoira} />
      <div className="bg-brand px-4 md:space-y-14 md:px-14 md:py-10 py-4 ">
        <OurValues startingFeatures={ourValuesOfira} />
      </div>
    </div>
  );
}

export default page;
