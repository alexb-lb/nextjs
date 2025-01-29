import React from "react";
import ContentPage from "./ContentPage";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";

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

const EBooks = () => {
  return (
    <div>
      <div className="pt-10">
        <h1 className="text-[28px] md:text-[48px] font-semibold text-center md:mb-6">
          E-Books
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

export default EBooks;
