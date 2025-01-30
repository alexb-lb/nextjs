import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import Image from "next/image";

import React from "react";

const Access = ({ sectionData, imageData }) => {
  return (
    <div
      className="md:pt-[68px] pt-[38px] md:pb-[118px] pb-9 max-md:px-4 md:px-[80px]"
      style={{
        backgroundImage: "url('/images/platform/accessBg1.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-semibold text-[#020103] font-sora text-[30px] md:text-[48px] leading-[44px] text-center mb-[28px]">
        {/* Data Access */}
        {sectionData[0]?.content?.title}
      </h3>
      <p className="text-[#4D4D4D] font-urbanist text-[16px] md:text-[24px] md:leading-[28px] max-w-[100%] max-md:px-4 md:max-w-[63%] text-center mx-auto mb-[28px]">
        {/* Clearly identify risks associated with access to your sensitive data,
        both from inside and outside your organization. With continuous
        monitoring of sensitive data sharing, get alerted on any unauthorized
        external sharing of data within a few seconds. */}
        {sectionData[0]?.content?.description}
      </p>
      <Link href={sectionData[0]?.cta[0]?.url || "#"}>
        <HoverBorderGradientDemo
          content={sectionData[0]?.cta[0]?.text}
          // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
        />
      </Link>

      <div className="md:mt-[65px] mt-[45px] flex items-stretch justify-center flex-wrap gap-[20px]">
        {/* <div className="w-full h-[400.31px] md:w-[413px] md:h-[482px] rounded-[20px] max-md:rounded-[16px] bg-white p-3 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-full h-[400.31px] md:w-[413px] md:h-[482px] rounded-[20px] max-md:rounded-[16px] bg-white p-3 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-full h-[400.31px] md:w-[413px] md:h-[482px] rounded-[20px] max-md:rounded-[16px] bg-white p-3 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div> */}
        {sectionData[1]?.cards.map((item, ind) => (
          <div
            className="w-full min-h-[400.31px] md:w-[413px] md:min-h-[482px] rounded-[20px] max-md:rounded-[16px] bg-white p-3 md:p-[12px]"
            key={ind}
          >
            {imageData?.cards?.[ind]?.image?.data?.attributes?.url && (
              <Image
                src={imageData?.cards?.[ind]?.image?.data?.attributes?.url}
                alt=""
                width={500}
                height={200}
                className="h-[200px] w-full"
                layout="responsive"
              />
            )}

            <h2 className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[18px] md:text-[24px] md:leading-[27px] font-semibold">
              {item?.title}
            </h2>
            <p className="md:px-[27px] pt-3 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod. Lorem ipsum dolor sit amet. */}
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Access;
