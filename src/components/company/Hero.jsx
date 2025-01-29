"use client";
import React from "react";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
// import Button from "./Button";

function Hero() {
  const router = useRouter();

  return (
    <section className="flex  flex-col items-center self-center lg:mt-16 mt-[45px] max-w-full text-center w-[664px] m-auto">
      <div className="flex flex-col items-center w-full max-lg:px-[24px]">
        <div className=" font-sora  flex flex-col items-center max-w-full w-[551px]">
          <div className="para2 font-urbanist bg-gradient-to-r from-[#DABEF6] to-[#8D83F5] text-transparent bg-clip-text max-md:text-[20px]">
            Powered by Generative AI
          </div>
          <h1 className="title1 gradient_heading mt-4 tracking-tighter  md:my-[20px] max-md:max-w-full ">
            Zero Trust <br /> Data Protection
          </h1>
        </div>
        <p className=" para3B font-urbanist mb-8 text-[#EAEAEA] mt-4 first-line:max-md:max-w-full">
          LightBeam.ai ensures secure data across locations, maintaining
          control, compliance, and privacy for all data types, enabling a
          zero-trust data protection approach.
        </p>
      </div>
      <HoverBorderGradientDemo
        content="Know More"
        // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
        onClick={() => router.push("/company")}
      />
    </section>
  );
}

export default Hero;
