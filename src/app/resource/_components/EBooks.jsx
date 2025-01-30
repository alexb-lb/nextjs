import React from "react";
import ContentPage from "./ContentPage";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";

const contentData = [
  {
    title: "Topics in Privacy API Volume II",

    description:
      "Applied: Architecting a New Privacy Program to Foster Customer Trust Proactive: Addressing Future Data Concerns Through the data",

    ctaLink: "#",
    imageUrl: "images/resource/ebook1.png",
  },
  {
    title: "STopics in Privacy API Volume II",
    description:
      "TApplied: Architecting a New Privacy Program to Foster Customer Trust Proactive: Addressing Future Data Concerns Through the data",

    ctaLink: "#",
    imageUrl: "images/resource/ebook1.png",
  },
  {
    title: "Topics in Privacy API Volume II",

    description:
      "Applied: Architecting a New Privacy Program to Foster Customer Trust Proactive: Addressing Future Data Concerns Through the data",
    ctaLink: "#",
    imageUrl: "images/resource/ebook1.png",
  },
];

const EBooks = ({ sectionData }) => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-[28px] md:text-[48px] font-semibold text-center md:mb-6">
          {/* E-Books */}
          {sectionData[0]?.content?.title}
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

export default EBooks;
