"use client";

import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Dpdp = ({ sectionData }) => {
  const router = useRouter();
  return (
    <section className="lg:mt-[140px] lg:mb-[134px] mt-[32px] flex flex-col items-center">
      <div className="flex lg:flex-row flex-col lg:gap-[87px] gap-6 items-center">
        <div className="lg:w-[542px] w-full max-lg:text-center">
          <h2 className="text-[28px] md:title2 font-sora font-semibold text-[#020103]">
            {/* India DPDP */}
            {sectionData?.content?.title}
          </h2>
          <p className="text-[14px] leading-[20px] md:para2 md:text-2xl font-urbanist font-normal text-[#444444] lg:py-[32px] pt-6">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. */}
            {sectionData?.content?.description}
          </p>
          <div className="lg:block hidden relative lg:absolute">
            {/* <BorderButton
              content={"Know More"}
              className={
                "px-10 py-5 rounded-[52px] text-black bg-primary_white font-semibold text-center"
              }
              onClick={() => {}}
            /> */}
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
              height={300}
              width={300}
              loading="lazy"
              src={sectionData?.images?.data?.[0]?.attributes?.url}
              alt=""
              className=" min-h-[315px] min-w-full object-cover"
            />
          )}
        </div>
      </div>
      <div className="lg:hidden mt-6 ">
        {/* <BorderButton
          content={"Know More"}
          className={
            "lg:px-10 px-[29px] lg:py-5 py-[11px] rounded-[52px] text-black bg-primary_white font-semibold text-center"
          }
          onClick={() => {}}
        /> */}
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
export default Dpdp;
