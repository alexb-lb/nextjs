"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/customer/Hero";
import CaseStudy from "@/components/common/CaseStudy";
import TrustedBy from "@/components/customer/TrustedBy";
import SuccessStories from "@/components/customer/SuccessStories";
import IndustryExpert from "@/components/customer/IndustryExpert";
import AwardsSection from "../../components/common/AwardsSection";
import ContactForm from "@/components/common/ContactForm";
import ZeroTrust from "./_components/zeroTrust";
import FeatureSection from "./_components/FeatureSection";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";

import CustomerExperiencesSection from "@/components/Home/CustomerExperiencesSection";

const Page = ({
  strapiData,
  navigation,
  caseStudy,
  imagesData,
  GetInTouchData,
}) => {
  // console.log(imagesData, 'data, 3e');

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

  const customerExperience = imagesData.sections && imagesData.sections?.[6];
  const expertImages = imagesData.sections && imagesData.sections?.[8];

  // console.log(
  //   "data",
  //   imagesData?.sections?.[5]?.images?.data?.[0]?.attributes?.url,
  //   imagesData
  // );

  return (
    <>
      <main className="bg-primary_white relative">
        <div className="w-full md:fixed  z-[9999]">
          <Header navigation={navigation?.header} />
        </div>
        <div className="lg:px-[80px] lg:pt-[20px] hero_banner  w-full">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999]">
            <Header navigation={navigation?.header} />
          </div> */}
          <div className="md:mt-[100px]">
            <Hero sectionData={strapiData.sections?.[0]} />
          </div>
        </div>
        <div className="lg:p-[80px] lg:pb-[53px] md:bg-[url('/images/customers/case_study_bg.svg')] bg-bottom bg-cover bg-no-repeat max-lg:px-4 w-full">
          <CaseStudy
            sectionData={strapiData.sections?.[1]}
            hidden="hidden"
            caseStudy={caseStudy}
          />
        </div>
        <TrustedBy sectionData={strapiData.sections?.[2]} />
        <div
          className="lg:px-[80px]  px-4 lg:pb-2 md:bg-[url('/images/customers/stories_bg.svg')] bg-center bg-cover bg-no-repeat w-full"
          style={{ backgroundPositionY: "-95px" }}
        >
          <SuccessStories
            sectionData={[strapiData.sections?.[3], strapiData.sections?.[4]]}
            imageData={imagesData?.sections?.[4]}
          />
        </div>
        <CustomerExperiencesSection
          bgImage={
            imagesData?.sections?.[5]?.images?.data?.[0]?.attributes?.url
          }
          imageData={{ ...customerExperience }}
          setionData={[strapiData.sections?.[5], strapiData.sections?.[6]]}
        />
        <div className="lg:pl-[80px] px-4 lg:py-[110px] md:bg-[url('/images/customers/expert_bg.svg')] bg-center bg-cover bg-no-repeat  w-full overflow-hidden">
          <IndustryExpert
            sectionData={[strapiData.sections?.[7], strapiData.sections?.[8]]}
            imageData={{ ...expertImages }}
          />
        </div>
        <div
          className="lg:p-[80px] lg:pt-[20px] pt-[40px] max-lg:pb-[58px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imagesData?.sections?.[9]?.images?.data?.[0]?.attributes?.url})`,
          }}
        >
          {/* bg-[url('/images/hero/Desktop_banner.webp')]  */}
          <ZeroTrust sectionData={strapiData.sections?.[9]} />
          <FeatureSection
            sectionData={strapiData.sections?.[10]}
            imagesData={imagesData?.sections?.[10]}
          />
        </div>

        <AwardsSection
          sectionData={[strapiData.sections?.[11], strapiData.sections?.[12]]}
          imageData={imagesData?.sections?.[12]}
        />

        <div className="lg:px-20  md:sticky top-0 bg-primary_white md:mt-[-200px]">
          <ContactForm
            sectionData={strapiData.sections?.[13]}
            GetInTouchData={GetInTouchData}
          />
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections?.[14]}
        />
      </main>
    </>
  );
};
export default Page;
