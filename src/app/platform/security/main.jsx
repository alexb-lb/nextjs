"use client";
import React, { useEffect, useRef, useState } from "react";
import Hero from "./_components/Hero";
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

const Page = ({ strapiData, navigation, caseStudy, imageData = {}, GetInTouchData }) => {
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
          <div className="w-full md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div>
          <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px]  hero_banner">
            <div className="absolute top-28 right-0" ref={lottieRef}></div>
            {/* <div className="md:w-[90%] md:fixed  z-[9999]">
              <Header navigation={navigation?.header}/>
            </div> */}
            <div className="md:mt-[100px]">
              <Hero
                sectionData={strapiData.sections[0]}
                imageData={imageData?.sections[0]}
              />
            </div>
          </div>
          <div className="bg-[url('/images/platform/posture_bg.svg')] bg-cover bg-center bg-no-repeat">
            <DataPosture
              sectionData={[strapiData.sections[1], strapiData.sections[2]]}
              imageData={imageData?.sections[2]}
            />
          </div>
          <div className="lg:px-[80px] px-8">
            <SuccessStory
              sectionData={[strapiData.sections[3], strapiData.sections[4]]}
              caseStudy={caseStudy}
            />
          </div>
          <DataIdentity
            name="4"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData.sections[5], strapiData.sections[6]]}
            imageData={[imageData.sections[5], imageData.sections[6]]}
          />

          <RemediateRisk
            name="1"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData.sections[7], strapiData.sections[8]]}
            imageData={imageData.sections[8]}
          />
          <AuditControl
            name="2"
            setCurrentSection={setCurrentSection}
            sectionRefs={sectionRefs}
            sectionData={[strapiData.sections[9], strapiData.sections[10]]}
            imageData={imageData.sections[10]}
          />
          <Management
            sectionData={[
              strapiData.sections[11],
              strapiData.sections[12],
              strapiData.sections[13],
              strapiData.sections[14],
            ]}
          />
        </div>
        <div className="md:px-20 max-md:px-0 md:sticky md:top-0">
          <ContactForm sectionData={strapiData.sections[15]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections[16]}
        />
      </div>
    </>
  );
};

export default Page;
