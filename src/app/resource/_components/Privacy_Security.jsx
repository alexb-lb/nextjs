"use client";
import React from "react";
import BorderButton from "@/components/Animation/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Privacy_Security = ({ sectionData, imageData }) => {
  const route = useRouter();
  return (
    <div className="flex flex-col items-center px-4">
      <section
        className="flex items-center w-[343px] md:w-full lg:w-[1000px] xl:w-[1200px] h-[534px] md:h-[400px] lg:h-[354px] mb-14 rounded-2xl bg-center bg-cover bg-no-repeat relative"
        //  bg-[url('/images/career/bg1.png')]
        style={{
          backgroundImage: `url(${imageData?.images?.data?.[0]?.attributes?.url})`
        }}
      >
        <div className="w-full text-center flex flex-col items-center sm:mt-0 mt-10">
          <h1 className="lg:w-[400px] gradient_heading text-[28px] leading-[35px] lg:text-[40px] lg:leading-[50px] font-sora font-semibold mb-4 md:mt-4 lg:mt-0">
            {/* Privacy & Secuirty Innovators Circle */}
            {sectionData?.content?.title}
          </h1>
          <p className="text-white w-[300px] lg:w-[400px] mb-6 lg:mb-10 text-[16px] lg:text-[18px]">
            {/* Join PSI to strengthen privacy and security practices with shared
            experiences. */}
            {sectionData?.content?.description}
          </p>

          <BorderButton
            content={sectionData?.cta[0]?.text}
            className="py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center px-10 w-[183.75px]"
            onClick={() => route.push(sectionData?.cta[0]?.url || "/platform")}
          />
        </div>

        <Image
          height={400}
          width={350}
          // src="/images/resource/dhammer.png"
          src={imageData?.images?.data?.[1]?.attributes?.url}
          alt="prop triangle"
          className="hidden lg:flex absolute top-[10px] left-[10px] object-contain"
        />
        <Image
          height={300}
          width={200}
          // src="/images/resource/dlock.png"
          src={imageData?.images?.data?.[2]?.attributes?.url}
          alt="prop triangle"
          className="hidden lg:flex absolute bottom-0 right-0 object-contain"
        />
        <Image
          height={150}
          width={150}
          // src="/images/resource/mhammer.png"
          src={imageData?.images?.data?.[1]?.attributes?.url}
          alt="prop triangle"
          className="lg:hidden flex absolute top-[10px] left-[10px] object-contain"
        />
        <Image
          height={100}
          width={100}
          // src="/images/resource/mlock.png"
          src={imageData?.images?.data?.[2]?.attributes?.url}
          alt="prop triangle"
          className="lg:hidden flex absolute bottom-0 right-0 object-contain"
        />
      </section>
    </div>
  );
};

export default Privacy_Security;
