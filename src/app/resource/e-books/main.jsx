"use client";
import React, { useState, useEffect, useRef } from "react";

import Hero from "./_components/Hero";
import SearchPapers from "./_components/SearchPapers";
import Tabs from "./_components/Tabs";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ContactForm from "@/components/common/ContactForm";
import lottie from "lottie-web";
import animationData from "@/utils/animation/Torch-interaction.json";
import FAQSection from "@/components/Home/FAQSection";

import { eBookModel } from "@/utils/models/index";
import { initializeStrapiClient } from "@/utils/helpers/initStrapi.helper";

const Page = ({ strapiData, navigation, caseStudy, GetInTouchData }) => {
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

  // ebook data from strapi
  const [ebookData, setEbookData] = useState([]);
  useEffect(() => {
    (async function () {
      initializeStrapiClient();

      const response = await eBookModel.getDocuments({
        populate: {
          image: {
            populate: "*",
          },
        },
      });

      setEbookData(response.data.data);


    })();
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
          <Tabs sectionData={strapiData?.sections?.[1]} />
          <SearchPapers strapiData={strapiData} ebookData={ebookData} />

          <FAQSection
            sectionData={[
              strapiData.sections[2],
              strapiData.sections[3],
              strapiData.sections[4],
              strapiData.sections[5],
              strapiData.sections[6],
            ]}
          />
        </div>
        <div className="md:px-20 md:sticky md:top-0">
          <ContactForm sectionData={strapiData.sections[7]}  GetInTouchData={GetInTouchData}/>
        </div>
        <Footer
          navigation={navigation?.footer}
          sectionData={strapiData.sections[8]}
        />
      </div>
    </>
  );
};

export default Page;
