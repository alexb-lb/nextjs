"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";

import Hero from "./_components/Hero";
import Content from "./_components/Content";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";

const Pages = ({ strapiData, navigation = [], caseStudy }) => {
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
      <main className="flex flex-col bg-primary_white relative">
        <div className="w-full md:fixed  z-[9999]">
          <Header navigation={navigation?.header} />
        </div>
        <div className="lg:px-[80px] lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999]">
            <Header navigation={navigation?.header}/>
          </div> */}
          <Hero strapiData={strapiData} />
        </div>
        <div className="lg:px-[200px] px-4">
          <Content />
        </div>

        <Footer navigation={navigation?.footer} strapiData={strapiData} />
      </main>
    </>
  );
};
export default Pages;
