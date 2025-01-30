"use client";
import BorderButton from "../Animation/Button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CaseStudy = ({ sectionData, caseStudy, hidden }) => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(1);
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
    <section className="mt-[37px] lg:mt-0  lg:px-0">
      <h2 className=" title2 text-center font-sora font-bold mb-[20px] md:mb-[61px]">
        {/* Case Studies */}
        {sectionData?.title}
      </h2>
      <div className="flex lg:flex-row flex-col-reverse justify-center items-stretch gap-[20px] ">
        {/* {currentIndex === 1 && ( */}
        <div className="rounded-[24px] lg:w-[630px] w-full pt-[35px] md:pt-[66px] px-[17px] md:pl-[32px] md:pr-[40px] pb-[38px] bg-gradient-to-br from-[#231C40] via-[#4B298B] to-[#9987CA]">
          <h3 className="text-white md:text-[40px] md:leading-[50.4px] text-[22px] leading-[28px] font-semibold font-sora md:mb-[25px] mb-[12px]">
            {/* LightBeam ai pioneers zero-trust */}
            {caseStudy?.data?.data[currentIndex - 1]?.attributes?.title}
          </h3>
          <p className="text-white text-[12px] leading-[16px] md:text-[20px] md:leading-[24px] font-urbanist">
            {/* <span className="font-semibold">Challenge: </span>LightBeam ai
            pioneers zero-trust data protection, merging data security, privacy,
            and AI governance. */}
            {caseStudy?.data?.data[currentIndex - 1]?.attributes?.challenges}
          </p>
          <br />
          <p className="text-white text-[12px] leading-[16px] md:text-[20px] md:leading-[24px] font-urbanist">
            {/* <span className="font-semibold">Goal: </span>LightBeam ai pioneers
            zero-trust data protection, merging */}
            {caseStudy?.data?.data[currentIndex - 1]?.attributes?.goals}
          </p>
          <div className="md:mt-[71px] mt-[20px] flex justify-between items-center">
            <Link
              href={
                caseStudy?.data?.data[currentIndex - 1]?.attributes?.url ||
                "https://tourism.gov.in/sites/default/files/2019-04/dummy-pdf_2.pdf"
              }
              target="_blank"
              download
            >
              <BorderButton
                content={"Download"}
                className={
                  "md:py-[20px] py-[11px] md:px-[45px] px-[33px] bg-[#4B298B] text-primary_white font-semibold   text-[16px] md:text-[20px] leading-[20px]"
                }
              />
            </Link>
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
          className="rounded-[24px] lg:w-[630px] w-full lg:h-auto h-[374px] pt-[66px] pl-[32px] pr-[40px] pb-[38px] bg-center bg-contain bg-no-repeat flex justify-end items-end"
          style={{
            backgroundImage: `url(${
              caseStudy?.data?.data?.[currentIndex - 1]?.attributes?.image?.data
                ?.attributes?.url
            })`,
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
      <div className="mt-[64px] lg:block hidden">
        <HoverBorderGradientDemo
          content="View All"
          onClick={() => router.push("/customer")}
          className={`${hidden}`}
        />
      </div>
    </section>
  );
};
export default CaseStudy;
