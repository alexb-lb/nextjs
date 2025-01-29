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

const Page = () => {
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
        <div className="lg:px-[80px] px-4 lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-20 right-0" ref={lottieRef}></div>
          <Header />
          <Hero />
        </div>
        <OurMission />
        <OurVission />
        <Proposition />
        <SolutionsPage />
        <PlatformSection height={0} />
        <BackedUp />
        <Globe />
        <CareerSection />
        <div className="md:px-[80px]">
          <PartnershipCard />
        </div>

        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Page;
