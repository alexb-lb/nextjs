import React from "react";

const Hero = () => {
  return (
    <>
      <section className="md:pl-[100px]">
        <div className="flex flex-col w-full text-center md:text-left mt-[80px]">
          <h3 className="bg-clip-text gradient_heading w-full max-md:text-4xl font-sora font-bold text-[38px] md:text-[70px] leading-[70px] mb-[12px] py-2">
            Newsroom
          </h3>
          <p className=" font-urbanist  text-[14px] md:text-[18px] leading-[26px] text-[#EAEAEA] max-md:max-w-full max-lg:text-center mb-[60px]">
            Get the Latest on Zero-Trust Data Protection:
            <br /> Insights from the LightBeam Team
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
