"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";

import Hero from "./_components/Hero";
import OurMission from "./_components/OurMission";
import OurVission from "./_components/OurVission";
import Proposition from "./_components/Proposition";
import BackedUp from "./_components/BackedUp";
import Globe from "./_components/Globe";
import SolutionsPage from "@/components/Home/SolutionsPage";
import PlatformSection from "@/components/Home/PlatformSection";
import CareerSection from "@/components/company/CareerSection";
import PartnershipCard from "./_components/PartnershipCard";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";

const Page = ({ strapiData = {}, navigation = [], caseStudy, imageData, GetInTouchData }) => {
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
          {/* <div className="md:w-[90%] md:fixed  z-[9999] ">
            <Header navigation={navigation?.header}/>
          </div> */}
          <div className="md:mt-[100px]">
            <Hero strapiData={strapiData} />
          </div>
        </div>
        <OurMission strapiData={strapiData} />
        <OurVission strapiData={strapiData} />
        <Proposition
          sectionData={[strapiData.sections[3], strapiData.sections[4]]}
          imageData={imageData}
        />
        <SolutionsPage
          sectionData={[strapiData?.sections[5], strapiData?.sections[6]]}
          bgImage={imageData?.sections?.[5]?.images?.data?.[0]?.attributes?.url} 
        />
        <PlatformSection
          height={0}
          sectionData={[strapiData?.sections[7], strapiData?.sections[8]]}
          imageData={imageData?.sections[8]}
        />
        <BackedUp strapiData={strapiData} imageData={imageData.sections[10]} />
        <Globe strapiData={strapiData} />
        <CareerSection strapiData={strapiData} imageData={imageData} />
        <div className="md:px-[80px]">
          <PartnershipCard strapiData={strapiData} />
        </div>

        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm sectionData={strapiData?.sections[15]} GetInTouchData={GetInTouchData}  />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData?.sections[16]} 
        />
      </main>
    </>
  );
};
export default Page;
