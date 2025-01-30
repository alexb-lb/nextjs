"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Hipaa = ({ sectionData }) => {
  const router = useRouter();
  return (
    <section className="flex flex-col items-center lg:mt-[185px] my-[48px] lg:mb-[175px]">
      <div className="flex lg:flex-row flex-col lg:gap-[87px] gap-6 items-center">
        <div className="lg:w-[542px] w-full text-center lg:text-left">
          <h2 className="text-[28px] md:title2 font-sora font-semibold ">
            {/* HIPAA */}
            {sectionData?.content?.title}
          </h2>
          <p className="text-[14px] leading-[20px] md:text-[24px] md:leading-[28px] font-urbanist  text-[#444444] lg:my-[32px] mt-6">
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
        <div className="lg:w-[649px] w-full lg:h-[315px] rounded-[16px] overflow-hidden sectionSpacing1280">
          {sectionData?.images?.data?.[0]?.attributes?.url && (
            <Image
              loading="lazy"
              height={300}
              width={300}
              src={sectionData?.images?.data?.[0]?.attributes?.url}
              alt=""
              className=" min-h-[315px] min-w-full object-cover"
            />
          )}
        </div>
      </div>
      <div className="mt-4 lg:hidden">
        <BorderButton
          content={sectionData?.cta[0]?.text}
          className={
            "lg:py-[20px] py-[11px] px-[29px] lg:px-[40px] bg-primary_white"
          }
          onClick={() =>
            router.push(sectionData?.cta[0]?.url || "/template/template2")
          }
        />
      </div>
    </section>
  );
};
export default Hipaa;
