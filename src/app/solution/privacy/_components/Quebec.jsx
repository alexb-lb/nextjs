"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const Quebec = () => {
  const router = useRouter();
  return (
    <section className="relative flex flex-col items-center lg:mt-[125px] mt-[60px] lg:mb-[166px] mb-[63px]">
      <div className="flex lg:flex-row flex-col lg:gap-[87px] gap-6 items-center">
        <div className="lg:w-[542px] w-full lg:text-left text-center">
          <h2 className="text-[28px] md:title2 font-sora font-semibold ">
            Québec&apos;s Law
          </h2>
          <p className=" text-[14px] leading-[20px] font-urbanist md:text-[20px] md:leading-[28px] text-[#444444] mt-[32px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="lg:block hidden mt-[32px] relative lg:absolute">
            {/* <BorderButton
              content={"Know More"}
              className={"py-[20px] px-[40px] bg-primary_white"}
            /> */}
            <HoverBorderGradientDemo
              onClick={() => router.push("/template/template2")}
            />
          </div>
        </div>
        <div className="lg:w-[649px] w-full lg:h-[315px] rounded-[16px] overflow-hidden">
          <img
            loading="lazy"
            src="/images/solution/privacy/quebec.svg"
            alt=""
            className=" min-h-[315px] min-w-full object-cover"
          />
        </div>
      </div>
      <div className="lg:hidden mt-6 ">
        {/* <BorderButton
          content={"Know More"}
          className={"py-[20px] px-[40px] bg-primary_white"}
        /> */}
        <HoverBorderGradientDemo
          onClick={() => router.push("/template/template2")}
        />
      </div>
    </section>
  );
};
export default Quebec;
