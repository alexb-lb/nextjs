"use client";
import React, { useEffect, useRef, useState } from "react";
// import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";

import BorderButton from "../Animation/Button";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const PlatformSection = ({ sectionData = [], imageData = {} }: any) => {
  const router = useRouter();

  const refd = useRef() as any;

  const ourPlatformCards = [
    {
      data: (
        <div className="relative bg-[#DDECFE] h-[532px] rounded-2xl pl-8 pt-10 w-auto md:w-[350px] ml-0 mr-6">
          <h1 className="title3 text-[#043A7C] mb-7 max-md:text-[28px]">
            {/* Data Security */}
            {sectionData[1]?.cards[0]?.title}
          </h1>
          <p className="link_text min-h-[150px] font-urbanist text-[#10667F] mb-10 w-[90%]">
            {/* Automated privacy-aware data security with 360 visibility and
            control of sensitive information across SaaS, Cloud and On-prem
            applications for data at-rest, in-motion and in-use. */}
            {sectionData[1]?.cards[0]?.description}
          </p>

          <BorderButton
            content={sectionData[1]?.cards[0]?.cta_text}
            className={
              "font-sora space-x-2 border  px-8 py-4 rounded-[50px] cursor-pointer bg-[#DDECFE] z-10"
            }
            onClick={() =>
              router.push(
                sectionData[1]?.cards[0]?.cta_url || "/platform/security"
              )
            }
            href={""}
          />

          <div className="w-full absolute bottom-0 right-0 flex justify-end">
            {imageData?.cards[0]?.image?.data?.attributes?.url && (
              <Image
                loading="lazy"
                src={
                  imageData?.cards &&
                  imageData?.cards[0]?.image?.data?.attributes?.url
                }
                alt=""
                height={300}
                width={400}
                className="-mt-20"
              />
            )}
          </div>
        </div>
      ),
    },
    {
      data: (
        <div className="relative bg-[#E4EDF7] h-[532px] rounded-2xl pl-8 pt-10 w-auto md:w-[350px]  sm:mr-0 card-box z-20">
          <h1 className="title3 text-[#224872] mb-7 max-md:text-[28px]">
            {sectionData[1]?.cards[1]?.title}
          </h1>
          <p className="link_text min-h-[150px] font-urbanist text-[#10667F] mb-10 w-[90%]">
            {sectionData[1]?.cards[1]?.description}
          </p>

          <BorderButton
            content={sectionData[1]?.cards[1]?.cta_text}
            className={
              "font-sora space-x-2 border  px-8 py-4 rounded-[50px] cursor-pointer bg-[#E4EDF7] z-20"
            }
            onClick={() =>
              router.push(
                sectionData[1]?.cards[1]?.cta_url || "/platform/privacy-center"
              )
            }
            href={""}
          />

          <div className="w-full absolute bottom-0 right-0 flex justify-end">
            {imageData?.cards[1]?.image?.data?.attributes?.url && (
              <Image
                loading="lazy"
                src={
                  imageData?.cards &&
                  imageData?.cards[1]?.image?.data?.attributes?.url
                }
                height={300}
                width={300}
                alt=""
                className="-mt-20"
              />
            )}
          </div>
        </div>
      ),
    },
    {
      data: (
        <div className="relative bg-[#D6F2FA] h-[532px] rounded-2xl pl-8 pt-10 w-auto md:w-[350px] sm:mr-6  card-box z-30">
          <h1 className="title3 text-[#10667F] mb-7 max-md:text-[28px]">
            {sectionData[1]?.cards[2]?.title}
          </h1>
          <p className="link_text min-h-[150px] font-urbanist text-[#10667F] mb-10 w-[90%]">
            {sectionData[1]?.cards[2]?.description}
          </p>

          <BorderButton
            content={sectionData[1]?.cards[2]?.cta_text}
            className={
              "font-sora space-x-2 border  px-8 py-4 rounded-[50px] cursor-pointer bg-[#D6F2FA] z-30"
            }
            onClick={() =>
              router.push(
                sectionData[1]?.cards[2]?.cta_url ||
                  "/platform/governance-center"
              )
            }
            href={""}
          />

          <div className="w-full absolute bottom-0 right-0 flex justify-end">
            {imageData?.cards[2]?.image?.data?.attributes?.url && (
              <Image
                loading="lazy"
                src={
                  imageData?.cards &&
                  imageData?.cards[2]?.image?.data?.attributes?.url
                }
                height={300}
                width={300}
                alt=""
                className="-mt-20"
              />
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      className="flex relative flex-col px-16 pt-20 pb-16 mt-0 w-full min-h-[1201px] max-md:px-5 max-md:pt-24 max-md:max-w-full bg-primary_white"
      id="platform"
    >
      <img
        src={
          "https://cdn.builder.io/api/v1/image/assets/TEMP/88faadd44db72d1fe414821f69560c0c5c185c39578c85d5b8507b6121ec7f4a?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
        }
        alt="platform_bg"
        className="object-fit absolute bottom-0 left-[-200px] size-full max-md:hidden"
      />
      <div className="relative max-md:max-w-full" ref={refd}>
        <div
          className={`flex flex-row`}
        >
          <div className="flex flex-row w-[55%] max-md:ml-0 max-md:w-full lg:sticky top-0 mr-10">
            <div className="flex relative flex-col sm:mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pl-2.5 max-md:max-w-full ">
                <h2 className="self-start title2 mx-auto sm:mx-0 font-semibold font-sora text-primary_black capitalize max-md:text-[30px]">
                  {/* Our Platform */}
                  {sectionData[0]?.content?.title}
                </h2>
                <p className="mt-6 para2 text-center sm:text-start font-urbanist text-[#444444]  max-md:max-w-full">
                  {/* LightBeam platform converges data security, privacy, and AI
                  governance, so businesses can secure their data across cloud,
                  SaaS and on-prem locations. <br />
                  <br /> Leveraging generative AI, LightBeam ties together
                  sensitive data cataloging, control, and compliance across
                  structured (databases), unstructured (file repositories), and
                  semi-structured (ticketing systems) applications. */}
                  {sectionData[0]?.content?.description}
                </p>
              </div>
              <div className="flex justify-center sm:justify-start mt-6">
                <HoverBorderGradientDemo
                  content={sectionData[0]?.cta[0]?.text || "View All"}
                  onClick={() =>
                    router.push(sectionData[0]?.cta[0]?.url || "/platform")
                  }
                  className="max-md:py-[12px] max-md:px-[36px]"
                />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-wrap`}
          >
            {ourPlatformCards.map((item, ind) => (
              <div key={ind} className="flex flex-wrap">
                <div className="mt-20">{item?.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="relative self-start mt-32 ml-3 text-xl leading-tight uppercase text-neutral-800 max-md:mt-10 max-md:ml-2.5">
        {/* USE CASES */}
      </p>
    </section>
  );
};

export default PlatformSection;
