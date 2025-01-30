"use client";
import React from "react";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

function Hero({ strapiData }) {
  const router = useRouter();

  return (
    <section className="flex  flex-col items-center self-center lg:mt-16 mt-[45px] max-w-full text-center w-[664px] m-auto">
      <div className="flex flex-col items-center w-full max-lg:px-[24px]">
        <div className=" font-sora  flex flex-col items-center max-w-full w-[551px]">
          <div className="para2 font-urbanist bg-gradient-to-r from-[#DABEF6] to-[#8D83F5] text-transparent bg-clip-text max-md:text-[20px]">
            {strapiData?.sections[0]?.content?.title}
            {/* Powered by Generative AI */}
          </div>
          <h1 className="title1 gradient_heading mt-4 tracking-tighter  md:my-[20px] max-md:max-w-full ">
            {/* Zero Trust <br /> Data Protection */}
            {strapiData?.sections[0]?.content?.description}
          </h1>
        </div>
        <p className=" para3B md:text-[24px] font-urbanist mb-8 text-[#EAEAEA] mt-4 first-line:max-md:max-w-full">
          {strapiData?.sections[0]?.content?.content}
        </p>
      </div>
      <HoverBorderGradientDemo
        content={strapiData?.sections[0]?.cta[0]?.text}
        // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
        onClick={() =>
          strapiData?.sections[0]?.cta[0]?.url &&
          router.push(strapiData?.sections[0]?.cta[0]?.url)
        }
      />
    </section>
  );
}

export default Hero;
