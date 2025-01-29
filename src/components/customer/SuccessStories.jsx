"use client";
import React, { useState } from "react";
import BorderButton from "../Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import "./customer.css";

const useCases = [
  {
    img: "/images/logo/josef_big.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/belvo.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/chili_piper.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/silvr.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/silvr.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/chili_piper.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/josef_big.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/belvo.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/chili_piper.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/belvo.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/silvr.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
  {
    img: "/images/logo/josef_big.svg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscj elit, sed do eiusmod ",
  },
];

const UseCaseCard = ({ img, description }) => {
  return (
    <div className=" flex overflow-hidden flex-col lg:px-8 px-[17px] lg:py-10 py-[21.64px] bg-white rounded-2xl lg:min-w-[240px] lg:w-[305px] w-[48%] useCasesBox">
      <h3 className="lg:text-[32px] text-[18px] lg:leading-[38.4px] leading-[21.6px] text-[#151617] font-bold font-urbanist">
        <img loading="lazy" src={img} alt="" className="lg:block hidden" />
        <span className="lg:hidden text-[18px] leading-[21.6px] font-bold font-urbanist">
          Lorem ipsum dolor{" "}
        </span>
      </h3>
      <p className="lg:mt-9 mt-[21.6px] lg:text-[20px] text-[12px] lg:leading-[24px] leading-[14.4px] text-[#151617] font-urbanist">
        {description}
      </p>
      <div className="flex gap-2 justify-center items-center self-start pb-2 lg:mt-9 mt-[14.48px] lg:text-[18px] text-[12px] lg:leading-[26px] leading-[14.4px] font-semibold text-[#545CF6]">
        <span className="self-stretch my-auto font-urbanist">Learn More</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc60fe34a05c7c02bbf27a111ef4d2e3c6e4ef32daa6f08108245696f5cdb60?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[23px] max-md:w-[10px]"
        />
      </div>
    </div>
  );
};

const SuccessStories = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <section
      className="z-10 self-center lg:mt-[200px] mt-0 sm:mt-0 w-full lg:pb-[100px] md:pb-[50px] max-md:max-w-full"
      id="success-stories"
    >
      <div className="m-auto">
        <div className="flex justify-between items-center relative">
          <div className="flex max-md:ml-0 max-md:w-full">
            <h2 className="text-[28px] md:text-[48px] leading-[39px] md:leading-[60px] font-semibold text-[#020103] capitalize lg:text-left max-md:mt-10 max-md:max-w-full max-md:text-4xl font-sora ml-6 hidden md:block">
              Browse Success Stories
            </h2>
            <h2 className="text-[28px] md:text-[48px] leading-[39px] md:leading-[60px] font-semibold text-[#232323] capitalize lg:text-left max-md:mt-10 max-md:max-w-full max-md:text-4xl font-sora  block md:hidden">
              Browse <br /> Success Stories
            </h2>
          </div>
          <div
            className="flex items-center justify-center border border-[#E4E4E4] rounded-full 
            w-[110px] h-[40px] lg:w-[149px] lg:h-[54px] gap-2 md:mr-6 absolute right-0 max-md:text-[13px]"
          >
            <svg
              width="20"
              height="22"
              viewBox="0 0 20 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.8188 1H3.18117C1.442 1 0.404657 2.91555 1.36937 4.34564L7.09107 11.8274C7.56799 12.5344 7.82249 13.3651 7.82249 14.2148V19.9219C7.82249 20.8805 8.99523 21.3605 9.68111 20.6827L11.8586 18.5307C12.0628 18.329 12.1775 18.0553 12.1775 17.7699V14.2148C12.1775 13.3651 12.432 12.5344 12.9089 11.8274L18.6306 4.34564C19.5953 2.91555 18.558 1 16.8188 1Z"
                stroke="#2D323E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Filter by
          </div>
        </div>
        <div className="flex justify-center flex-wrap w-full  lg:gap-5 gap-[14px] items-stretch self-center mt-[32px] lg:mt-12 text-neutral-900 max-md:mt-10 max-md:max-w-full m-auto">
          {useCases
            .filter((item, ind) => (viewAll ? ind < useCases.length : ind < 8))
            .map((useCase, index) => (
              <UseCaseCard
                key={index}
                img={useCase.img}
                description={useCase.description}
              />
            ))}
        </div>
        {viewAll ? (
          <div className="mt-8 w-full  justify-center hidden lg:flex">
            <BorderButton
              content={"View Less"}
              className={
                "text-xl font-semibold leading-none text-center text-white px-[54.88px] py-[20px] rounded-[52px] max-md:px-5 bg-[#545cf6]"
              }
              onClick={() => setViewAll(false)}
            />
          </div>
        ) : (
          <div className="mt-8 w-full  justify-center hidden lg:flex">
            <BorderButton
              content={"View All"}
              className={
                "text-xl leading-[20px] font-semibold text-center  px-[54.88px] py-[20px] rounded-[52px] max-md:px-5 bg-[#545cf6] text-white"
              }
              onClick={() => setViewAll(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default SuccessStories;
