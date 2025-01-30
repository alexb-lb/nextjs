"use client";

import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Image from "next/image";
import { useRouter } from "next/navigation";

const CdAdmt = ({ sectionData }) => {
  const router = useRouter();
  return (
    <section className="flex flex-col  lg:mt-[143px] my-12 lg:mb-[87px]">
      <div className="flex max-md:flex-col lg:gap-[88px] gap-6 ">
        <div className="w-auto lg:w-[649px] 2xl:w-[50%] lg:h-[315px] rounded-[16px] overflow-hidden">
          {sectionData?.images?.data[0]?.attributes?.url && (
            <Image
              loading="lazy"
              height={300}
              width={300}
              src={sectionData?.images?.data[0]?.attributes?.url}
              alt=""
              className=" min-h-[315px] min-w-full object-cover"
            />
          )}
        </div>
        <div className="w-auto lg:w-[542px] 2xl:w-[50%] max-lg:text-center">
          <h2 className="text-[28px] md:title2 font-sora font-semibold ">
            {/* CA ADMT */}
            {sectionData?.title}
          </h2>
          <p className="font-urbanist text-[14px] leading-[20px] md:text-[24px] md:leading-[28px] text-[#444444] lg:my-[32px] mt-6">
            {sectionData?.content?.description}
          </p>
          <div className="max-lg:hidden relative md:absolute md:mb-[60px]">
            {/* <BorderButton
              content={"Know More"}
              className={"py-[20px] px-[40px] bg-primary_white"}
            /> */}
            <HoverBorderGradientDemo
              onClick={() =>
                router.push(sectionData?.cta[0]?.url || "/template/template2")
              }
              content={sectionData?.cta[0]?.text}
            />
          </div>
        </div>
      </div>
      <div className="mt-6 lg:hidden">
        {/* <BorderButton
          content={"Know More"}
          className={
            "lg:py-[20px] py-[11px] lg:px-[40px] px-[29px] bg-primary_white"
          }
        /> */}
        <HoverBorderGradientDemo
          onClick={() =>
            router.push(sectionData?.cta[0]?.url || "/template/template2")
          }
          content={sectionData?.cta[0]?.text}
        />
      </div>
    </section>
  );
};
export default CdAdmt;
