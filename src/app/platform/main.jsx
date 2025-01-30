"use client";
import React, { useState, useEffect, useRef } from "react";
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
import Hero from "@/components/Home/Hero";

const Page = ({ strapiData, navigation, caseStudy, imageData = {} , GetInTouchData}) => {
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

  const secrityTabImages = imageData?.sections?.[2];
  const privacyTabImages = imageData?.sections?.[4];
  const governaceTabImages = imageData?.sections?.[6];
  const liscensingImages = imageData?.sections?.[10];

  return (
    <>
      <div className=" bg-primary_white relative">
        <div className="relative">
          <div className="w-full md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div>
          <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px]  hero_banner">
            <div className="absolute top-28 right-0" ref={lottieRef}></div>
            {/* <div className="md:w-[90%] md:fixed z-[9999]">
              <Header navigation={navigation?.header}/>
            </div> */}
            <div className="md:mt-[100px]">
              <Hero sectiondata={strapiData?.sections?.[0]} />
            </div>
          </div>
          <TabSection currentSection={currentSection} />
          <SecurityTab
            name="1"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData?.sections?.[1], strapiData?.sections?.[2]]}
            imageData={{ ...secrityTabImages }}
          />
          <PrivacyTab
            name="2"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData?.sections?.[3], strapiData?.sections?.[4]]}
            imageData={{ ...privacyTabImages }}
          />
          <div className="lg:pb-[178px]">
            <GovernanceTab
              name="3"
              setCurrentSection={setCurrentSection}
              sectionRefs={sectionRefs}
              sectionData={[strapiData?.sections?.[5], strapiData?.sections?.[6]]}
              imageData={{ ...governaceTabImages }}
            />
          </div>
          <DeploymentSection
            name="4"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData?.sections?.[7], strapiData?.sections?.[8]]}
            imageData={imageData?.sections?.[8]}
            bgImage={imageData?.sections?.[7]?.images?.data?.[0]?.attributes?.url}
          />
          {/*
          <LicensingPage
            name="5"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData?.sections?.[9], strapiData?.sections?.[10]]}
            imageData={{ ...liscensingImages }}
          />
          */}
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm sectionData={strapiData?.sections?.[11]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData?.sections?.[12]}
        />
      </div>
    </>
  );
};

export default Page;
