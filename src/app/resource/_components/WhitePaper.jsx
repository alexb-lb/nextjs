import React from "react";
import ContentPage from "./ContentPage";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";

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

const WhitePaper = ({ sectionData }) => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/resource/BackgroundWhitePages1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pt-10">
        <h1 className="text-[28px] md:text-[48px] font-semibold text-center md:mb-6">
          {/* White Papers */}
          {sectionData[0]?.title}
        </h1>
      </div>
      <div className="flex flex-nowrap md:flex-wrap md:gap-6 items-center justify-center">
        {/* {contentData.map((content, index) => ( */}
        <ContentPage contentList={sectionData[1]?.cards} />
      </div>
      <div className="p-10">
        <Link href={sectionData[0]?.cta[0]?.url || "#"}>
          <HoverBorderGradientDemo
            content={sectionData[0]?.cta[0]?.text}
            className="flex"
          />
        </Link>
      </div>
    </div>
  );
};

export default WhitePaper;
