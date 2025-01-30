"use client";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ContactForm from "@/components/common/ContactForm";

import Hero from "./_components/Hero";
import Integration from "./_components/Integration";
import DetailSection from "./_components/DetailSection";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import { useEffect, useRef } from "react";

const Page = ({ strapiData, navigation, caseStudy, imagesData = {}, GetInTouchData }) => {
  const lottieRef = useRef(null);
  const lottieInstance = useRef(null);

  const integrationImages = imagesData && imagesData[2];

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
      <main className="bg-primary_white relative">
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
          <Integration
            sectionData={[strapiData[1], strapiData[2]]}
            imagesData={{ ...integrationImages }}
          />
          <DetailSection
            sectionData={[
              strapiData[3],
              strapiData[4],
              strapiData[5],
              strapiData[6],
              strapiData[7],
              strapiData[8],
              strapiData[9],
              strapiData[10],
              strapiData[11],
              strapiData[12],
              strapiData[13],
              strapiData[14],
              strapiData[15],
              strapiData[16],
              strapiData[17],
              strapiData[18],
            ]}
          />
        </div>
        <div className="md:px-20 md:w-full md:sticky md:top-0">
          <ContactForm sectionData={strapiData[19]} GetInTouchData={GetInTouchData} />
        </div>

        <Footer navigation={navigation?.footer} sectionData={strapiData[20]} />
      </main>
    </>
  );
};
export default Page;
