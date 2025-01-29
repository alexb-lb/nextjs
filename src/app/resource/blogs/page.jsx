"use client";
import React from "react";
import Header from "@/components/common/Header";
import Hero from "./_components/Hero";
import Tabs from "./_components/Tabs";
import TrendingBlogsSection from "@/components/Home/TrendingBlogsSection";
import SearchBlogs from "./_components/SearchBlogs";
import FAQSection from "@/components/Home/FAQSection";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";
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
          <Tabs />
          <TrendingBlogsSection />
          <SearchBlogs />
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
