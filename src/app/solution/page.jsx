"use client";
import React, { useRef, useState, useEffect } from "react";
import Hero from "@/components/Solution/Hero";
import CategoryTabs from "@/components/Solution/CategoryTabs";

import SolutionSection from "@/components/Solution/SolutionSection";

import DeploymentSection from "@/components/Solution/DeploymentSection";
import LawRegulationSection from "@/components/Solution/LawRegulationSection";
import IntegrationSection from "@/components/Solution/IntegrationSection";

import Header from "@/components/common/Header";

import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";
import PrivacyTab from "@/components/Solution/PrivacyTab";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";

const Page = () => {
  const [currentSection, setCurrentSection] = useState(1);

  const sectionRefs = useRef([]);
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
      <div className="relative bg-primary_white ">
        <div className="md:p-[80px] md:pb-0 md:pt-[20px] hero_banner">
          <div className="absolute top-20 right-0" ref={lottieRef}></div>
          <Header />
          <Hero />
        </div>
        <div className="flex flex-col items-center relative">
          <CategoryTabs currentSection={currentSection} />
          <SolutionSection
            name="1"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
          <LawRegulationSection
            name="2"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />

          <PrivacyTab />

          <DeploymentSection />
          <IntegrationSection
            name="3"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
        </div>

        <div className="md:px-20 md:w-full md:sticky md:top-0">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
