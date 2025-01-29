"use client";
import React from "react";
import BorderButton from "../Animation/Button";
import { useRouter } from "next/navigation";

const Section = () => {
  const router = useRouter();

  return (
    <section className="bg-[#F5F8FF] w-fit mx-[16px] mb-14 lg:mx-0 sm:mx-auto sm:w-full rounded-2xl xl:pr-[98px] pr-[11px] xl:pt-[58px] pt-[45px] xl:pl-[58px] pl-[15px] xl:pb-[64px] pb-[168px] flex xl:flex-row flex-col justify-between items-center bg-[url('/images/career/Bg.png')] bg-center bg-cover bg-no-repeat relative max-md:min-h-[534px]">
      <div className="w-full text-center flex flex-col items-center md:px-3 sm:mt-10 mt-28">
        <h1 className="gradient_heading text-[28px] leading-[35px] md:text-[40px] md:leading-[50px] font-sora font-semibold mb-6 mt-[30px] sm:mt-0">
          Want to apply but don&apos;t see an <br /> opportunity listed?
        </h1>
        <p className="text-[#D9D9D9] mb-6 text-[16px] md:text-[18px] leading-6 font-poppins para3B">
          Apply here to grow your future
        </p>
        <BorderButton
          content={"Get In Touch"}
          className="py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center px-10 w-[183.75px]"
          onClick={() => router.push("/contact")}
        />
      </div>

      <img
        src="/images/career/prop2.png"
        alt="prop triangle"
        className="absolute top-0 left-0 object-contain max-w-[160px] md:max-w-[200px]"
      />
      <img
        src="/images/career/prop3.png"
        alt="prop triangle"
        className="absolute bottom-0 right-0 object-contain max-w-[160px] md:max-w-[200px]"
      />
    </section>
  );
};

export default Section;
