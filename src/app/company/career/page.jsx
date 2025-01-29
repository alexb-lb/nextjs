"use client";
import ContactForm from "@/components/common/ContactForm";
import Footer from "@/components/common/Footer";
import Hero from "@/components/career/Hero";
import Jobs from "@/components/career/Jobs";
import Gallery from "@/components/career/Gallery";
import Zerotrust from "@/components/career/Zerotrust";
import Whyus from "@/components/career/Whyus";
import React from "react";
import Header from "@/components/common/Header";
import Section from "../../../components/career/Section";
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
      <div className=" bg-primary_white relative">
        <div className="relative">
          <div className="lg:p-[80px] lg:pt-[20px] hero_banner">
            <div className="absolute top-20 right-0" ref={lottieRef}></div>
            <Header />
            <Hero />
          </div>
        </div>
        <Jobs />
        <div className="px-4 max-md:mt-[52px] md:px-20">
          <Section />

          <Gallery />
        </div>
        <Zerotrust />
        <Whyus />
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Page;
