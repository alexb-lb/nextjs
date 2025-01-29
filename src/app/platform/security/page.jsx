"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./_components/Hero";
import CaseStudy from "@/components/customer/CaseStudy";
import TabSection from "@/components/Plateform/TabSection";
import SecurityTab from "@/components/Plateform/SecurityTab";
import PrivacyTab from "@/components/Plateform/PrivacyTab";
import DataIdentity from "./_components/DataIdentity";
import Management from "./_components/Management";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import DataPosture from "./_components/DataPosture";
import SuccessStory from "./_components/SuccessStory";
import RemediateRisk from "./_components/RemediateRisk";
import AuditControl from "./_components/AuditControl";
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
          <div className="bg-[url('/images/platform/posture_bg.svg')] bg-cover bg-center bg-no-repeat">
            <DataPosture />
          </div>
          <div className="lg:px-[80px] px-8">
            <SuccessStory />
          </div>
          <DataIdentity
            name="4"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />

          {/* <TabSection currentSection={currentSection} /> */}
          <RemediateRisk
            name="1"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
          <AuditControl
            name="2"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
          />
          <Management />
        </div>
        <div className="md:px-20 max-md:px-0 md:sticky md:top-0">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
