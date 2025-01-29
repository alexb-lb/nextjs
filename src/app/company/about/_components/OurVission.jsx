"use client";
import React from "react";

const OurVission = () => {
  return (
    <div
      className="relative md:mt-[-200px] md:h-[260vh] max-md:py-[40px] max-md:px-4"
      // style={{ height: "260vh" }}
    >
      <section
        className="md:sticky top-0 w-full md:h-[100vh] md:bg-[url('/images/company/missionBgLine.png')]"
        style={{
          // backgroundImage: "url('/images/company/missionBgLine.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // height: "100vh",
          // width: "100vw",
        }}
      >
        <div className="md:absolute top-[240px] md:left-[50%] transform md:-translate-x-[50%]">
          <h3 className="gradient-text font-sora font-semibold text-[80px] max-md:text-[30px] leading-[100px] max-md:leading-[38px] text-center max-md:mb-5 ">
            Our Vision
          </h3>
          <p className="text-[#444444] font-urbanist font-normal text-[20px] max-md:text-[14px] leading-[28px] max-md:leading-[20px] text-center max-md:w-full md:max-w-[553px] mx-auto ">
            To simplify data security, privacy and governance for companies
            across the world.
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
        className="overflow-y-auto overflow-hidden z-50 md:mt-[-250px] max-md:mt-8 md:h-[200vh]"
        // style={{ height: "200vh" }}
      >
        <div className="md:px-[80px] relative max-md:flex flex-wrap gap-2">
          <div
            className="w-[458px] md:h-[458px] max-md:w-[48%] rounded-[16px] bg-[#F3F1F4] p-6 max-md:p-2 md:absolute left-[5%] top-0"
            style={{ boxShadow: "0px 61px 52px -30px #6E6E6E52" }}
          >
            <img
              src="/images/company/vission1.png"
              alt=""
              className="md:w-[410px] md:h-[410px]"
            />
          </div>
          <div
            className="w-[458px] md:h-[458px] max-md:w-[48%] rounded-[16px] bg-[#F3F1F4] p-6 max-md:p-2 md:absolute right-[5%] top-[320px]"
            style={{ boxShadow: "0px 61px 52px -30px #6E6E6E52" }}
          >
            <img
              src="/images/company/vission2.png"
              alt=""
              className="md:w-[410px] md:h-[410px]"
            />
          </div>
          <div
            className="w-[458px] md:h-[458px] max-md:w-[48%] rounded-[16px] bg-[#F3F1F4] p-6 max-md:p-2 md:absolute left-[18%] top-[580px]"
            style={{ boxShadow: "0px 61px 52px -30px #6E6E6E52" }}
          >
            <img
              src="/images/company/vission3.png"
              alt=""
              className="md:w-[410px] md:h-[410px]"
            />
          </div>
          <div
            className="w-[458px] md:h-[458px] max-md:w-[48%] rounded-[16px] bg-[#F3F1F4] p-6 max-md:p-2 md:absolute right-[12%] top-[880px]"
            style={{ boxShadow: "0px 61px 52px -30px #6E6E6E52" }}
          >
            <img
              src="/images/company/vission4.png"
              alt=""
              className="md:w-[410px] md:h-[410px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurVission;
