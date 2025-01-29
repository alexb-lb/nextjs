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
        <div className="lg:px-[80px] lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-20 right-0" ref={lottieRef}></div>
          <Header />
          <Hero />
        </div>
        <div className="lg:px-[80px] px-4">
          <Pci />
        </div>
        <GLBA />
        <div className="lg:px-[80px] px-4">
          <Nist />
          <CaseStudy />
        </div>
        <div className="md:px-20 md:w-full md:sticky md:top-0">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Page;
