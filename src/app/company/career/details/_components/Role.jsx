"use client";

import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useEffect, useRef } from "react";

const Role = ({ jobData = [] }) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.innerHTML = jobData[0]?.attributes?.content;
    }
  }, []);

  const ref = useRef();

  function handleClick() {
    window.location.href = "mailto:talent@lightbeam.ai";
  }

  return (
    <section className="flex flex-col justify-center lg:py-[100px] py-[50px]">
      <div className="flex max-md:flex-col max-md:gap-5 justify-between items-center">
        <h1 className="title2 font-semibold text-[#444444]">About the Role</h1>
        {/* <HoverBorderGradientDemo content="Apply Now" onClick={handleClick} /> */}
      </div>
      <div ref={ref} className="mt-9 text-[#444444] lg:text-lg text-sm"></div>
      <div className="flex max-md:flex-col max-md:gap-5 justify-between items-center mt-6">
        <HoverBorderGradientDemo content="Apply Now" onClick={handleClick} />
      </div>
    </section>
  );
};
export default Role;
