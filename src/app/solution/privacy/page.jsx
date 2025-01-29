"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "./_components/Hero";
import Gdpr from "./_components/Gdpr";
import Quebec from "./_components/Quebec";
import Dpdp from "./_components/Dpdp";
import Spectra from "./_components/Spectra";
import Ferpa from "./_components/Ferpa";
import Hipaa from "./_components/Hipaa";
import UsPrivacyLaws from "./_components/UsPrivacyLaws";
import CaseStudy from "@/components/common/CaseStudy";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";
const Page = () => {
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
      <main className="bg-primary_white mb-[106px] relative">
        <div className="lg:px-[80px] px-4 lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-20 right-0" ref={lottieRef}></div>
          <Header />
          <Hero />
        </div>
        <div className="lg:px-[80px] px-4">
          <Gdpr />
          <Quebec />
        </div>
        <UsPrivacyLaws
          sectionRefs={sectionRefs}
          name={0}
          setCurrentSection={() => {}}
        />
        <div className="lg:px-[80px] px-4">
          <Dpdp />
          <Spectra />
          <Ferpa />
          <Hipaa />
          <CaseStudy />
        </div>
        <div className="md:px-20 md:w-full md:sticky md:top-0 lg:mt-[-100px]">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Page;
