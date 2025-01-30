"use client";
import Hero from "./_components/Hero";
import Content from "./_components/Content";
import Content2 from "./_components/Content2";
import Content3 from "./_components/Content3";
import BookDemoCard from "./_components/BookDemoCard";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CaseStudy from "../../../components/common/CaseStudy";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";

const Page = ({ strapiData, navigation, caseStudy }) => {
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
      <div className="relative bg-primary_white">
        <div className="w-full md:fixed  z-[9999]">
          <Header navigation={navigation?.header} />
        </div>
        <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px] max-lg:pb-[58px]  hero_banner">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999] w-[85%]">
            <Header navigation={navigation?.header} />
          </div> */}
          <Hero strapiData={strapiData} />
        </div>
        <Content />
        <div className="px-4 md:px-[80px]">
          <BookDemoCard strapiData={strapiData} />
        </div>
        <Content2 />
        <Content3 />
        <div className="md:sticky md:top-[-100px] max-md:px-4 md:pb-[97px]">
          <CaseStudy caseStudy={caseStudy} />
        </div>

        <Footer navigation={navigation?.footer} />
      </div>
    </>
  );
};
export default Page;
