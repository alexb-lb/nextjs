"use client";
import React from "react";
import BorderButton from "../../../../components/Animation/Button";
import { useRouter } from "next/navigation";

const BookDemoCard = ({ strapiData }) => {
  const router = useRouter();
  return (
    <section className="bg-[#F5F8FF] w-fit  mb-14 lg:mx-0 sm:mx-auto sm:w-full rounded-2xl   xl:py-[63px] pt-[45px]   max-md:pb-[168px] flex xl:flex-row flex-col justify-between items-center bg-[url('/images/career/bg1.png')] bg-center bg-cover bg-no-repeat relative max-md:min-h-[534px]">
      <div className="w-full text-center flex flex-col items-center  sm:mt-0 mt-28">
        <h1 className="gradient_heading text-[28px] leading-[35px] md:text-[40px] md:leading-[50px] font-sora font-semibold mb-6 mt-[30px] sm:mt-0 max-w-[1040px]">
          {strapiData[2]?.title}
        </h1>

        <BorderButton
          content={strapiData[2]?.button[0]?.text || "Book a demo"}
          className="py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center px-10 w-[183.75px]"
          onClick={() =>
            router.push(
              (strapiData[2]?.cta && strapiData[2]?.cta[0]?.url) || "/contact"
            )
          }
        />
      </div>

      <img
        src="/images/career/prop2.png"
        alt="prop triangle"
        className="absolute top-[10px] left-[10px] object-contain max-w-[160px] md:max-w-[120px]"
      />
      <img
        src="/images/career/prop3.png"
        alt="prop triangle"
        className="absolute bottom-0 right-0 object-contain max-w-[160px] md:max-w-[150px]"
      />
    </section>
  );
};

export default BookDemoCard;
