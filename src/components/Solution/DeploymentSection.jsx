"use client";
import React, { useEffect, useState } from "react";

import DeploymentCard from "./DeploymentCard";

import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import Image from "next/image";

function DeploymentSection({ sectionData = [], imagesData = {}, bgImage }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setActiveTab(activeTab === 4 ? 1 : activeTab + 1);
    }, 2500);
  }, [activeTab]);

  const mainSectionData = sectionData[0];
  return (
    <section className="flex overflow-hidden relative w-full flex-col  bg-cover bg-center bg-no-repeat pt-[53px] pb-[50px]  md:px-[80px]" style={{backgroundImage:`url(${bgImage})`}}>
      {/* bg-[url('/images/platform/deployment_bg.png')]  */}
      <div className="flex relative flex-col  pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <h1 className="gradient_heading font-sora md:mt-4 py-2 text-5xl font-semibold capitalize  max-md:text-[24px]">
                {/* Governances */}
                {mainSectionData?.content?.title}
              </h1>
            </div>
            <p className="mt-5  text-[14px] leading-[16px] md:text-2xl font-urbanist md:leading-7 text-[#EAEAEA] max-md:max-w-full">
              {mainSectionData?.content?.description}
            </p>
            <div className="mt-8">
              <HoverBorderGradientDemo
                content={mainSectionData?.cta[0]?.text}
                className="self-stretch  py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px]  "
                onClick={() =>
                  router.push(
                    mainSectionData?.cta[0]?.url || "/solution/governance"
                  )
                }
              />
            </div>
          </div>
        </header>

        <div className="relative max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative gap-[8px]  flex-col grow capitalize text-primary_white max-md:mt-6 max-md:max-w-full">
                {sectionData[1]?.cards?.map((card, index) => (
                  <DeploymentCard
                    key={index}
                    title={card.title}
                    description={card.description}
                    icon={
                      card.icon_url ||
                      "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                    }
                    activeTab={activeTab}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow g:h-[676px]s w-full rounded-3xl bg-slate-950 max-md:mt-6 max-md:max-w-full">
                {imagesData?.cards[activeTab - 1]?.image?.data?.attributes
                  ?.url && (
                  <Image
                    loading="lazy"
                    height={300}
                    width={300}
                    src={
                      imagesData?.cards &&
                      imagesData?.cards[activeTab - 1]?.image?.data?.attributes
                        ?.url
                    }
                    className="object-cover min-w-full min-h-full aspect-[1.26] max-md:max-w-full"
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
