"use client";

import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import "./privacy.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Gdpr = ({ sectionData }) => {
  const router = useRouter();
  return (
    <section className="mt-[53px] md:mt-[126px] flex flex-col items-center">
      <div className="flex gap-[220px]">
        <div className="lg:w-[843px] lg:text-left text-center sectionSpacing1280">
          <h2 className="text-[28px] md:title2 font-sora mb-[32px]">
            {sectionData?.content?.title}
          </h2>
          <p className="text-[14px] leading-[20px] md:para2  font-urbanist">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation. */}
            {sectionData?.content?.description}
          </p>
        </div>
        <div className="lg:block hidden">
          {/* <BorderButton
            content={"Know More"}
            className={"py-[20px] px-[40px] bg-primary_white"}
          /> */}
          <HoverBorderGradientDemo
            content={sectionData?.cta[0]?.text}
            onClick={() =>
              router.push(sectionData?.cta[0]?.url || "/template/template2")
            }
          />
        </div>
      </div>
      <div className="lg:mt-[54px] mt-6 flex flex-col-reverse lg:flex-row lg:gap-[50px] gap-6 items-center">
        <div className="lg:w-[649px] w-full h-[315px] rounded-[16px] overflow-hidden sectionSpacing1280">
          {sectionData?.images?.data?.[0]?.attributes?.url && (
            <Image
              loading="lazy"
              src={sectionData?.images?.data?.[0]?.attributes?.url}
              height={300}
              width={300}
              alt=""
              className=" min-h-[315px] min-w-full object-cover"
            />
          )}
        </div>
        <div className="lg:w-[579px] w-full lg:text-left text-center max-md:mb-[29px]">
          <p className=" text-[14px] leading-[20px] font-urbanist font-normal md:para2 md:text-2xl">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequa */}
            {sectionData?.content?.content}
          </p>
          <div className="lg:hidden mt-4">
            {/* <BorderButton
              content={"Know More"}
              className={
                "lg:py-[20px] py-[11px] lg:px-[40px] px-[29px] bg-primary_white"
              }
            /> */}
            <HoverBorderGradientDemo
              content={sectionData?.cta[0]?.text}
              onClick={() =>
                router.push(sectionData?.cta[0]?.url || "/template/template2")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gdpr;
