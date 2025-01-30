"use client";
import React from "react";
import Hero from "./_components/Hero";
import Access from "./_components/Access";
import Retention from "./_components/Retention";
import Content from "./_components/Content";
import AIGovernance from "./_components/AIGovernance";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";

const Page = ({ strapiData, navigation, caseStudy, imageData, GetInTouchData }) => {
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
              <Header navigation={navigation?.header}/>
            </div> */}
            <div className="md:mt-[100px]">
              <Hero sectionData={strapiData.sections[0]} />
            </div>
          </div>
          <Access
            sectionData={[strapiData.sections[1], strapiData.sections[2]]}
            imageData={imageData.sections[2]}
          />
          <Retention
            sectionData={[
              strapiData.sections[3],
              strapiData.sections[4],
              strapiData.sections[5],
              strapiData.sections[6],
              strapiData.sections[7],
              strapiData.sections[8],
            ]}
          />
          <Content
            sectionData={[strapiData.sections[9], strapiData.sections[10]]}
          />
          <AIGovernance
            sectionData={[strapiData.sections[11], strapiData.sections[12]]}
            imageData={imageData?.sections[12]}
          />
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm sectionData={strapiData.sections[13]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections[14]}
        />
      </div>
    </>
  );
};

export default Page;
