"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import InfoCard from "@/components/contact/InfoCard";
import Hero from "@/components/contact/Hero";
import ContactForm from "@/components/common/ContactForm";
import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";

const Pages = () => {
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
    <>
      <main className="flex flex-col bg-primary_white relative">
        <div className="lg:px-[80px] lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-20 right-0" ref={lottieRef}></div>
          <Header />
          <Hero />
        </div>

        <div className=" md:px-20 md:w-full">
          <ContactForm sticky={false} />
        </div>
        <section className="flex flex-wrap gap-6 items-start self-center mt-[-100px] w-full text-xl font-semibold max-w-[1166px] max-md:mt-10 max-md:max-w-full max-lg:px-[26px]">
          <InfoCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/2649c49c483bb72da38772bce7a897bb33141d01426894bc55bc7784939e4243?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
            altText="Chat icon"
            title="Chat to Support"
            description="Speak to our friendly team"
            link="info@lightbeam.ai"
          />
          <InfoCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5c5ea850dcda149e633aed2abe2f9ed4b9e3d28b00e39d2289899479b6ed6692?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
            altText="Map icon"
            title="Company Address"
            description="Visit our office HQ"
            link="View on Google Maps"
          />
          <InfoCard
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/639a7bf16028e2164ef923f47e5da15920871f777f64cc500e14dbeffd5fe6e1?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
            altText="Phone icon"
            title="Phone Number"
            description="Mon - Fri from 8am to 5pm"
            link="+1 (650) 224 8706"
          />
        </section>

        <section className="flex md:sticky md:top-[-350px] relative z-10 flex-col pt-20 pb-44 mt-3 w-full text-5xl font-semibold text-black capitalize lg:min-h-[1178px] min-h-[360px] max-lg:pb-[0px] max-lg:pt-[35.56px] max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e7f6d1e25f0dd78c8e7cef92a58e5c03d65ca0b041f78b16b629ffc3570aebb?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
            alt=""
            className="object-cover absolute inset-0 size-full z-10"
          />
          <div className="relative self-center max-md:max-w-full font-sora max-lg:text-[30px] max-lg:leading-[37.8px] max-lg:text-center">
            A Day In A Life at LightBeam.ai
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a2b8968d77a013044675c5e9f954f38362e5072149d985a03a15e8830194a3e?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
            alt="LightBeam.ai activities"
            className="object-contain mt-12 mb-0 w-full aspect-[1.78] max-md:mt-10 max-md:mb-2.5 max-md:max-w-full z-20 max-md:hidden"
          />
          <img
            loading="lazy"
            src="/images/contact/imageCollab.svg"
            alt="images"
            className="size-full z-50 md:hidden"
          />
        </section>

        <Footer />
      </main>
    </>
  );
};
export default Pages;
