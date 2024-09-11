import React from "react";
import LandingView from "../_components/LandingView";
import DigitalMarketing from "./_components/DigitalMarketing";
import DesigningSection from "./_components/DesigningSection";
import {
  DigitalMarketingButtons,
  DigitalMarketingButtons01,
} from "@/app/constants";
function page() {
  return (
    <div className="overflow-hidden  lg:space-y-6  bg-white">
      <LandingView heading={"OUR SERVICES"} />

      <DigitalMarketing
        imageSrc="/Lesson-amico.png" // Dynamic image
        title="Digital Marketing" // Dynamic title
        description="The practice of promoting products or services using digital channels like social media, 
        search engines, email, and websites to reach and engage target audiences." // Dynamic description
        keywords={DigitalMarketingButtons01} // Dynamic keywords
        imagePosition="left"
      />
      <DigitalMarketing
        imageSrc="/pana.png" // Dynamic image
        title="CONTENT CREATION" // Dynamic title
        description="The process of generating engaging and valuable content in various formats  to attract and retain  audience, support marketing goals, and establish a brand's online presence." // Dynamic description
        keywords={DigitalMarketingButtons01} // Dynamic keywords
        imagePosition="right"
      />
      <DigitalMarketing
        imageSrc="/pana2.png" // Dynamic image
        title="ARCHITECTURE" // Dynamic title
        description="The art and science of designing and constructing buildings and other structures, focusing on aesthetics, functionality, and sustainability." // Dynamic description
        keywords={DigitalMarketingButtons01} // Dynamic keywords
        imagePosition="left"
      />
      <DigitalMarketing
        imageSrc="/pana3.png" // Dynamic image
        title="Media Production" // Dynamic title
        description="The process of creating content for various media platforms, encompassing all stages from concept development to final editing and distribution." // Dynamic description
        keywords={DigitalMarketingButtons01} // Dynamic keywords
        imagePosition="right"
      />
      <DesigningSection
        title="Designing"
        description="The process of creating plans, concepts, and aesthetics for various projects, including graphics, products, and user experiences, to meet specific needs and objectives."
        buttons={DigitalMarketingButtons}
        imagePosition="right"
      />
      <DesigningSection
        title="WEBSITE DEVLOPMENT"
        description="The process of building and maintaining websites, involving tasks such as web design, coding, content creation, and server configuration to ensure functionality, user experience, and performance."
        buttons={DigitalMarketingButtons}
        imagePosition="left"
      />
      <DigitalMarketing
        imageSrc="/pana4.png" // Dynamic image
        title="Media Production" // Dynamic title
        description="The process of creating content for various media platforms, encompassing all stages from concept development to final editing and distribution." // Dynamic description
        keywords={DigitalMarketingButtons01} // Dynamic keywords
        imagePosition="right"
      />
    </div>
  );
}

export default page;
