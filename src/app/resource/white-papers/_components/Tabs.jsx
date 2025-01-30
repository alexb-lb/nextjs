"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Tabs = ({ sectionData }) => {
  const [tabIndex] = useState(3);
  const router = useRouter();
  return (
    <div className="mt-10 px-4 z-[999] relative">
      <div
        className={`md:w-min w-full m-auto p-2 
          no-scrollbar overflow-hidden max-md:overflow-x-scroll
          flex items-center max-md:justify-between  md:gap-4 gap-[13px] 
          text-primary_black font-urbanist para3B
          border border-solid border-zinc-300 rounded-[60px]`}
      >
        {sectionData?.cards?.map((item, ind) => (
          <button
            type="button"
            className={`md:gap-2.5 md:self-stretch md:py-4 py-2 max-md:px-[9.5px]  rounded-[60px] md:w-[200px] max-md:w-[100px]  max-md:text-[14px] max-md:leading-[16.8px] ${
              tabIndex === ind + 1 && "bg-primary_green font-semibold"
            }`}
            onClick={() => router.push(item?.cta_url)}
            key={ind}
          >
            {/* Blog */}
            {item?.title}
          </button>
        ))}
        
      </div>
    </div>
  );
};

export default Tabs;
