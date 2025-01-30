"use client";
import React from "react";
import Hero from "./_components/Hero";
import NewsSummary from "./_components/NewsSummary";
import Tags from "./_components/Tags";
import RelatedBlog from "./_components/RelatedBlog";
import FAQ from "./_components/FAQ";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";
import FAQSection from "@/components/Home/FAQSection";
import TrendingBlogsSection from "@/components/Home/TrendingBlogsSection";
import { formatBlogs } from "@/utils/helpers/dataFormating.helper";

const Page = ({
  strapiData,
  imageData,
  navigation,
  caseStudy,
  content,
  blogsData = [],
  type,
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
          <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px]  hero_banner">
            <div className="absolute top-28 right-0" ref={lottieRef}></div>

            <div className="md:mt-[200px]">
              <Hero sectionData={strapiData[0]} content={content} />
            </div>
          </div>
          <NewsSummary
            type={type}
            sectionData={strapiData[1]}
            content={content}
          />
          {/* <Tags /> */}
          {/* <RelatedBlog /> */}
          <TrendingBlogsSection
            sectionData={strapiData[2]}
            blogsData={formatBlogs(blogsData)}
          />
          <FAQSection
            sectionData={[
              strapiData[3],
              strapiData[4],
              strapiData[5],
              strapiData[6],
              strapiData[7],
            ]}
            // bgImage={imageData?.}
          />
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm sectionData={strapiData[8]} GetInTouchData={GetInTouchData} />
        </div>
        <Footer navigation={navigation?.footer} sectionData={strapiData[9]} />
      </div>
    </>
  );
};

export default Page;
