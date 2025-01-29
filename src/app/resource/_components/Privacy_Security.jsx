"use client";
import React from "react";
import BorderButton from "@/components/Animation/Button";
import { useRouter } from "next/navigation";

const Privacy_Security = () => {
  const route = useRouter();
  return (
    <div className="flex flex-col items-center px-4">
      <section
        className="flex items-center w-[343px] md:w-full lg:w-[1000px] xl:w-[1200px] h-[534px] md:h-[400px] lg:h-[354px] mb-14 rounded-2xl 
    bg-[url('/images/career/Bg.png')] bg-center bg-cover bg-no-repeat relative"
      >
        <div className="w-full text-center flex flex-col items-center sm:mt-0 mt-10">
          <h1 className="lg:w-[400px] gradient_heading text-[28px] leading-[35px] lg:text-[40px] lg:leading-[50px] font-sora font-semibold mb-4 md:mt-4 lg:mt-0">
            Privacy & Secuirty Innovators Circle
          </h1>
          <p className="text-white w-[300px] lg:w-[400px] mb-6 lg:mb-10 text-[16px] lg:text-[18px]">
            Join PSI to strengthen privacy and security practices with shared
            experiences.
          </p>

          <BorderButton
            content={"Know More"}
            className="py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center px-10 w-[183.75px]"
            onClick={() => route.push("/platform")}
          />
        </div>

        <img
          src="/images/resource/dhammer.png"
          alt="prop triangle"
          className="hidden lg:flex absolute top-[10px] left-[10px] object-contain"
        />
        <img
          src="/images/resource/dlock.png"
          alt="prop triangle"
          className="hidden lg:flex absolute bottom-0 right-0 object-contain"
        />
        <img
          src="/images/resource/mhammer.png"
          alt="prop triangle"
          className="lg:hidden flex absolute top-[10px] left-[10px] object-contain"
        />
        <img
          src="/images/resource/mlock.png"
          alt="prop triangle"
          className="lg:hidden flex absolute bottom-0 right-0 object-contain"
        />
      </section>
    </div>
  );
};

export default Privacy_Security;
