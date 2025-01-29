"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { useRouter } from "next/navigation";

const Gdpr = () => {
  const router = useRouter();
  return (
    <section className="mt-[53px] md:mt-[126px] flex flex-col items-center">
      <div className="flex gap-[253px]">
        <div className="lg:w-[843px] lg:text-left text-center">
          <h2 className="text-[28px] md:title2 font-sora mb-[32px]">GDPR</h2>
          <p className="text-[14px] leading-[20px] md:para2 font-urbanist">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className="lg:block hidden">
          {/* <BorderButton
            content={"Know More"}
            className={"py-[20px] px-[40px] bg-primary_white"}
          /> */}
          <HoverBorderGradientDemo
            onClick={() => router.push("/template/template2")}
          />
        </div>
      </div>
      <div className="lg:mt-[54px] mt-6 flex flex-col-reverse lg:flex-row lg:gap-[58px] gap-6 items-center">
        <div className="lg:w-[649px] w-full h-[315px] rounded-[16px] overflow-hidden">
          <img
            loading="lazy"
            src="/images/solution/privacy/gdpr.svg"
            alt=""
            className=" min-h-[315px] min-w-full object-cover"
          />
        </div>
        <div className="lg:w-[579px] w-full lg:text-left text-center max-md:mb-[29px]">
          <p className=" text-[14px] leading-[20px] font-urbanist font-normal md:para2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequa <br />
            <br />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequa
          </p>
          <div className="lg:hidden mt-4">
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
        </div>
      </div>
    </section>
  );
};
export default Gdpr;
