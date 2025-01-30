import React, { useEffect, useRef, useState } from "react";

import DeploymentCard from "../../../../components/Plateform/DeploymentCard";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import Image from "next/image";

function DeploymentSection({
  name,
  setCurrentSection,
  sectionRefs,
  sectionData,
  imageData,
  bgImage,
}) {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setActiveTab(activeTab === 3 ? 1 : activeTab + 1);
    }, 2500);
  }, [activeTab]);

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
      className="flex overflow-hidden relative flex-col min-h-[954px]  bg-cover bg-center bg-no-repeat pt-[20px] md:pt-[54px] pb-[71px] md:px-[80px]"
      // bg-[url('/images/platform/deployment_bg.png')]
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      id="Deployment"
      ref={ref}
    >
      <div className="flex relative flex-col pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              {/* <p className="gradient_subheading text-xl leading-snug font-urbanist bg-clip-text">
                Powered by Generative AI
              </p> */}
              <h1 className="gradient_heading mt-4 py-2 text-[30px] md:text-5xl font-sora font-semibold capitalize  ">
                {/* US Privacy Laws */}
                {sectionData[0]?.content?.title}
              </h1>
            </div>
            <p className=" text-[14px] leading-[20px] mt-5 md:text-[24px] font-urbanist md:leading-7 text-[#EAEAEA] max-md:max-w-full">
              {/* LightBeam.ai ensures secure data across locations, maintaining
              control, compliance, and privacy for all data types, enabling a
              zero-trust data protection approach. */}
              {sectionData[0]?.content?.description}
            </p>
            <div className="mt-8">
              <Link href={sectionData[0]?.cta[0]?.url || "#"}>
                <HoverBorderGradientDemo
                  content={sectionData[0]?.cta[0]?.text}
                  className="self-stretch  py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px]  "
                />
              </Link>
            </div>
          </div>
        </header>

        <div className="relative max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col gap-8  grow capitalize font-sora text-primary_white max-md:mt-6 max-md:max-w-full">
                {sectionData[1]?.cards.map((card, index) => (
                  <DeploymentCard
                    key={index}
                    title={card?.title}
                    description={card?.description}
                    icon={
                      card?.icon_url ||
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                    }
                    activeTab={activeTab}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full max-md:h-[519.5px] overflow-hidden">
              <div className="flex h-full justify-between overflow-hidden relative flex-col grow w-full rounded-3xl  max-md:mt-6 max-md:max-w-full">
                <p className="text-[#fff] text-[14px] leading-[20px] md:text-[20px] mb-4 md:leading-9 font-urbanist font-normal max-md:pl-2">
                  {/* Get a handle on sensitive information still lurking inside
                  your data repositories far beyond the necessary regulatory
                  requirements. Control the leakage risks and unpleasant
                  surprises. */}
                  {sectionData[2]?.title}
                </p>
                {imageData?.cards[activeTab - 1]?.image?.data?.attributes
                  ?.url && (
                  <Image
                    loading="lazy"
                    height={300}
                    width={300}
                    src={
                      (imageData?.cards &&
                        imageData?.cards[activeTab - 1]?.image?.data?.attributes
                          ?.url) ||
                      "https://awesome-vacation-43e64f345e.media.strapiapp.com/depl_a1eadd6215.png"
                    }
                    className="object-cover  max-md:max-w-full w-full min-h-full rounded-3xl"
                    alt="Deployment visualization"
                  />
                )}
              </div>
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

export default DeploymentSection;
