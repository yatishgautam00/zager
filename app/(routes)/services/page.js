import React from "react";
import LandingView from "../_components/LandingView";
import JoinOurTeamText from "./_components/JoinOurTeamText";
import WhyWorkWithUs from "./_components/WhyWorkWithUs";

function page() {
  return (
    <div className="space-y-14 bg-white">
      <LandingView heading={"OUR SERVICES"} />
      <div className="bg-brand py-10">
        <JoinOurTeamText  />
      </div>

      <WhyWorkWithUs />
    </div>
  );
}

export default page;
