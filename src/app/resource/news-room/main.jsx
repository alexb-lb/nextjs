"use client";
import React from "react";
import Hero from "./_components/Hero";
import LatestNews from "./_components/LatestNews";
import SearchNews from "./_components/SearchNews";
import Tabs from "./_components/Tabs";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";
import FAQSection from "@/components/Home/FAQSection";
import { formatNews } from "@/utils/helpers/dataFormating.helper";

const Page = ({
  strapiData,
  navigation,
  caseStudy,
  newsCategoryList,
  latestNews,
  trendingNews,
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
          <div className="w-full md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div>
          <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px] hero_banner">
            <div className="absolute top-28 right-0" ref={lottieRef}></div>

            <div className="md:mt-[200px]">
              <Hero strapiData={strapiData} />
            </div>
          </div>
          <Tabs />
          {/* <LatestNews
            strapiData={strapiData}
            latestNews={formatNews(latestNews)}
            trendingNews={formatNews(trendingNews)}
          /> */}
          <SearchNews
            strapiData={strapiData}
            newsCategoryList={newsCategoryList}
          />
          {/* <FAQ /> */}
          <FAQSection
            sectionData={[
              strapiData.sections[7],
              strapiData.sections[8],
              strapiData.sections[9],
              strapiData.sections[10],
              strapiData.sections[11],
            ]}
          />
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm sectionData={strapiData.sections[12]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections[13]}
        />
      </div>
    </>
  );
};

export default Page;
