import React from "react";
import AnimationComponent from "../Home/AnimationComponent";

const Hero = () => {
  return (
    <>
      <section className="flex  flex-col items-center justify-center px-[23px] lg:px-16 py-10 w-full bg-blend-normal lg:min-h-[832px] max-md:px-5 max-md:max-w-full ">
        {/* <div className=" mt-16 tracking-tighter max-md:mt-10 max-md:max-w-full max-md:text-4xl">
          <h1 className=" gradient_heading title1 max-md:max-w-full max-md:text-[38px] text-center">
            Zero Trust <br /> Data Protection
          </h1>
        </div>
        <p className="mt-[16px] font-urbanist lg:mt-6 text-[14px] leading-[16.8px] text-center lg:text-xl lg:leading-snug text-zinc-100 max-md:max-w-full">
          Accelerate your growth in new markets with speed and confidence.
        </p>
        <div className="mt-[355px]">
          <HoverBorderGradientDemo content="Know More" />
        </div> */}
        {/* <div className=" max-md:h-[35vh] md:h-[50vh] lg:h-[80vh] max-md:min-w-[90%] md:min-w-[100%] lg:min-w-[70%] bg-[url('/images/home/home_hero.gif')] bg-cover bg-no-repeat bg-center"></div> */}
        <AnimationComponent />
      </section>
    </>
  );
};

export default Hero;
