"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "./_components/Hero";
import Role from "./_components/Role";
import Footer from "@/components/common/Footer";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";


const Page = ({ strapiData, navigation, jobData }) => {
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
      <div className=" bg-primary_white relative">
        <div className="relative">
          <div className="w-full md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div>
          <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px]  hero_banner">
            <div className="absolute top-28 right-0" ref={lottieRef}></div>
            {/* <div className="md:w-[90%] md:fixed  z-[9999]">
              <Header navigation={navigation?.header} />
            </div> */}
            <Hero strapiData={strapiData} jobData={jobData} />
          </div>
        </div>
        <div className="lg:w-[80%] w-[90%] mx-auto ">
          <Role jobData={jobData} />
          {/* <Requirment /> */}
          {/* <Company /> */}
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections[11]}
        />
      </div>
    </>
  );
};

export default Page;
