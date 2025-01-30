"use client";
import React, { useEffect, useRef } from "react";

import lottie from "lottie-web";
// import animationData from "../../utils/animation/Platform-Page-updated-1.json";
import animationData from "../../utils/animation/Platform Page NO TXT_new.json";

const Hero = ({ sectiondata }) => {
  const lottieRef = useRef(null);
  const lottieInstance = useRef(null); 

  useEffect(() => {
    if (lottieRef.current && !lottieInstance.current) {
      lottieInstance.current = lottie.loadAnimation({
        container: lottieRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    // Cleanup function to destroy the animation on component unmount
    return () => {
      if (lottieInstance.current) {
        lottieInstance.current.destroy();
        lottieInstance.current = null;
      }
    };
  }, []);
  return (
    <>
      <section className=" px-8 pt-[64px]  w-full bg-blend-normal lg:max-h-[100vh] max-lg:min-h-[706px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <section className="flex flex-col w-full text-center lg:text-left">
            <p className="text-[14px] md:text-[20px] leading-[28px] mb-4 font-urbanist bg-gradient-to-r from-[#DABEF6] to-[#8D83F5] text-transparent bg-clip-text">
              {/* Powered by Generative AI */}
              {sectiondata?.content?.title}
            </p>
            <h3 className="bg-clip-text gradient_heading w-full max-md:text-4xl font-sora font-bold text-[38px] md:text-[70px] leading-[88px] mb-[20px]">
              {/* Zero Trust <br /> Data Protection */}
              {sectiondata?.content?.description}
            </h3>
            <p className=" font-urbanist md:mt-0 text-[14px] md:text-[24px] leading-[26px] text-[#EAEAEA] max-md:max-w-full  max-md:mb-6 max-lg:text-center">
              {/* LightBeam.ai ensures secure data across locations, maintaining
              control, compliance, <br /> and privacy for all data types,
              enabling a zero-trust data protection approach. */}
              {sectiondata?.content?.content}
            </p>
          </section>
          <section>
            <div
              // style={{ width: 1280, height: 625, margin: "auto" }}
              className="w-full h-[572px]  md:min-w-[538px] "
              ref={lottieRef}
            ></div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Hero;
