"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import CaseStudy from "@/components/common/CaseStudy";
import ContactForm from "@/components/common/ContactForm";

import Hero from "./_components/Hero";
import AiGover from "./_components/AiGover";
import EuAiAct from "./_components/EuAiAct";
import Biden from "./_components/Biden";
import CdAdmt from "./_components/CdAdmt";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";

const Page = ({ strapiData, navigation, caseStudy, GetInTouchData }) => {
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
        <div className="lg:px-[80px] px-4 lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999]">
            <Header navigation={navigation?.header}/>
          </div> */}

          <Hero sectionData={strapiData[0]} />
        </div>
        <div className="lg:px-[80px] px-4">
          <AiGover sectionData={strapiData[1]} />
          <EuAiAct sectionData={strapiData[2]} />
          <Biden sectionData={strapiData[3]} />
          <CdAdmt sectionData={strapiData[4]} />
          <CaseStudy sectionData={strapiData[5]} caseStudy={caseStudy} />
        </div>
        <div className="md:px-20 md:w-full md:sticky md:top-0 lg:mt-[-60px]">
          <ContactForm sectionData={strapiData[6]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer navigation={navigation?.footer} sectionData={strapiData[7]} />
      </main>
    </>
  );
};
export default Page;
