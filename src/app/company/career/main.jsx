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

const Page = ({
  strapiData,
  imagesData,
  navigation,
  caseStudy,
  allJobs,
  GetInTouchData,
}) => {
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
          <div className="w-full md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div>
          <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px]  hero_banner">
            <div className="absolute top-28 right-0 z-10" ref={lottieRef}></div>
            {/* <div className="md:w-[90%] md:fixed  z-[9999] ">
              <Header navigation={navigation?.header}/>
            </div> */}
            <div className="md:mt-[200px]">
              <Hero strapiData={strapiData} />
            </div>
          </div>
        </div>
        <Jobs strapiData={strapiData} allJobs={allJobs} />
        <div className="px-4 max-md:mt-[52px] md:px-20">
          <Section strapiData={strapiData} imagesData={imagesData} />

          <Gallery strapiData={strapiData} />
        </div>
        <Zerotrust strapiData={strapiData} imagesData={imagesData} />
        <Whyus strapiData={strapiData} />
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm
            sectionData={strapiData.sections[10]}
            GetInTouchData={GetInTouchData}
          />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections[11]}
        />
      </div>
    </>
  );
};

export default Page;
