"use client";
import React from "react";

import NewsCard from "./NewsCard";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import BorderButton from "../Animation/Button";

const newsItems = [
  {
    title: "4 Trends That Will Shape AI and Data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a5a125b9c3a76de89af000ccaab66b68fd0ab76ecaf78162d0315b00907593c?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b",
  },
  {
    title: "4 Trends That Will Shape AI and Data",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9a5a125b9c3a76de89af000ccaab66b68fd0ab76ecaf78162d0315b00907593c?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b",
  },
];

function NewsSection() {
  const router = useRouter();

  return (
    <section className="flex overflow-hidden relative flex-col self-stretch mt-28 w-full min-h-[900px] max-lg:mt-10 max-lg:max-w-full bg-[url('/images/company/news_bg.svg')] bg-center bg-cover bg-no-repeat">
      <div className="flex relative flex-col pb-3.5 w-full min-h-[900px] max-lg:max-w-full">
        <div className="flex relative flex-col pb-14 w-full min-h-[886px] max-lg:max-w-full">
          <div className="flex overflow-hidden relative flex-col items-center px-20 pt-14 w-full bg-blend-normal min-h-[832px] max-lg:px-5 max-lg:max-w-full">
            <div className="flex relative flex-col items-center max-w-full text-center w-[664px]">
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center max-lg:max-w-full">
                  <div className="para2 gradient_subheading bg-clip-text font-urbanist">
                    Powered by Generative AI
                  </div>
                  <h2 className="mt-4 title2 gradient_heading font-sora capitalize text-transparent bg-clip-text max-lg:max-w-full max-lg:text-4xl">
                    Latest News & Updates
                  </h2>
                </div>
                <p className="mt-5 para3B font-urbanist text-gray-200 max-lg:max-w-full">
                  LightBeam.ai ensures secure data across locations, maintaining
                  control, compliance, and privacy for all data types, enabling
                  a zero-trust data protection approach.
                </p>
              </div>
            </div>
            <div className="relative self-stretch mt-16 max-lg:mt-10 max-lg:max-w-full">
              <div className="flex gap-5 max-lg:flex-col-reverse">
                <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
                  <div className="flex relative flex-col w-full capitalize text-primary_white max-lg:mt-5 max-lg:max-w-full">
                    {newsItems.map((item, index) => (
                      <NewsCard key={index} {...item} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col ml-5 mt-6 w-6/12 max-lg:ml-0 max-lg:w-full">
                  <div className="flex overflow-hidden relative flex-col grow lg:px-10 lg:pt-[105px] pt-[50px] pb-8 font-semibold text-white rounded-3xl lg:min-h-[430px]  max-lg:max-w-full">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/ad71a055f5bce63ed2d5e44372f69c7ef76c9b72997e63cbdcb98cf248e8dbba?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
                      alt=""
                      className="object-cover absolute inset-0 "
                    />
                    <div className="flex relative flex-col max-lg:max-w-full p-2">
                      <div className="p-2 max-w-full text-sm font-medium tracking-tight leading-none text-[#7B808A] rounded bg-[#F5F7FA] w-[130px] font-urbanist">
                        Industry News
                      </div>
                      <h3 className="lg:mt-2 mt-4 lg:text-[28px] text-[20px] lg:leading-[35.28px] leading-[25px] font-semibold font-sora tracking-tight max-lg:max-w-full ">
                        4 Trends That Will Shape AI and Data Security in 2024
                      </h3>
                      <p className="lg:mt-2 mt-4 lg:text-[16px] text-[14px] lg:leading-[27.04px] leading-[19px] font-urbanist max-lg:max-w-full mb-6">
                        We&apos;re thrilled to share that Dig has been named an
                        out performer in GigaOm&apos;s Radar report evaluating
                        data security platforms (DSPs) platforms .
                      </p>
                      {/* <BorderButton
                        content="Learn More"
                        className="para3A font-urbanist text-white bg-black  max-w-full w-[200px] rounded-[50px] lg:px-[41px] px-6 lg:py-[20px] py-4 max-lg:mt-6 "
                        onClick={() => router.push("/resource/news-details")}
                      /> */}
                      <BorderButton
                        content={"Learn More"}
                        className={
                          "px-10 py-5 max-md:py-3 max-md:px-7 rounded-[52px] text-white bg-black font-semibold leading-none text-center"
                        }
                        onClick={() => router.push("/resource/news-details")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <HoverBorderGradientDemo
                content="Know More"
                onClick={() => router.push("/resource/news-room")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
