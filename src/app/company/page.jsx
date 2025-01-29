"use client";
import Hero from "@/components/company/Hero";
import FeatureSection from "@/components/company/FeatureSection";
import AwardsSection from "@/components/common/AwardsSection";
import PartnershipSection from "@/components/company/PartnershipSection";
import TestimonialSection from "@/components/common/TestimonialSection";
import CareerSection from "@/components/company/CareerSection";
import NewsSection from "@/components/company/NewsSection";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";
import News from "../resource/_components/News";

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
      <div className="relative bg-primary_white">
        <div className="lg:p-[80px] lg:pt-[20px] max-lg:pb-[58px] hero_banner">
          <div className="absolute top-20 right-0" ref={lottieRef}></div>
          <Header />
          <Hero />
          <FeatureSection />
        </div>

        <AwardsSection />
        <PartnershipSection />

        <TestimonialSection value="-40px" pt="171px" />
        <CareerSection />
        {/* <NewsSection /> */}
        <News />
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Page;
