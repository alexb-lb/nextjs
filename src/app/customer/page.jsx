"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/customer/Hero";
import CaseStudy from "@/components/common/CaseStudy";
import TrustedBy from "@/components/customer/TrustedBy";
import SuccessStories from "@/components/customer/SuccessStories";
import IndustryExpert from "@/components/customer/IndustryExpert";
import CustomerExperiencesSection from "@/components/Home/CustomerExperiencesSection";
import AwardsSection from "../../components/common/AwardsSection";
import ContactForm from "@/components/common/ContactForm";
import CompanyHero from "@/components/company/Hero";
import FeatureSection from "@/components/company/FeatureSection";
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
        <div className="lg:px-[80px] lg:pt-[20px] hero_banner  w-full">
          <div className="absolute top-20 right-0" ref={lottieRef}></div>
          <Header />
          <Hero />
        </div>
        <div className="lg:p-[80px] lg:pb-[53px] md:bg-[url('/images/customers/case_study_bg.svg')] bg-bottom bg-cover bg-no-repeat max-lg:px-4 w-full">
          <CaseStudy />
        </div>
        <TrustedBy />
        <div
          className="lg:px-[80px]  px-4 lg:pb-2 md:bg-[url('/images/customers/stories_bg.svg')] bg-center bg-cover bg-no-repeat w-full"
          style={{ backgroundPositionY: "-95px" }}
        >
          <SuccessStories />
        </div>
        <CustomerExperiencesSection />
        <div className="lg:pl-[80px] px-4 lg:py-[110px] md:bg-[url('/images/customers/expert_bg.svg')] bg-center bg-cover bg-no-repeat  w-full overflow-hidden">
          <IndustryExpert />
        </div>
        <div className="lg:p-[80px] lg:pt-[20px] pt-[40px] max-lg:pb-[58px] bg-[url('/images/company/hero_bg.svg')] bg-cover bg-center bg-no-repeat">
          <CompanyHero />
          <FeatureSection />
        </div>

        <AwardsSection />

        <div className="lg:px-20  md:sticky top-0 bg-primary_white md:mt-[-200px]">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Page;
