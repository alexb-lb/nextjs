"use client";
import React from "react";
import Hero from "./_components/Hero";
import Request from "./_components/Request";
import Privacy from "./_components/Privacy";
import Records from "./_components/Records";
import Notification from "./_components/Notification";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
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
            <div className="absolute top-28 right-0" ref={lottieRef}></div>
            <Header />
            <Hero />
          </div>
          <Request />
          <Records />
          <Privacy />

          <Notification />
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
