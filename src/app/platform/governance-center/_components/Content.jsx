import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const Content = ({ sectionData }) => {
  return (
    <div
      className="md:pt-[65px] pt-[37px] lg:pt-[105px] pb-[96px] px-4 lg:px-[80px] bg-[url('/images/platform/dataLossBg.svg')]  bg-cover"
      style={{
        backgroundPosition: "50% 75%",
      }}
    >
      <div className="flex flex-col-reverse xl:flex-row xl:items-center  lg:gap-[90px] gap-8">
        {sectionData[0]?.images?.data[0]?.attributes?.url && (
          <Image
            src={sectionData[0]?.images?.data[0]?.attributes?.url}
            alt=""
            width={500}
            height={300}
            className="md:w-[90%] lg:min-w-[50%] block mx-auto rounded-[24px]"
            layout="responsive"
          />
        )}

        <div className="relative">
          <h3
            className="font-sora text-[#020103] font-semibold text-[30px] lg:text-[48px] 
          lg:leading-[60px] mb-5 lg:mb-[40px] text-center xl:text-left"
          >
            {/* Data Loss Prevention Integration */}
            {sectionData[0]?.content?.title}
          </h3>
          <p
            className="text-[16px] lg:text-[24px] lg:leading-[28px] 
          font-urbanist mb-[20px] lg:mb-[40px] text-center xl:text-left"
          >
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet. */}
            {sectionData[0]?.content?.description}
          </p>

          <div>
            {/* <p
              className="text-[16px] lg:text-[18px] lg:leading-[24px] 
          font-urbanist text-center xl:text-left font-[700]"
            >
              Lorem ipsum dolor
            </p> */}

            <p
              className="text-[16px] lg:text-[18px] lg:leading-[24px] 
          font-urbanist md:mb-[40px] mb-6 text-center xl:text-left"
            >
              {sectionData[0]?.content?.content ||
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed doeiusmod. Lorem ipsum dolor sit amet."}
            </p>
          </div>

          <div className="relative xl:absolute">
            <Link href={sectionData[0]?.cta[0]?.url || "#"}>
              <HoverBorderGradientDemo
                content={sectionData[0]?.cta[0]?.title}
                // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row items-center lg:gap-[57px] gap-5 lg:pt-[96px] md:mt-[96px] mt-12">
        <div className="relative lg:w-[40%]">
          <h3
            className="font-sora text-[#020103] font-semibold text-[30px] lg:text-[48px] 
          lg:leading-[60px] mb-4 lg:mb-[40px] text-center xl:text-left"
          >
            {/* Third-Party <br /> Data Sharing */}
            {sectionData[1]?.content?.title}
          </h3>
          <p
            className="text-[16px] lg:text-[24px] lg:leading-[28px] 
          font-urbanist mb-4 lg:mb-[40px] text-center xl:text-left"
          >
            {/* Third-party risk management (TPRM) is a form of risk management that
            focuses on identifying and reducing risks relating to the use of
            third parties (vendors, partners, contractors, service providers).  */}
            {sectionData[1]?.content?.description}
          </p>

          <div className="relative xl:absolute">
            <Link href={sectionData[1]?.cta[0]?.url || "#"}>
              <HoverBorderGradientDemo
                content={sectionData[1]?.cta[0]?.text}
                // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
              />
            </Link>
          </div>
        </div>
        <div className="relative lg:w-[60%] ">
          {sectionData[1]?.images?.data[0]?.attributes?.url && (
            <Image
              src={sectionData[1]?.images?.data[0]?.attributes?.url}
              alt=""
              width={692}
              height={400}
              className="lg:w-[85%] md:min-w-[692px] w-full"
              layout="responsive"
            />
          )}

          <div
            className="absolute w-full md:w-[400px] h-auto lg:w-[85%]  py-[24px] max-md:py-[10px] px-[42px] max-md:px-[20px] bg-[#1c1152] 
            rounded-[16px] md:left-[295px] lg:left-[128px] bottom-[-80px] md:bottom-[-79px] z-10"
            style={{
              backgroundImage: "url('/images/platform/lineBg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p
              className="font-poppins text-white text-[12px] lg:text-[18px] 
            lg:leading-[27px] text-left"
            >
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit
              sed do eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing
              elit sed do eiusmod */}
              {sectionData[1]?.content?.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
