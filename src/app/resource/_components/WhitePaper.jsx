import React from "react";
import ContentPage from "./ContentPage";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";

const contentData = [
  {
    title: "Data Privacy Automation for M365",
    description:
      "Spectra automates M365 privacy policy enforcement with advanced AI capabilities",
    ctaLink: "#",
  },
  {
    title: "Data Privacy Automation for M365",
    description:
      "Spectra automates M365 privacy policy enforcement with advanced AI capabilities",
    ctaLink: "#",
  },
  {
    title: "Data Privacy Automation for M365",
    description:
      "Spectra automates M365 privacy policy enforcement with advanced AI capabilities",
    ctaLink: "#",
  },
];

const WhitePaper = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/resource/BackgroundWhitePages.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-10">
        <h1 className="text-[28px] md:text-[48px] font-semibold text-center md:mb-6">
          White Papers
        </h1>
      </div>
      <div className="flex flex-nowrap md:flex-wrap md:gap-6 items-center justify-center">
        {/* {contentData.map((content, index) => ( */}
        <ContentPage contentList={contentData} />
      </div>
      <div className="p-10">
        <HoverBorderGradientDemo content="View All" className="flex" />
      </div>
    </div>
  );
};

export default WhitePaper;
