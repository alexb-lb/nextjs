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

const Page = ({
  strapiData = [],
  navigation,
  caseStudy,
  imagesData = {},
  GetInTouchData,
}) => {
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

  const solutionsImages = imagesData && imagesData[2];
  const privacyTabImages = imagesData && imagesData[6];
  const deploymentTabImages = imagesData && imagesData[8];
  const integrationImages = imagesData && imagesData[10];

  return (
    <>
      <div className="relative bg-primary_white ">
        <div className="w-full md:fixed  z-[9999]">
          <Header navigation={navigation?.header} />
        </div>
        <div className="md:p-[80px] md:pb-0 md:pt-[20px] hero_banner">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999]">
            <Header navigation={navigation?.header}/>
          </div> */}
          <div className="md:mt-[100px]">
            <Hero sectionData={strapiData[0]} />
          </div>
        </div>
        <div className="flex flex-col items-center relative">
          <CategoryTabs currentSection={currentSection} />
          <SolutionSection
            name="1"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData[1], strapiData[2]]}
            imagesData={{ ...solutionsImages?.cards }}
          />
          <LawRegulationSection
            name="2"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData[3], strapiData[4]]}
            imagesData={imagesData?.[3]}
          />

          <PrivacyTab
            sectionData={[strapiData[5], strapiData[6]]}
            imagesData={{ ...privacyTabImages }}
          />

          <DeploymentSection
            sectionData={[strapiData[7], strapiData[8]]}
            imagesData={{ ...deploymentTabImages }}
            bgImage={imagesData?.[7]?.images?.data?.[0]?.attributes?.url}
          />
          <IntegrationSection
            name="3"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData[9], strapiData[10]]}
            imagesData={{ ...integrationImages }}
          />
        </div>

        <div className="md:px-20 md:w-full md:sticky md:top-0">
          <ContactForm
            sectionData={strapiData[11]}
            GetInTouchData={GetInTouchData}
          />
        </div>
        <Footer navigation={navigation?.footer} sectionData={strapiData[12]} />
      </div>
    </>
  );
};

export default Page;
