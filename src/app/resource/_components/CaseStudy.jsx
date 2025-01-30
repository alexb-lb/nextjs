"use client";

import BorderButton from "@/components/Animation/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const SuccessStory = ({ caseStudy }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const route = useRouter();
  const handlePrevClick = () => {
    if (currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(caseStudy?.data?.data.length);
    }
  };
  const handleNextClick = () => {
    if (currentIndex !== caseStudy?.data?.data.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(1);
    }
  };



  return (
    <section className="max-md:hidden lg:mt-[100px]">
      <div className="flex items-center justify-center max-md:flex-col mb-8">
        <div className="flex flex-col">
          {/* <p className="para2 font-urbanist font-normal text-[#232323] lg:block hidden uppercase">
            Case Study
          </p> */}
          <h2 className="text-[28px] lg:text-[48px] leading-[39px] lg:leading-[60px] font-semibold text-[#020103] capitalize text-center lg:text-left max-md:mt-10 max-md:max-w-full max-md:text-[28px] font-sora">
            Case Studies
          </h2>
        </div>
        {/* <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full">
          <p className="self-stretch my-auto text-[14px] leading-[22px] lg:text-xl lg:leading-7 text-[#444444] lg:text-left text-center max-md:mt-10 max-md:max-w-full font-urbanist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim,
          </p>
        </div> */}
      </div>
      <hr />
      <div className="flex flex-col xl:flex-row justify-center items-center xl:items-stretch gap-[20px] ">
        {/* {currentIndex === 1 && ( */}
        <div className="rounded-[24px] w-[630px] pt-[66px] pl-[32px] pr-[40px] pb-[38px] bg-gradient-to-br from-[#231C40] via-[#4B298B] to-[#9987CA]">
          <h3 className="text-white text-[40px] leading-[50.4px] font-semibold font-sora mb-[25px]">
            {/* LightBeam ai pioneers zero-trust */}
            {caseStudy?.data?.data[currentIndex - 1]?.attributes?.title}
          </h3>
          <p className="text-white para2 font-urbanist">
            {/* <span className="font-semibold">Challenge: </span>LightBeam ai
            pioneers zero-trust data protection, merging data security, privacy,
            and AI governance. */}
            {caseStudy?.data?.data[currentIndex - 1]?.attributes?.challenges}
          </p>
          <br />
          <p className="text-white para2 font-urbanist">
            {/* <span className="font-semibold">Goal: </span>LightBeam ai pioneers
            zero-trust data protection, merging */}
            {caseStudy?.data?.data[currentIndex - 1]?.attributes?.goals}
          </p>
          <div className="mt-[71px] flex justify-between items-center">
            <BorderButton
              content={"Download"}
              className={
                "py-[20px] px-[45px] bg-[#4B298B] text-primary_white font-semibold text-[20px] leading-[20px] border border-[#4B298B]"
              }
              href={caseStudy?.data?.data?.[currentIndex - 1]?.attributes?.url}
              download={true}
            />
            <Link
              href={
                caseStudy?.data?.data[currentIndex - 1]?.attributes?.url ||
                "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf"
              }
              target="_blank"
              download
            >
              <p className="md:text-[22px] text-[14px] md:leading-[26.4px] leading-[16px] text-primary_white font-semibold font-urbanist flex gap-2 items-center cursor-pointer">
                Learn More
                <FaArrowRight />
              </p>
            </Link>
          </div>
        </div>
        {/* )} */}
        <div
          className="rounded-[24px] w-[630px] pt-[66px] pl-[32px] pr-[40px] pb-[38px]  bg-center bg-cover bg-no-repeat flex justify-end items-end md:min-h-[450px]"
          style={{
            backgroundImage: `${
              currentIndex === 1
                ? "url('/images/customers/case_study1.png')"
                : currentIndex === 2
                ? "url('/images/platform/retention.png"
                : "url('/images/platform/retention3.png')"
            }`,
          }}
        >
          <div className="flex gap-8">
            <p
              className="border-2 border-primary_white text-primary_white cursor-pointer p-3 rounded-[50px]"
              onClick={handlePrevClick}
            >
              <FaArrowLeft />
            </p>
            <p
              className="border-2 border-primary_white text-primary_white cursor-pointer p-3 rounded-[50px]"
              onClick={handleNextClick}
            >
              <FaArrowRight />
            </p>
          </div>
        </div>
      </div>
      <div className="my-[64px]">
        <HoverBorderGradientDemo
          content="View All"
          onClick={() => route.push("/customer")}
        />
      </div>
    </section>
  );
};
export default SuccessStory;
