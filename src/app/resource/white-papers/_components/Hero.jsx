import React from "react";

const Hero = ({ strapiData }) => {
  return (
    <>
      <section className="md:pl-[100px]">
        <div className="flex flex-col w-full text-center md:text-left mt-[80px]">
          <h3 className="bg-clip-text gradient_heading w-full font-sora font-bold title1 mb-[12px] py-2">
            {strapiData?.sections[0]?.content?.title}
            {/* White Papers */}
          </h3>
          <p className=" font-urbanist  text-[14px] md:text-[24px] leading-[26px] text-[#EAEAEA] max-md:max-w-full max-lg:text-center mb-[60px]">
            {strapiData?.sections[0]?.content?.description}
            {/* Get the Latest on Zero-Trust Data Protection: Insights from the
            LightBeam Team */}
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
