"use client";

import React, { useEffect, useRef } from "react";
import Header from "../components/common/Header";
import Hero from "../components/Home/Hero";
import TrustedBySection from "../components/Home/TrustedBySection";
import ZeroTrustSection from "../components/Home/ZeroTrustSection";
import PlatformSection from "../components/Home/PlatformSection";
import UseCasesSection from "../components/Home/UseCaseSection";
import IntegrationsSection from "../components/Home/IntegrationsSection";
import SolutionsPage from "../components/Home/SolutionsPage";
import ZeroTrustDataProtectionSection from "../components/Home/ZeroTrustDataProtectionSection";
import AwardsSection from "../components/common/AwardsSection";
import CustomerExperiencesSection from "../components/Home/CustomerExperiencesSection";
import TrendingBlogsSection from "../components/Home/TrendingBlogsSection";
import FAQSection from "../components/Home/FAQSection";
import FreeDemo from "../components/Home/FreeDemo";
import ContactForm from "../components/common/ContactForm";
import TestimonialSection from "../components/common/TestimonialSection";
import Footer from "../components/common/Footer";
import lottie from "lottie-web";
import animationData from "../utils/animation/Torch-interaction.json";
const LandingPage: React.FC = () => {
  const lottieRef = useRef(null) as any;
  const lottieInstance = useRef(null) as any;

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
    <div className="bg-primary_white relative">
      <div className="lg:p-[80px] h-full lg:pb-0 relative lg:pt-[20px] hero_banner">
        <div className="absolute top-28 right-0" ref={lottieRef}></div>
        <Header />
        <Hero />
      </div>
      <TrustedBySection />
      <ZeroTrustSection />
      <PlatformSection height={255} />
      <UseCasesSection />
      <TestimonialSection value="" pt={""} />
      <IntegrationsSection />
      <SolutionsPage />
      <ZeroTrustDataProtectionSection />
      <AwardsSection />
      <CustomerExperiencesSection />
      <div className=" md:px-20">
        <FreeDemo />
      </div>
      <div className="md:mb-[120px]">
        <TrendingBlogsSection />
      </div>
      <FAQSection />
      <div className=" md:px-20 md:sticky md:top-0">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
