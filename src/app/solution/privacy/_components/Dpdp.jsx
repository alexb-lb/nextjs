"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const Dpdp = () => {
  const router = useRouter();
  return (
    <section className="lg:mt-[140px] lg:mb-[134px] mt-[32px] flex flex-col items-center">
      <div className="flex lg:flex-row flex-col lg:gap-[87px] gap-6 items-center">
        <div className="lg:w-[542px] w-full max-lg:text-center">
          <h2 className="text-[28px] md:title2 font-sora font-semibold text-[#020103]">
            India DPDP
          </h2>
          <p className="text-[14px] leading-[20px] md:para2 font-urbanist font-normal text-[#444444] lg:py-[32px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
              onClick={() => router.push("/template/template2")}
            />
          </div>
        </div>
        <div className="lg:w-[649px] w-full lg:h-[315px] rounded-[16px] overflow-hidden">
          <img
            loading="lazy"
            src="/images/solution/privacy/dpdp.svg"
            alt=""
            className=" min-h-[315px] min-w-full object-cover"
          />
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
          onClick={() => router.push("/template/template2")}
        />
      </div>
    </section>
  );
};
export default Dpdp;
