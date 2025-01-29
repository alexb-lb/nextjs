"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "./_components/Hero";
import TrendingBlogsSection from "@/components/Home/TrendingBlogsSection";
import AwardsSection from "@/components/common/AwardsSection";
import News from "./_components/News";
import TrustedBySection from "@/components/Home/TrustedBySection";
import CaseStudy from "./_components/CaseStudy";
import CompanyHero from "@/components/company/Hero";
import FeatureSection from "@/components/company/FeatureSection";
import WhitePaper from "./_components/WhitePaper";
import Privacy_Security from "./_components/Privacy_Security";
import EBooks from "./_components/EBooks";
import FAQSection from "@/components/Home/FAQSection";
import ContactForm from "@/components/common/ContactForm";
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
            <div className="absolute top-20 right-0" ref={lottieRef}></div>
            <Header />
            <Hero />
          </div>
          <TrendingBlogsSection />
          <AwardsSection />
          <News />
          <TrustedBySection />
          <CaseStudy />
          <div className="lg:p-[80px] lg:pt-[20px] pt-[40px] max-lg:pb-[58px] bg-[url('/images/company/hero_bg.svg')] bg-cover bg-center bg-no-repeat">
            <CompanyHero />
            <FeatureSection />
          </div>
          <WhitePaper />
          <Privacy_Security />
          <EBooks />
          <FAQSection />
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
