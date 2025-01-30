"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "./_components/Hero";
import Gdpr from "./_components/Gdpr";
import Quebec from "./_components/Quebec";
import Dpdp from "./_components/Dpdp";
import Spectra from "./_components/Spectra";
import Ferpa from "./_components/Ferpa";
import Hipaa from "./_components/Hipaa";
import UsPrivacyLaws from "./_components/UsPrivacyLaws";
import CaseStudy from "@/components/common/CaseStudy";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";
const Page = ({ strapiData, navigation, caseStudy, imageData, GetInTouchData }) => {
  const sectionRefs = useRef([]);
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
      <main className="bg-primary_white mb-[106px] relative">
        <div className="w-full md:fixed  z-[9999]">
          <Header navigation={navigation?.header} />
        </div>
        <div className="lg:px-[80px] px-4 lg:pt-[20px] hero_banner w-full">
          <div className="absolute top-28 right-0" ref={lottieRef}></div>
          {/* <div className="md:w-[90%] md:fixed  z-[9999]">
            <Header navigation={navigation?.header}/>
          </div> */}

          <Hero sectionData={strapiData[0]} />
        </div>
        <div className="lg:px-[80px] px-4">
          <Gdpr sectionData={strapiData[1]} />
          <Quebec sectionData={strapiData[2]} />
        </div>
        <UsPrivacyLaws
          sectionRefs={sectionRefs}
          name={0}
          setCurrentSection={() => {}}
          sectionData={[strapiData[3], strapiData[4], strapiData[5]]}
          imageData={imageData[4]}
          bgImage={imageData?.[3]?.images?.data?.[0]?.attributes?.url}
        />
        <div className="lg:px-[80px] px-4">
          <Dpdp sectionData={strapiData[6]} />
          <Spectra
            sectionData={[strapiData[7], strapiData[8], strapiData[9]]}
          />
          <Ferpa sectionData={strapiData[10]} />
          <Hipaa sectionData={strapiData[11]} />
          <CaseStudy sectionData={strapiData[12]} caseStudy={caseStudy} />
        </div>
        <div className="md:px-20 md:w-full md:sticky md:top-0 lg:mt-[-100px]">
          <ContactForm sectionData={strapiData[13]} GetInTouchData={GetInTouchData} />
        </div>
      </main>
      <Footer navigation={navigation?.footer} sectionData={strapiData[14]} />
    </>
  );
};
export default Page;
