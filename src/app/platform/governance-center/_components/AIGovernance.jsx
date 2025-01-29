import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import React from "react";

const AIGovernance = () => {
  return (
    <div
      className="lg:pt-[93px] pt-[42px] px-4 lg:px-[80px] lg:mt-[128px] mt-[80px]"
      style={{
        backgroundImage: "url('/images/platform/AiBg.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex max-lg:justify-center gap-[20px] max-md:px-10">
        <img
          loading="lazy"
          src="/images/platform/Ai.png"
          alt=""
          className="max-md:hidden"
        />
        <h3
          className="gradient_heading font-sora text-[24px] lg:text-[48px] 
        lg:leading-[60px] font-semibold"
        >
          AI Governance
        </h3>
      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between mt-[28px] pb-[42px] ">
        <p
          className="font-urbanist text-[16px] lg:text-[20px] 
        lg:leading-[28px] text-primary_white max-w-[847px] text-center xl:text-left mb-[28px] lg:mb-0"
        >
          LightBeam is a platform that helps manage both generative AI and
          Machine Learning models and datasets. It helps identify potential
          risks and challenges associated with your models and datasets and
          detects hidden biases in training data to ensure fair and unbiased AI.
        </p>
        <Link href={"/template/template1"}>
          <HoverBorderGradientDemo
            content="Know More"
            // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
          />
        </Link>
      </div>

      <div className="w-full flex flex-row overflow-x-scroll items-center mb-justify-center gap-[20px] pb-[72px]">
        <div className="md:w-full max-md:min-w-[243px] md:h-max bg-[#ffffff] bg-opacity-10 rounded-[20px] max-md:rounded-[10px] ">
          <div className="p-3  ">
            <img
              loading="lazy"
              src="/images/platform/Ai2.png"
              alt=""
              className="w-full max-md:h-[175px]"
            />
          </div>
          <p className="p-6 max-md:p-3 text-[#FFFFFF] text-[12px] md:text-[20px] md:leading-[28px] font-urbanist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ipsum dolor sit
            amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="md:w-full max-md:min-w-[243px] md:h-max bg-[#ffffff] bg-opacity-10 rounded-[20px] max-md:rounded-[10px] ">
          <div className="p-3  ">
            <img
              loading="lazy"
              src="/images/platform/Ai3.png"
              alt=""
              className="w-full max-md:h-[175px]"
            />
          </div>
          <p className="p-6 max-md:p-3 text-[#FFFFFF] text-[12px] md:text-[20px] md:leading-[28px] font-urbanist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna ipsum dolor sit
            amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIGovernance;
