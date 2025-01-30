import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const Retention = ({ sectionData }) => {
  return (
    <div
      className="md:pt-[73px] pt-10 md:pb-[85px] pb-10 lg:px-[80px] px-4"
      style={{
        backgroundImage: "url('/images/platform/retenstionBg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <h3 className="gradient_heading font-sora text-[24px] md:text-[48px] leading-[30px] md:leading-[60px] font-semibold max-md:mb-4">
          {/* Data Retention */}
          {sectionData[0]?.title}
        </h3>
        <Link href={sectionData[0]?.cta[0]?.url || "#"}>
          <HoverBorderGradientDemo
            content={sectionData[0]?.cta[0]?.text}
            // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
          />
        </Link>
      </div>

      <div
        className="flex flex-col lg:flex-row w-full rounded-[16px] h-auto  bg-[#202020]  
      mt-[32px] p-4 lg:p-[56px] items-center border border-[#A5A5A5]/[0.5] gap-10"
      >
        <div className="lg:w-[50%] md:pt-4 ">
          <div className="flex items-center gap-[28px] max-md:gap-[17px] mb-5 xl:mb-[48px]">
            <Image
              src="/images/platform/one.png"
              alt=""
              width={48}
              height={48} // Set height to maintain aspect ratio
              className="max-w-[30.32px] lg:max-w-[48px]"
              layout="responsive"
            />
            <p className="text-[12px] md:text-[18px] md:leading-[24px] font-urbanist text-white">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. */}
              {sectionData[1]?.title}
            </p>
          </div>
          <div className="flex items-center gap-[28px] max-md:gap-[17px] mb-5 xl:mb-[48px]">
            <Image
              src="/images/platform/two.png"
              alt=""
              width={48}
              height={48}
              className="max-w-[30.32px] lg:max-w-[48px]"
              layout="responsive"
            />
            <p className="text-[12px] md:text-[18px] md:leading-[24px] font-urbanist text-white">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. */}
              {sectionData[2]?.title}
            </p>
          </div>
          <div className="flex items-center gap-[28px] max-md:gap-[17px] mb-5 xl:mb-[48px]">
            <Image
              src="/images/platform/three.png"
              alt=""
              width={48}
              height={48}
              className="max-w-[30.32px] lg:max-w-[48px]"
              layout="responsive"
            />
            <p className="text-[12px] md:text-[18px] md:leading-[24px] font-urbanist text-white">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. */}
              {sectionData[3]?.title}
            </p>
          </div>
          <div className="flex items-center gap-[28px] max-md:gap-[17px] mb-5 xl:mb-[48px]">
            <Image
              src="/images/platform/four.png"
              alt=""
              width={48}
              height={48}
              className="max-w-[30.32px] lg:max-w-[48px]"
              layout="responsive"
            />
            <p className="text-[12px] md:text-[18px] md:leading-[24px] font-urbanist text-white">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. */}
              {sectionData[4]?.title}
            </p>
          </div>
          {/* <div className="flex items-center gap-[28px] max-md:[17px] mb-[48px]">
            <img src="/images/platform/two.png" alt="" />
            <p className="text-[18px] leading-[24px] font-urbanist text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="flex items-center gap-[28px] max-md:[17px] mb-[48px]">
            <img src="/images/platform/three.png" alt="" />
            <p className="text-[18px] leading-[24px] font-urbanist text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div>
          <div className="flex items-center gap-[28px] max-md:[17px] ">
            <img src="/images/platform/four.png" alt="" />
            <p className="text-[18px] leading-[24px] font-urbanist text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>
          </div> */}
        </div>

        {/* seprator */}
        <div className="border-b lg:border-r border-[#808080] w-full lg:w-0 lg:h-[430px] opacity-[30%] my-2 max-md:mb-[17px]"></div>

        <div className="flex flex-col gap-2 md:gap-0 md:flex-row lg:flex-col items-center justify-center lg:mt-0 lg:w-[50%]  ">
          <p
            className="text-[12px] md:text-[18px] lg:leading-[28px] 
          font-urbanist lg:mb-[27px] text-white "
          >
            {/* Get a handle on sensitive information still lurking inside your data
            repositories far beyond the necessary regulatory requirements.
            Control the leakage risks and unpleasant surprises. */}
            {sectionData[5]?.title}
          </p>
          {sectionData[5]?.image?.data?.attributes?.url && (
            <Image
              src={sectionData[5]?.image?.data?.attributes?.url}
              alt=""
              width={500}
              height={300}
              className="max-md:w-full md:w-[50%] lg:w-full"
              layout="responsive"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Retention;
