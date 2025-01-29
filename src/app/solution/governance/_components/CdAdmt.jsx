"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const CdAdmt = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col  lg:mt-[143px] my-12 lg:mb-[87px]">
      <div className="flex max-md:flex-col lg:gap-[88px] gap-6 ">
        <div className="w-auto lg:w-[649px] 2xl:w-[50%] lg:h-[315px] rounded-[16px] overflow-hidden">
          <img
            loading="lazy"
            src="/images/solution/governance/admt.svg"
            alt=""
            className=" min-h-[315px] min-w-full object-cover"
          />
        </div>
        <div className="w-auto lg:w-[542px] 2xl:w-[50%] max-lg:text-center">
          <h2 className="text-[28px] md:title2 font-sora font-semibold ">
            CA ADMT
          </h2>
          <p className="font-urbanist text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[#444444] lg:my-[32px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="max-lg:hidden relative md:absolute md:mb-[60px]">
            {/* <BorderButton
              content={"Know More"}
              className={"py-[20px] px-[40px] bg-primary_white"}
            /> */}
            <HoverBorderGradientDemo
              onClick={() => router.push("/template/template2")}
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
          onClick={() => router.push("/template/template2")}
        />
      </div>
    </section>
  );
};
export default CdAdmt;
