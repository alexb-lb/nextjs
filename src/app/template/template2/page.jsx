"use client";
import Hero from "./_components/Hero";
import Content from "./_components/Content";
import Content2 from "./_components/Content2";
import Content3 from "./_components/Content3";
import BookDemoCard from "./_components/BookDemoCard";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CaseStudy from "../../../components/common/CaseStudy";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";

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
        </div>
        <Content />
        <div className="px-4 md:px-[80px]">
          <BookDemoCard />
        </div>
        <Content2 />
        <Content3 />
        <div className="md:sticky md:top-[-100px] max-md:px-4 md:pb-[97px]">
          <CaseStudy />
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Page;
