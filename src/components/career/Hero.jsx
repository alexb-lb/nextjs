import React from "react";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
// import Button from "./Button";

function Hero() {
  return (
    <section className="flex  flex-col items-center self-center lg:mt-16 mt-[45px] max-w-full text-center h-[300px] m-auto">
      <div className="flex flex-col items-center w-full max-lg:px-[24px]">
        <div className=" font-sora  flex flex-col items-center max-w-full w-[551px]">
          <h1 className="title1 gradient_heading mt-4 tracking-tighter mb-[12px] max-md:max-w-full ">
            Work with us
          </h1>
        </div>
        <p className=" para3B font-urbanist mb-8 text-[#EAEAEA] mt-1 pb-6 sm:pb-[1px] sm:mt-4 first-line:max-md:max-w-full lg:max-w-[561px]">
          We are here to make an impact on people&apos;s lives, by providing
          them with flexible work, the opportunity to learn new skills, and the
          ability to prioritize the important things in their life.We want you
          to be part of this journey!
        </p>
      </div>
    </section>
  );
}

export default Hero;
