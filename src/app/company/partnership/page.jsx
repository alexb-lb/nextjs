"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";
import Hero from "./_components/Hero";
import TypesOfPartners from "./_components/TypesOfPartners";
import Benefits from "./_components/Benefits";
import Proposition from "./_components/Proposition";
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
        <TypesOfPartners />
        <Benefits />
        <Proposition />
        <div className="lg:px-[80px] md:sticky md:top-0 px-4">
          <ContactForm />
        </div>
        <Footer />
      </main>
    </>
  );
};
export default Page;
