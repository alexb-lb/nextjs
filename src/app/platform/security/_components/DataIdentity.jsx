import React, { useEffect, useRef, useState } from "react";

import DataIdentityCard from "./DataIdentityCard";
import HoverBorderGradientDemo from "../../../../components/common/HoverBorderGradientDemo";
import Image from "next/image";
import Link from "next/link";

function DataIdentity({
  name,
  setCurrentSection,
  sectionRefs,
  sectionData,
  imageData,
}) {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab === 3 ? 1 : prevTab + 1));
    }, 2500);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add each section ref to the sectionRefs array
    sectionRefs.current.push(ref);
  }, [ref, sectionRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(name);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [name, setCurrentSection, ref]);

  return (
    <section
      className="flex overflow-hidden relative flex-col min-h-[954px] bg-cover bg-center bg-no-repeat pt-[54px] pb-[71px] md:px-[80px]"
      // bg-[url('/images/platform/deployment_bg.png')] 
      style={{
        backgroundImage: `url(${imageData?.[0]?.images?.data?.[0]?.attributes?.url})`
      }}
      id="Deployment"
      ref={ref}
    >
      <div className="flex relative flex-col pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <p className="gradient_subheading text-sm lg:text-xl leading-snug font-urbanist bg-clip-text">
                {/* Powered by Generative AI */}
                {sectionData[0]?.content?.title}
              </p>
              <h1 className="gradient_heading mt-4 py-2 text-[24px] lg:text-5xl font-sora font-semibold capitalize  max-md:text-4xl">
                {/* Data Identity */}
                {sectionData[0]?.content?.description}
              </h1>
            </div>
            <p
              className="mt-5 text-[14px] lg:text-[24px] font-urbanist lg:leading-7 
            text-[#EAEAEA] max-md:max-w-full"
            >
              {/* LightBeam.ai ensures secure data across locations, maintaining
              control, compliance, and privacy for all data types, enabling a
              zero-trust data protection approach. */}
              {sectionData[0]?.content?.content}
            </p>
            <div className="mt-8">
              <Link href={sectionData[0]?.cta[0]?.url || "#"}>
                <HoverBorderGradientDemo
                  content={sectionData[0]?.cta[0]?.text}
                  className="self-stretch  py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px] "
                />
              </Link>
            </div>
          </div>
        </header>

        <div className="relative max-md:mt-10 max-md:max-w-full w-full">
          <div className="flex gap-5 flex-col-reverse xl:flex-row items-center justify-center">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex relative flex-col gap-6  grow capitalize font-sora text-primary_white max-md:mt-6 max-md:max-w-full">
                {sectionData[1]?.cards.map((card, index) => (
                  <DataIdentityCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={
                      card.logo_url ||
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                    }
                    activeTab={activeTab}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-lg:w-full overflow-hidden">
              {/* <div className="flex overflow-hidden relative flex-col grow w-full rounded-3xl bg-slate-950 max-md:mt-6 max-md:max-w-full"> */}
              {imageData?.[1]?.cards[activeTab - 1]?.image?.data?.attributes
                ?.url && (
                <Image
                  height={510}
                  width={631}
                  loading="lazy"
                  src={
                    imageData?.[1]?.cards[activeTab - 1]?.image?.data?.attributes
                      ?.url ||
                    "https://cdn.builder.io/api/v1/image/assets/TEMP/4575e2b1a04b27d9e079833c75806baae0a252e3b740cd54dff8cd9d588c2555?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                  }
                  className=" rounded-[20px] min-w-full object-contain lg:min-h-[510px]"
                  alt="Deployment visualization"
                />
              )}

              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <div>
          <StickyScrollRevealDemo content={content} />
        </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default DataIdentity;
