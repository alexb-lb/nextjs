"use client";
import React, { useState, useEffect, useRef } from "react";
import Hero from "@/components/Plateform/Hero";
import TabSection from "@/components/Plateform/TabSection";
import DeploymentSection from "@/components/Plateform/DeploymentSection";
import LicensingPage from "@/components/Plateform/LicensingPage";
import SecurityTab from "@/components/Plateform/SecurityTab";
import PrivacyTab from "@/components/Plateform/PrivacyTab";
import GovernanceTab from "@/components/Plateform/GovernanceTab";
import ContactForm from "@/components/common/ContactForm";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
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
      <div className=" bg-primary_white relative">
        <div className="relative">
          <div className="lg:p-[80px] lg:pt-[20px] hero_banner">
            <div className="absolute top-28 right-0" ref={lottieRef}></div>
            <Header />
            <Hero />
          </div>
          <TabSection currentSection={currentSection} />
          <SecurityTab
            name="1"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
          <PrivacyTab
            name="2"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
          <div className="lg:pb-[178px]">
            <GovernanceTab
              name="3"
              setCurrentSection={setCurrentSection}
              sectionRefs={sectionRefs}
            />
          </div>
          <DeploymentSection
            name="4"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
          <LicensingPage
            name="5"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
