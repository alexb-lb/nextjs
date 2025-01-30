"use client";
import React from "react";
import Hero from "./_components/Hero";
import AccessCard from "./_components/AccessCard";
import KeyBenefits from "./_components/KeyBenefits";
import LightBeamSolutions from "./_components/LightBeamSolutions";
import OurCoverage from "./_components/OurCoverage";
import TestimonialSection from "./_components/TestimonialSection";
import MicrosoftCopilot from "./_components/MicrosoftCopilot";
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
            <div className="md:mt-[100px]">
              <Hero
                sectionData={strapiData?.sections && strapiData?.sections[0]}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-[32px] lg:px-[70px] lg:py-[56px]">
          <AccessCard
            sectionData={strapiData?.sections && strapiData?.sections[1]}
          />
        </div>
        <TestimonialSection
          sectionData={strapiData?.sections && strapiData?.sections[2]}
        />
        <KeyBenefits
          sectionData={[
            strapiData?.sections && strapiData?.sections[3],
            strapiData?.sections && strapiData?.sections[4],
          ]}
          imageData={imageData?.sections[4]}
        />
        <LightBeamSolutions
          sectionData={[
            strapiData?.sections && strapiData?.sections[5],
            strapiData?.sections && strapiData?.sections[6],
          ]}
          imageData={imageData?.sections[6]}
        />
        <OurCoverage
          sectionData={strapiData?.sections && strapiData?.sections[7]}
        />
        <MicrosoftCopilot
          sectionData={[
            strapiData?.sections && strapiData?.sections[8],
            strapiData?.sections && strapiData?.sections[9],
          ]}
          imageData={imageData?.sections[9]}
        />
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm
          // sectionData={strapiData.sections[13]}
          GetInTouchData={GetInTouchData}
          />
        </div>
        <Footer
          navigation={navigation?.footer}
          // sectionData={strapiData.sections[14]}
        />
      </div>
    </>
  );
};

export default Page;
