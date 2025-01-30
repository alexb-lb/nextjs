import Link from "next/link";
import React, { useEffect, useState } from "react";

const categories = [
  { label: "Industry Verticals", isActive: false, link: "Solution" },
  { label: "Laws and Regulations", isActive: true, link: "Law" },
  { label: "Applications", isActive: false, link: "Integration" },
];

function CategoryTabs({ currentSection }) {
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    setActiveTab(currentSection);
  }, [currentSection]);
  return (
    <div className="max-md:px-4 bg-transparent mt-8 pt-2 flex justify-center  top-0 z-10 w-full overflow-x-scroll no-scrollbar">
      <div className="overflow-x-scroll no-scrollbar  flex whitespace-nowrap gap-5 items-start p-2 text-xl font-medium leading-snug bg-white rounded-[55px] text-[#232323]  max-md:max-w-full mx-auto border">
        {categories.map((category, index) => (
          <div
            key={index}
            className={` md:gap-2.5 self-stretch max-md:text-center max-md:text-[14px] px-8 py-4 font-urbanist flex items-center justify-center ${
              index + 1 == activeTab
                ? "font-semibold text-black bg-lime-400"
                : "bg-white"
            } md:min-w-[240px]   rounded-[60px] max-md:px-5`}
          >
            <Link
              className="font-urbanist text-center"
              href={"#" + category.link}
              onClick={() => setActiveTab(index + 1)}
            >
              {category.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryTabs;
