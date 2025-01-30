"use client";
import Link from "next/link";
import BorderButton from "../Animation/Button";
import "./home.css";
const FreeDemo = ({ sectionData }) => {

  return (
    <section
      style={{
        backgroundImage: `url("${
          sectionData?.images?.data &&
          sectionData?.images?.data[0]?.attributes?.url
        }")`,
      }}
      className="relative bg-[#F5F8FF] w-fit mx-[16px] lg:mx-0  sm:mx-auto  sm:w-full  mt-[131px] max-md:mt-[70px]  rounded-2xl xl:pr-[98px] pr-[11px] xl:pt-[58px] pt-[45px]  xl:pl-[58px] pl-[15px] xl:pb-[64px] pb-[168px] flex xl:flex-row flex-col justify-between bg-center bg-cover bg-no-repeat cardSpacing"
    >
      <div className=" w-full xl:text-left text-center lg:max-w-[694px]">
        <div className=" md:hidden absolute bottom-0 right-0"></div>
        <h1 className="gradient_heading text-[28px] md:text-[32px] leading-[40px] font-sora font-semibold mb-[16px]">
          {/* Experience Lightbeam.ai&apos;s Power <br /> with a Free Demo Today! */}
          {sectionData?.content?.title}
        </h1>
        <p className="text-[#D9D9D9] font-poppins para3B">
          {sectionData?.content?.description ||
            "LightBeam ai pioneers zero-trust data protection, merging data security, privacy, and AI governance. It ensures compliance with regulation"}
        </p>
      </div>
      <div className="flex justify-center items-center xl:justify-normal max-md:mt-8 ">
        {/* <button className="flex flex-col font-semibold leading-none text-center rounded-[50px] mt-6">
          <div className="flex flex-col rounded-[52px]">
            <div className="px-10 py-5 rounded-[52px] text-white border border-[#8C70D2]">
              Know More
            </div>
          </div>
        </button> */}
        <Link href={sectionData?.cta[0]?.url || "/contact"}>
          <BorderButton
            content={sectionData?.cta[0]?.text}
            className={
              " py-5 rounded-[52px] text-white bg-[#19192d] font-semibold leading-none text-center px-10 max-md:py-3 max-md:px-9 max-md:min-w-[140px] max-md:h-[42px] max-md:text-[16px] max-md:leading-[20px] font-urbanist max-md:w-max"
            }
            onClick={() => {}}
          />
        </Link>
      </div>
    </section>
  );
};
export default FreeDemo;
