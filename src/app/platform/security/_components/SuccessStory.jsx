"use client";
import CaseStudy from "@/components/customer/CaseStudy";
import BorderButton from "@/components/Animation/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useState } from "react";
import Link from "next/link";
const SuccessStory = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const handlePrevClick = () => {
    if (currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(3);
    }
  };
  const handleNextClick = () => {
    if (currentIndex !== 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(1);
    }
  };
  return (
    <section className="max-lg:hidden">
      <div className="flex justify-between max-md:flex-col mb-8">
        <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
          <p className="para2 font-urbanist font-normal text-[#232323] lg:block hidden uppercase">
            case studies
          </p>
          <h2 className="text-[28px] lg:text-[48px] leading-[39px] lg:leading-[60px] font-semibold text-[#020103] capitalize text-center lg:text-left max-md:mt-10 max-md:max-w-full max-md:text-[28px] font-sora">
            Some of Our Success Stories
          </h2>
        </div>

        <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full">
          <p className="self-stretch my-auto text-[14px] leading-[22px] lg:text-xl lg:leading-7 text-[#444444] lg:text-left text-center max-md:mt-10 max-md:max-w-full font-urbanist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim,
          </p>
        </div>
      </div>
      <div className="hidden md:block pb-[46px]">
        <img src="/images/platform/caseStudyLine.png" />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-[20px]">
        {/* {currentIndex === 1 && ( */}
        <div className="rounded-[24px] w-[50%] pt-[66px] pl-[32px] pr-[40px] pb-[38px] bg-gradient-to-br from-[#231C40] via-[#4B298B] to-[#9987CA]">
          <h3 className="text-white text-[40px] leading-[50.4px] font-semibold font-sora mb-[25px]">
            LightBeam ai pioneers zero-trust
          </h3>
          <p className="text-white para2 font-urbanist">
            <span className="font-semibold">Challenge: </span>LightBeam ai
            pioneers zero-trust data protection, merging data security, privacy,
            and AI governance.
          </p>
          <br />
          <p className="text-white para2 font-urbanist">
            <span className="font-semibold">Goal: </span>LightBeam ai pioneers
            zero-trust data protection, merging
          </p>
          <div className="mt-[71px] flex justify-between items-center">
            <Link
              href={
                "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf"
              }
              download
            >
              <BorderButton
                content={"Download"}
                className={
                  "py-[20px] px-[45px] bg-[#4B298B] text-primary_white font-semibold text-[20px] leading-[20px]"
                }
              />
            </Link>
            <p className="text-[22px] leading-[26.4px] text-primary_white font-semibold font-urbanist flex gap-2 items-center cursor-pointer">
              <Link
                href={
                  "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf"
                }
                className="flex gap-2"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </p>
          </div>
        </div>
        {/* )} */}
        <div
          className="rounded-[24px] w-[50%] pt-[66px] pl-[32px] pr-[40px] pb-[38px]  bg-center bg-cover bg-no-repeat flex justify-end items-end"
          style={{
            backgroundImage: `${
              currentIndex === 1
                ? "url('/images/customers/case_study1.svg')"
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
        <Link href={"/customer#case-study"}>
          <HoverBorderGradientDemo content="View All" />
        </Link>
      </div>
    </section>
  );
};
export default SuccessStory;
