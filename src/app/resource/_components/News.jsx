"use client";
import React from "react";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import BorderButton from "../_components/Button";
import { useRouter } from "next/navigation";

const data = [
  {
    title: "4 Trends That Will Shape AI and Data ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
    icon: "/images/resource/news1.png",
  },
  {
    title: "4 Trends That Will Shape AI and Data ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
    icon: "/images/resource/news1.png",
  },
];

const News = () => {
  const route = useRouter();
  return (
    <section
      className="flex overflow-hidden relative flex-col min-h-[954px] bg-[url('/images/platform/deployment_bg.svg')] bg-cover 
  bg-center bg-no-repeat pt-[54px] pb-[71px] md:px-[80px]"
    >
      <div className="flex relative justify-center items-center flex-col pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <p className="gradient_subheading text-sm lg:text-xl leading-snug font-urbanist bg-clip-text">
                Powered by Generative AI
              </p>
              <h1 className="gradient_heading mt-4 py-2 text-[24px] md:text-5xl font-sora font-semibold capitalize max-md:text-4xl">
                Latest News & Updates
              </h1>
            </div>
            <p
              className="mt-5 text-[14px] lg:text-[18px] font-urbanist lg:leading-7 
            text-[#EAEAEA] max-md:max-w-full md:px-9 lg:px-0"
            >
              LightBeam.ai ensures secure data across locations, maintaining
              control, compliance, and privacy for all data types, enabling a
              zero-trust data protection approach.
            </p>
          </div>
        </header>

        <div className="flex flex-col-reverse xl:flex-row items-center">
          {/* left side containers */}
          <div className="flex flex-col items-center justify-center gap-3 md:gap-5 mt-3 md:mt-0">
            {data.map((item, index) => (
              <div
                key={index}
                className="flex items-center max-md:items-start w-[343px] min-h-[156px] md:w-[630px] md:h-[203px] bg-[#ffffff] bg-opacity-10 rounded-[20px]"
              >
                <div className="p-3 basis-2/5 max-md:basis-1/2">
                  <img loading="lazy" src={item.icon} alt="" />
                </div>
                <div className="basis-3/5 max-md:basis-1/2 p-3">
                  <p className="mb-1 px-1 md:mb-4 md:px-4 text-[#FFFFFF] text-[16px] md:text-[26px] font-semibold md:leading-[28px] font-sora">
                    {item.title}
                  </p>
                  <p className="px-1 md:px-4 text-[#FFFFFF] text-[12px] md:text-[14px] md:leading-[17px] font-sora">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* right side image */}
          <div
            className="flex items-center justify-center 
            relative rounded-[24px] lg:p-4 mt-3
            md:mt-[80px] md:mb-[80px] xl:mt-0 lg:mb-0"
          >
            <img
              loading="lazy"
              src="/images/resource/hero.png"
              alt=""
              className="rounded-[20px] w-[343px] h-[237px] md:w-[631px] md:h-[430px]"
            />
            {/* Overlay content */}
            <div className="absolute flex flex-col bottom-1/4 left-4 md:left-8 lg:left-8 p-4 max-md:pl-0 text-white">
              <p className="font-urbanist text-[10px] md:text-[14px] font-medium bg-white text-[#7B808A] w-[80px] h-[16px] md:w-[100px] md:h-[24px] text-center rounded-md">
                Industry News
              </p>
              <p className="mb-2 font-urbanist text-[16px] md:text-[32px] font-semibold w-[70%] md:w-full xl:w-[80%]">
                4 Trends That Will Shape AI and Data Security in 2024
              </p>
              <p className="font-urbanist text-[12px] md:text-[16px] w-full xl:w-[80%]">
                We&apos;re thrilled to share that Dig has been named an out
                performer in GigaOm&apos;s Radar report evaluating data security
                platforms (DSPs) platforms .{" "}
              </p>
            </div>
            <div className="absolute flex flex-col bottom-4 md:bottom-10 left-4 md:left-8 lg:left-8">
              <div className="flex items-start justify-start">
                {/* <div className="mt-auto"> */}
                <BorderButton
                  content={"Learn More"}
                  onClick={() => route.push("/resource/news-details")}
                  // href={ctaLink}
                  className={
                    "text-sm md:text-xl font-semibold leading-none text-center text-white md:px-[34px] py-2 md:py-[16px] rounded-full max-md:px-5 border border-white"
                  }
                />
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <HoverBorderGradientDemo
            onClick={() => route.push("/resource/news-room")}
            content="Know More"
            className="self-stretch  py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px] "
          />
        </div>
      </div>
    </section>
  );
};

export default News;
