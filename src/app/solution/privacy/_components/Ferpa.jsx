"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const Ferpa = () => {
  const router = useRouter();
  return (
    <section className="lg:mt-[125px] mt-[48px] flex flex-col items-center">
      <div className="flex lg:flex-row flex-col-reverse  lg:gap-[87px] gap-6 items-center">
        <div className="lg:w-[649px] w-full lg:h-[315px] rounded-[16px] overflow-hidden">
          <img
            loading="lazy"
            src="/images/solution/privacy/ferpa.svg"
            alt=""
            className=" min-h-[315px] min-w-full object-cover"
          />
        </div>
        <div className="lg:w-[542px] w-full max-lg:text-center">
          <h2 className="text-[28px] md:title2 font-sora font-semibold ">
            FERPA
          </h2>
          <p className=" font-urbanist text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[#444444] lg:my-[32px] pt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="hidden lg:block max-md:text-center relative lg:absolute">
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
        <BorderButton
          content={"Know More"}
          className={
            "lg:py-[20px] py-[11px] px-[29px] lg:px-[40px] bg-primary_white"
          }
          onClick={() => router.push("/template/template2")}
        />
      </div>
    </section>
  );
};
export default Ferpa;
