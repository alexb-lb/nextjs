"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import Image from "next/image";

function CareerSection({ strapiData, imageData }) {
  const router = useRouter();

  return (
    <section className="flex relative flex-wrap gap-5 items-start my-24 max-md:mb-24 w-full max-w-screen-xl max-md:mt-10 max-md:max-w-full m-auto max-lg:px-[16px]">
      <div className="absolute lg:right-0 right-[16px] bottom-0">
        {imageData?.sections?.[12]?.images?.data?.[0]?.attributes?.url && (
          <Image
            height={300}
            width={300}
            loading="lazy"
            src={imageData?.sections?.[12]?.images?.data?.[0]?.attributes?.url}
            alt="Career illustration"
            className="w-full h-full"
          />
        )}
      </div>
      <div className="flex py-[31px] overflow-hidden flex-col grow shrink justify-center lg:pl-7  min-w-[240px] border rounded-[32px] w-[594px] max-md:max-w-full ">
        <Marquee speed={100} className="mb-[20px]">
          <div className="flex gap-[20px]">
            {imageData?.sections?.[13]?.images?.data?.[0]?.attributes?.url && (
              <Image
                height={200}
                width={300}
                src={
                  imageData?.sections?.[13]?.images?.data?.[0]?.attributes?.url
                }
                alt="Career illustration"
                className="w-[383px] h-[301px] ml-[20px] object-cover"
              />
            )}

            {imageData?.sections?.[13]?.images?.data?.[1]?.attributes?.url && (
              <Image
                height={200}
                width={300}
                src={
                  imageData?.sections?.[13]?.images?.data?.[1]?.attributes?.url
                }
                alt="Career illustration"
                className="w-[495px] h-[301px] object-cover "
              />
            )}
          </div>
        </Marquee>
        <Marquee speed={100} direction="right" className="">
          <div className="flex gap-[20px]">
            {imageData?.sections?.[13]?.images?.data?.[0]?.attributes?.url && (
              <Image
                height={200}
                width={300}
                src={
                  imageData?.sections?.[13]?.images?.data?.[0]?.attributes?.url
                }
                alt="Career illustration"
                className="w-[383px] h-[301px] ml-[20px] object-cover"
              />
            )}

            {imageData?.sections?.[13]?.images?.data?.[1]?.attributes?.url && (
              <Image
                height={200}
                width={300}
                src={
                  imageData?.sections?.[13]?.images?.data?.[1]?.attributes?.url
                }
                alt="Career illustration"
                className="w-[495px] h-[301px] object-cover "
              />
            )}
          </div>
        </Marquee>
      </div>
      <div className="flex overflow-hidden flex-col grow shrink font-semibold bg-white min-w-[240px] rounded-[32px] w-[444px] max-md:max-w-full max-md:h-[544.32px]">
        <div className="flex relative flex-col items-start px-8 pt-16 max-md:pt-12 pb-80 w-full min-h-[685px] rounded-[32px] max-md:px-5 max-md:pb-24 max-md:max-w-full max-lg:overflow-hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a3fb80e4eaa547baf87a6035177cf093822052a9e1bf8a449fb2e4f16f4cfb8?placeholderIfAbsent=true&apiKey=faedc40a57794e3a93ca0ce63a18da4b"
            alt=""
            className="object-cover absolute inset-0 size-full"
          />
          <h2 className="relative self-stretch ml-3 title2 font-sora text-primary_black capitalize max-md:max-w-full max-md:text-[31.14px]">
            {/* Interested in Working with Us ? */}
            {strapiData?.sections?.[12]?.title}
          </h2>
          <p className="relative mt-8 max-md:mt-4 ml-3 para3B text-[#444444] font-urbanist max-md:max-w-full">
            {strapiData?.sections?.[12]?.content?.description}
          </p>

          <div className="mt-10 max-md:mt-4 ml-3">
            <HoverBorderGradientDemo
              content={
                strapiData?.sections?.[12]?.cta?.[0]?.text || "See Openings"
              }
              onClick={() =>
                strapiData?.sections?.[12]?.cta?.[0]?.url &&
                router.push(strapiData?.sections?.[12]?.cta?.[0]?.url)
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerSection;
