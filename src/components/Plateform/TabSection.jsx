"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const tabs = ["Security", "Privacy", "Governance", "Deployment", "Licensing"];

function TabSection({ currentSection }) {
  const [activeTab, setActiveTab] = useState(1);
  useEffect(() => {
    setActiveTab(currentSection);
  }, [currentSection]);
  return (
    <section className="max-md:px-4 flex justify-center bg-transparent md:mt-8 sticky top-0 z-50">
      <div className="max-w-full overflow-x-scroll no-scrollbar flex gap-5 items-start self-center p-2 mt-2 lg:mb-[34px] text-xl font-medium leading-snug text-center whitespace-nowrap bg-white border  rounded-[55px] text-[#232323] max-md:mt-10 max-md:max-w-full ">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={` gap-2.5 self-stretch flex items-center justify-center  lg:py-3.5 py-[12.5px] w-40 max-md:w-auto ${
              index + 1 == activeTab
                ? "font-semibold  text-[#232323] bg-[#B6F41E] shadow-[0px_4px_24px_rgba(35,35,35,0.24)]"
                : "bg-white"
            } md:min-h-[56px] rounded-[55px] max-lg:text-[14px] max-lg:leading-[16.8px]  max-lg:min-w-[100px]`}
          >
            <Link
              className="font-urbanist"
              href={"#" + tab}
              onClick={() => setActiveTab(index + 1)}
            >
              {tab}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TabSection;
