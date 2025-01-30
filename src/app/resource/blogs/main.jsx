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
import { formatBlogs } from "@/utils/helpers/dataFormating.helper";

const Page = ({
  strapiData,
  navigation,
  caseStudy,
  blogsData,
  blogsCategoryList,
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

  const formattedBlogs = formatBlogs(blogsData);
  return (
    <>
      <div className=" bg-primary_white relative">
        <div className="relative">
          <div className="w-full md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div>
          <div className="lg:p-[80px] md:p-9 p-2  relative lg:pt-[20px] hero_banner">
            <div
              className="absolute top-28 right-0 z-20"
              ref={lottieRef}
              id="lottie_div"
            ></div>

            <div className="md:mt-[200px]">
              <Hero strapiData={strapiData} />
            </div>
          </div>
          <Tabs />
          <TrendingBlogsSection
            strapiData={strapiData}
            blogsData={formattedBlogs}
            showCTA={false}
          />
          <SearchBlogs
            strapiData={strapiData}
            blogsCategoryList={blogsCategoryList}
          />
          <FAQSection
            sectionData={[
              strapiData.sections[3],
              strapiData.sections[4],
              strapiData[5],
              strapiData[6],
              strapiData.sections[7],
            ]}
          />
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm sectionData={strapiData.sections[8]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections[9]}
        />
      </div>
    </>
  );
};

export default Page;
