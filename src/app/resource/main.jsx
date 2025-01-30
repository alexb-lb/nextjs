"use client";
import React, { useState, useEffect, useRef } from "react";
import Header from "@/components/common/Header";
import Hero from "./_components/Hero";
import TrendingBlogsSection from "@/components/Home/TrendingBlogsSection";
import AwardsSection from "@/components/common/AwardsSection";
import News from "./_components/News";
import TrustedBySection from "@/components/Home/TrustedBySection";
import CaseStudy from "./_components/CaseStudy";
import CompanyHero from "@/components/company/Hero";
import FeatureSection from "@/components/company/FeatureSection";
import WhitePaper from "./_components/WhitePaper";
import Privacy_Security from "./_components/Privacy_Security";
import TrendingBlogsPlatform from "./_components/TrendingBlogsPlatform";
import EBooks from "./_components/EBooks";
import FAQSection from "@/components/Home/FAQSection";
import ContactForm from "@/components/common/ContactForm";
import Footer from "@/components/common/Footer";
import lottie from "lottie-web";
import { formatBlogs } from "../../utils/helpers/dataFormating.helper";
import animationData from "@/utils/animation/Torch-interaction.json";

const Page = ({
  strapiData,
  navigation,
  caseStudy,
  imageData,
  blogsData = {},
  GetInTouchData,
}) => {
  const [currentSection, setCurrentSection] = useState(1);

  const sectionRefs = useRef([]);

  const lottieRef = useRef(null);

  

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
  const lottieInstance = useRef(null);

  const heroImage = imageData && imageData[0];
  const trustSection = imageData && imageData[5];

  return (
    <>
      <div className=" bg-primary_white relative">
        <div className="relative">
          <div className="w-full md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div>
          <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px]  hero_banner">
            <div className="absolute top-28 right-0" ref={lottieRef}></div>

            <div className="mt-[50px] md:mt-[100px]">
              <Hero sectionData={strapiData[0]} imageData={{ ...heroImage }} />
            </div>
          </div>
          <TrendingBlogsPlatform
            sectionData={strapiData?.[1]}
            // blogsData={formatBlogs(blogsData)}
            imageData={imageData?.[1]}
          />
          <AwardsSection
            sectionData={[strapiData[2], strapiData[3]]}
            imageData={imageData[3]}
          />
          <News
            sectionData={[strapiData[4], strapiData[5]]}
            imageData={{ ...trustSection }}
            bgImage={imageData?.[4]?.images?.data?.[0]?.attributes?.url}
          />
          <TrustedBySection sectionData={strapiData[6]} />
          <CaseStudy sectionData={strapiData[7]} caseStudy={caseStudy} />
          <div
            className="lg:p-[80px] lg:pt-[20px] pt-[40px] max-lg:pb-[58px]  bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${imageData?.[8]?.images?.data?.[0]?.attributes?.url})`,
            }}
          >
            {/* bg-[url('/images/hero/Desktop_banner.webp')] */}
            <CompanyHero strapiData={{ sections: [strapiData[8]] }} />
            <FeatureSection strapiData={strapiData[9]} imageData={imageData?.[9]} />
          </div>
          <WhitePaper sectionData={[strapiData[10], strapiData[11]]} />
          <Privacy_Security sectionData={strapiData[12]} imageData={imageData?.[12]} />
          <EBooks sectionData={[strapiData[13], strapiData[14]]} />
          <FAQSection
            sectionData={[
              strapiData[15],
              strapiData[16],
              strapiData[17],
              strapiData[18],
              strapiData[19],
            ]}
            removeTabs={true}
          />
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm
            strapiData={strapiData[20]}
            GetInTouchData={GetInTouchData}
          />
        </div>
        <Footer strapiData={strapiData[21]} navigation={navigation?.footer} />
      </div>
    </>
  );
};

export default Page;
