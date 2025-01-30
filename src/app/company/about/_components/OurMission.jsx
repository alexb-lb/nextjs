"use client";
import React from "react";
import "./index.css";
import Image from "next/image";

const OurMission = ({ strapiData }) => {
  return (
    <div
      className="relative max-md:px-4 max-md:py-[40px] md:h-[250vh]"
      id="vision"
    >
      <section
        className="max-md:static sticky top-0 w-full md:h-[100vh]"
        style={{
          backgroundImage: "url('/images/company/missionBgLine.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-md:static absolute top-[240px] md:left-[50%] transform md:-translate-x-[50%]">
          <h3 className="gradient-text font-sora font-semibold text-[80px] max-md:text-[30px] leading-[100px] max-md:leading-[38px] text-center  max-md:mb-5">
            {strapiData?.sections?.[1]?.content?.title}
          </h3>
          <p className="text-[#444444] font-urbanist font-normal text-[20px] max-md:text-[14px] leading-[28px] max-md:leading-[20px] text-center max-md:w-full md:max-w-[553px] mx-auto ">
            {strapiData?.sections?.[1]?.content?.description}
          </p>
          <div>
            <img
              src="/images/company/downArrow.svg"
              alt=""
              className="text-center mx-auto mt-[53px] max-md:hidden"
            />
          </div>
        </div>
      </section>

      <section
        className="overflow-y-auto overflow-hidden z-50 mt-[-250px] max-md:mt-8 md:h-[200vh]"
        // style={{ height: "200vh" }}
      >
        <div className="md:px-[80px] relative max-md:flex flex-wrap gap-2">
          <div className="w-[300px] md:h-[300px] max-md:w-[48%] rounded-[16px] p-6 max-md:p-2 md:absolute left-[15%] top-0 missionFirstImage">
            {strapiData?.sections?.[1]?.images?.data?.[0]?.attributes?.url && (
              <Image
                src={
                  strapiData?.sections?.[1]?.images?.data?.[0]?.attributes?.url
                }
                alt=""
                height={200}
                width={300}
              />
            )}
          </div>
          <div className="w-[300px] md:h-[300px] max-md:w-[48%] rounded-[16px]  p-6 max-md:p-2 md:absolute right-[15%] top-[320px] missionSecondImage">
            {strapiData?.sections?.[1]?.images?.data?.[1]?.attributes?.url && (
              <Image
                src={
                  strapiData?.sections?.[1]?.images?.data?.[1]?.attributes?.url
                }
                alt=""
                height={200}
                width={300}
              />
            )}
          </div>
          <div className="w-[300px] md:h-[300px] max-md:w-[48%] rounded-[16px]  p-6 max-md:p-2 md:absolute left-[18%] top-[580px] missionThirdImage">
            {strapiData?.sections?.[1]?.images?.data?.[2]?.attributes?.url && (
              <Image
                src={
                  strapiData?.sections?.[1]?.images?.data?.[2]?.attributes?.url
                }
                height={200}
                width={300}
                alt=""
              />
            )}
          </div>
          <div className="w-[300px] md:h-[300px] max-md:w-[48%] rounded-[16px]  p-6 max-md:p-2 md:absolute right-[18%] top-[880px]">
            {strapiData?.sections?.[1]?.images?.data?.[3]?.attributes?.url && (
              <Image
                src={
                  strapiData?.sections?.[1]?.images?.data?.[3]?.attributes?.url
                }
                height={200}
                width={300}
                alt=""
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
