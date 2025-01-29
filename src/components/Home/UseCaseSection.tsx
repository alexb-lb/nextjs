"use client";
import React, { useState } from "react";
import UseCaseCard from "./UseCaseCard";
import "./home.css";
import BorderButton from "../Animation/Button";
import "./home.css";

interface UseCaseData {
  title: string;
  description: string;
}

const useCases: UseCaseData[] = [
  {
    title: "DSPM",
    description: "Secure your data wherever it is.",
  },
  {
    title: "DDR",
    description: "Detect anomalies and respond automatically.",
  },
  {
    title: "DAG",
    description: "Know who has access to sensitive data.",
  },
  {
    title: "DPM",
    description: "Automate data privacy management.",
  },
  {
    title: "Zero Trust",
    description: "Local deployment with no data/metadata exfiltration.",
  },
  {
    title: "Discover",
    description: "Across Cloud, SaaS and On-prem.",
  },
  {
    title: "Classify",
    description: "Classify and label files, tickets and tables.",
  },
  {
    title: "Identify",
    description: "Know whose data you have where.",
  },
  {
    title: "DSR",
    description: "Data Subject Request Automation",
  },
  {
    title: "Consent",
    description: "Honor users’ consent preferences.",
  },
  {
    title: "Assessments",
    description: "Put privacy at the center of your processes.",
  },
  {
    title: "AI Security",
    description: "Develop and train AI models with confidence.",
  },
  {
    title: "DSR",
    description: "Data Subject Request Automation",
  },
  {
    title: "Consent",
    description: "Honor users’ consent preferences.",
  },
  {
    title: "Assessments",
    description: "Put privacy at the center of your processes.",
  },
  {
    title: "AI Security",
    description: "Develop and train AI models with confidence.",
  },
];

const UseCasesSection: React.FC = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <section className="z-10 self-center  max-md:mt-[0px] sm:mt-0 w-full md:pb-[100px] max-md:max-w-full bg-primary_white">
      <div className="px-[16px] lg:pl-[80px] lg:pr-[74px] m-auto">
        <div className="flex justify-between max-md:flex-col">
          <div className="flex flex-col w-5/12 max-md:ml-0 max-md:w-full">
            <p className="para2 font-urbanist font-normal text-[#232323] lg:block hidden">
              USE CASES
            </p>
            <h2 className="text-[28px] lg:text-[48px] leading-[39px] lg:leading-[60px] font-semibold text-[#232323] md:text-[#020103] capitalize text-center lg:text-left max-md:mt-10 max-md:max-w-full max-md:text-[28px] font-sora">
              Some of Our <br /> Success Use cases
            </h2>
          </div>
          <div className="flex flex-col ml-5 w-5/12 max-md:ml-0 max-md:w-full">
            <p className="self-stretch my-auto text-[14px] leading-[22px] lg:text-xl lg:leading-7 text-[#444444] lg:text-left text-center max-md:mt-[26px] max-md:max-w-full font-urbanist">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus.
            </p>
          </div>
        </div>
        <img
          src="/images/platform/caseStudyLine.png"
          className="pt-[40px] max-md:hidden"
        />
        <div className="flex justify-center sm:justify-center flex-wrap w-full  lg:gap-5 gap-[14px] items-start self-center mt-[32px] lg:mt-12 text-neutral-900 max-md:mt-[54px] max-md:max-w-full m-auto">
          {useCases
            .filter((item, ind) => (viewAll ? ind < useCases.length : ind < 12))
            .map((useCase, index) => (
              <UseCaseCard
                key={index}
                title={useCase.title}
                description={useCase.description}
              />
            ))}
        </div>
        {viewAll ? (
          <div className="mt-8 w-full flex justify-center ">
            <BorderButton
              content={"View Less"}
              className={
                "text-xl font-semibold leading-none text-center text-[#020103] px-[54.88px] py-[20px] rounded-[52px] max-md:px-5 bg-primary_white "
              }
              onClick={() => setViewAll(false)}
            />
          </div>
        ) : (
          <div className="mt-8 w-full flex justify-center">
            <BorderButton
              content={"View All"}
              className={
                "text-xl leading-[20px] font-semibold text-center text-[#020103] px-[54.88px] py-[20px] rounded-[52px] max-md:px-5 bg-primary_white max-md:hidden"
              }
              onClick={() => setViewAll(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default UseCasesSection;
