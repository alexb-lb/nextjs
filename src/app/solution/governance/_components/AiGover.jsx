"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const AiGover = () => {
  const router = useRouter();
  return (
    <section className="flex flex-col  lg:mt-[102px] mt-12 max-lg:text-center">
      <div className="flex max-md:flex-col-reverse lg:gap-[88px] gap-6 ">
        <div className="w-auto lg:w-[542px] 2xl:w-[50%]">
          <h2 className="text-[28px] md:title2 font-sora font-semibold mb-[24px] lg:w-[1279px]  2xl:w-[100%] lg:text-left text-center ">
            AI Governance
          </h2>
          <p className="font-urbanist text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[#444444] lg:mb-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
          <div className="max-lg:hidden relative md:absolute ">
            {/* <BorderButton
            content={"Know More"}
            className={"py-[20px] px-[40px] bg-primary_white"}
          /> */}
            <HoverBorderGradientDemo
              onClick={() => router.push("/template/template2")}
            />
          </div>
        </div>
        <div className="w-auto lg:w-[649px] 2xl:w-[50%] lg:h-[315px] rounded-[16px] overflow-hidden">
          <img
            loading="lazy"
            src="/images/solution/governance/ai_gover.svg"
            alt=""
            className=" min-h-[315px] min-w-full object-cover"
          />
        </div>
      </div>
      <div className="mt-6 lg:hidden">
        {/* <BorderButton
        content={"Know More"}
        className={
          "lg:py-[20px] py-[11px] lg:px-[40px] px-[29px] bg-primary_white"
        }
      /> */}
        <HoverBorderGradientDemo />
      </div>
    </section>
  );
};
export default AiGover;
