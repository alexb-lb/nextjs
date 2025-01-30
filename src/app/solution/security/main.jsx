"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";
import CaseStudy from "@/components/common/CaseStudy";

import Hero from "./_components/Hero";
import Pci from "./_components/Pci";
import Nist from "./_components/Nist";
import GLBA from "./_components/GLBA";
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
      <main className="bg-primary_white relative">
        <div className="w-full md:fixed  z-[9999]">
          <Header navigation={navigation?.header} />
        </div>
        <div className="lg:px-[80px] lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999]">
            <Header navigation={navigation?.header}/>
          </div> */}

          <Hero sectionData={strapiData[0]} />
        </div>
        <div className="lg:px-[80px] px-4">
          <Pci
            sectionData={[
              strapiData[1],
              strapiData[2],
              strapiData[3],
              strapiData[4],
            ]}
          />
        </div>
        <GLBA
          sectionData={[strapiData[5], strapiData[6]]}
          imageData={imageData[6]}
        />
        <div className="lg:px-[80px] px-4">
          <Nist sectionData={strapiData[7]} />
          <CaseStudy sectionData={strapiData[8]} caseStudy={caseStudy} />
        </div>
        <div className="md:px-20 md:w-full md:sticky md:top-0">
          <ContactForm sectionData={strapiData[9]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer navigation={navigation?.footer} sectionData={strapiData[10]} />
      </main>
    </>
  );
};
export default Page;
