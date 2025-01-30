"use client";
import React, { useEffect, useRef } from "react";
import Header from "../../components/common/Header";
import Hero from "../Plateform/Hero";
import TrustedBySection from "../../components/Home/TrustedBySection";
import ZeroTrustSection from "../../components/Home/ZeroTrustSection";
import PlatformSection from "../../components/Home/PlatformSection";
import UseCasesSection from "../../components/Home/UseCaseSection";
import IntegrationsSection from "../../components/Home/IntegrationsSection";
import SolutionsPage from "../../components/Home/SolutionsPage";
import ZeroTrustDataProtectionSection from "../../components/Home/ZeroTrustDataProtectionSection";
import AwardsSection from "../../components/common/AwardsSection";
import CustomerExperiencesSection from "../../components/Home/CustomerExperiencesSection";
import TrendingBlogsSection from "../../components/Home/TrendingBlogsSection";
import FAQSection from "../../components/Home/FAQSection";
import FreeDemo from "../../components/Home/FreeDemo";
import ContactForm from "../../components/common/ContactForm";
import TestimonialSection from "../../components/common/TestimonialSection";
import Footer from "../../components/common/Footer";
import lottie from "lottie-web";
import animationData from "../../utils/animation/Torch-interaction.json";
import {
  formatBlogs,
  getSectionData,
} from "../../utils/helpers/dataFormating.helper";
const LandingPage = ({
  strapiData = {},
  navigation = [],
  caseStudy,
  imageData,
  blogsData,
  platformData,
  GetInTouchData,
}: any) => {
  // console.log("data1171", imageData);

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

  const bg_section = getSectionData(strapiData?.sections, "sections.hero");
  const hero_bg_img =
    (bg_section && bg_section[0]?.backgroungImage?.data?.attributes?.url) ||
    null;

  const zeroSectionData = [
    strapiData.sections && strapiData.sections[2],
    strapiData.sections && strapiData.sections[3],
    strapiData.sections && strapiData.sections[4],
    strapiData.sections && strapiData.sections[5],
  ];

  const PlatformSectionData = [
    strapiData.sections && strapiData.sections[6],
    strapiData.sections && strapiData.sections[7],
  ];
  const PlatformImageData = imageData?.sections && imageData.sections[7];

  return (
    <div className="bg-primary_white relative">
      <div className="w-full md:fixed  z-[9999]">
        <Header navigation={navigation?.header} />
      </div>
      <div
        className="lg:p-[80px] md:p-9 p-2 h-full lg:pb-0 relative lg:pt-[20px] bg-center bg-cover"
        style={{ backgroundImage: `url(${hero_bg_img})` }}
      >
        <div className="absolute top-28 right-0" ref={lottieRef}></div>

        <div className="md:mt-[100px]">
          <Hero sectiondata={strapiData?.sections[0]} />
        </div>
      </div>
      <TrustedBySection
        sectionData={getSectionData(strapiData.sections, "sections.gallery")}
      />
      <ZeroTrustSection
        sectionData={zeroSectionData}
        imageData={imageData}
        bgImage={imageData?.sections?.[2]?.images?.data?.[0]?.attributes?.url}
      />
      <PlatformSection
        height={255}
        sectionData={PlatformSectionData}
        imageData={PlatformImageData}
      />
      <UseCasesSection
        sectionData={strapiData.sections && strapiData.sections[9]}
      />
      <TestimonialSection
        sectionData={strapiData.sections && strapiData.sections[10]}
      />
      <IntegrationsSection
        sectionData={[
          strapiData.sections && strapiData.sections[11],
          strapiData.sections && strapiData.sections[12],
        ]}
        imageData={imageData?.sections && imageData.sections[12]}
      />
      <SolutionsPage
        sectionData={[
          strapiData.sections && strapiData.sections[13],
          strapiData.sections && strapiData.sections[14],
        ]}
        bgImage={imageData?.sections?.[13]?.images?.data?.[0]?.attributes?.url}
      />
      <ZeroTrustDataProtectionSection
        sectionData={[
          strapiData.sections && strapiData.sections[15],
          strapiData.sections && strapiData.sections[16],
        ]}
        imageData={imageData}
      />
      <AwardsSection
        sectionData={[
          strapiData.sections && strapiData.sections[17],
          strapiData.sections && strapiData.sections[18],
        ]}
        imageData={imageData?.sections[18]}
      />
      <CustomerExperiencesSection
        setionData={[
          strapiData.sections && strapiData.sections[19],
          strapiData.sections && strapiData.sections[20],
        ]}
        imageData={imageData?.sections[20]}
        bgImage={imageData?.sections?.[19]?.images?.data?.[0]?.attributes?.url}
      />
      <div className=" md:px-20">
        <FreeDemo
          sectionData={strapiData.sections && strapiData.sections[21]}
        />
      </div>
      <div className="md:mb-[120px]">
        <TrendingBlogsSection
          sectionData={strapiData.sections && strapiData.sections[22]}
          blogsData={formatBlogs(blogsData)}
        />
      </div>
      {/* <FAQSection
        sectionData={[
          strapiData.sections && strapiData.sections[23],
          strapiData.sections && strapiData.sections[24],
          strapiData.sections && strapiData.sections[25],
          strapiData.sections && strapiData.sections[26],
          strapiData.sections && strapiData.sections[27],
          strapiData.sections && strapiData.sections[28],
        ]}
      /> */}
      <div className=" md:px-20 md:sticky md:top-0">
        <ContactForm
          sectionData={strapiData.sections && strapiData.sections[29]}
          GetInTouchData={GetInTouchData}
        />
      </div>
      <Footer
        navigation={navigation?.footer}
        sectionData={strapiData.sections && strapiData.sections[30]}
      />
    </div>
  );
};

export default LandingPage;
