import React from "react";
import LandingView from "../_components/LandingView";
import JoinOurTeamText from "./_components/JoinOurTeamText";
import WhyWorkWithUs from "./_components/WhyWorkWithUs";
// import CandidateCard from "../_components/CandidateCard";
import Candidate from "./_components/Candidates";

function page() {
  return (
    <div className="space-y-14 bg-white">
      <LandingView heading={"OUR SERVICES"} />
      <div className="bg-brand py-10">
        <JoinOurTeamText />
      </div>

      <WhyWorkWithUs />
      <div className="px-5 md:px-10 lg:px-14 bg-brand py-10">
        <Candidate />
      </div>
    </div>
  );
}

export default page;
