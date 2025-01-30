"use client";

import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import "./privacy.css";
import Image from "next/image";

const Quebec = ({ sectionData }) => {
  const router = useRouter();
  return (
    <section className="relative flex flex-col items-center lg:mt-[125px] mt-[60px] lg:mb-[166px] mb-[63px]">
      <div className="flex lg:flex-row flex-col lg:gap-[87px] gap-6 items-center">
        <div className="lg:w-[542px] w-full lg:text-left text-center ">
          <h2 className="text-[28px] md:title2 font-sora font-semibold ">
            {/* Québec&apos;s Law */}
            {sectionData?.content?.title}
          </h2>
          <p className=" text-[14px] leading-[20px] font-urbanist md:text-[24px] md:leading-[28px] text-[#444444] mt-[32px] ">
            {sectionData?.content?.description}
          </p>
          <div className="lg:block hidden mt-[32px] relative lg:absolute">
            <HoverBorderGradientDemo
              content={sectionData?.cta[0]?.text}
              onClick={() =>
                router.push(sectionData?.cta[0]?.url || "/template/template2")
              }
            />
          </div>
        </div>
        <div className="lg:w-[649px] w-full lg:h-[315px] rounded-[16px] overflow-hidden sectionSpacing1280">
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
      </div>
      <div className="lg:hidden mt-6 ">
        <HoverBorderGradientDemo
          content={sectionData?.cta[0]?.text}
          onClick={() =>
            router.push(sectionData?.cta[0]?.url || "/template/template2")
          }
        />
      </div>
    </section>
  );
};
export default Quebec;
