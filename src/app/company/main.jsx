"use client";
import Hero from "@/components/company/Hero";
import FeatureSection from "@/components/company/FeatureSection";
import AwardsSection from "@/components/common/AwardsSection";
import PartnershipSection from "@/components/company/PartnershipSection";
import MeetTheTeam from "@/components/company/MeetTheTeam";
import TestimonialSection from "@/components/common/TestimonialSection";
import CareerSection from "@/components/company/CareerSection";
import News from "@/components/company/News";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";

const Page = ({
  strapiData,
  navigation,
  caseStudy,
  imageData,
  GetInTouchData,
  latestNews,
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
      <div className="relative bg-primary_white">
        <div className="w-full md:fixed  z-[9999]">
          <Header navigation={navigation?.header} />
        </div>
        <div className="lg:p-[80px] md:p-9 p-2 lg:pt-[20px] max-lg:pb-[58px] hero_banner">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999]">
            <Header navigation={navigation?.header}/>
          </div> */}
          <div className="md:mt-[200px]">
            <Hero strapiData={strapiData} />
          </div>
          <FeatureSection
            strapiData={strapiData?.sections?.[1]}
            imageData={imageData?.sections?.[1]}
          />
        </div>

        <MeetTheTeam />

        <AwardsSection
          sectionData={[strapiData?.sections?.[2], strapiData?.sections?.[3]]}
          imageData={imageData?.sections?.[3]}
        />
        <PartnershipSection strapiData={strapiData} />

        <TestimonialSection
          value="-40px"
          pt="171px"
          sectionData={strapiData.sections?.[6]}
        />
        {/* <CareerSection strapiData={strapiData} imageData={imageData} /> */}
        {/* <NewsSection /> */}
        <News
          sectionData={[strapiData?.sections?.[9], strapiData?.sections?.[10]]}
          imageData={imageData?.sections?.[10]}
          bgImage={imageData?.sections?.[9]?.images?.data?.[0]?.attributes?.url}
          latestNews={latestNews}
        />
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm
            sectionData={strapiData.sections?.[11]}
            GetInTouchData={GetInTouchData}
          />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections?.[12]}
        />
      </div>
    </>
  );
};
export default Page;
