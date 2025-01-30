"use client";
import React from "react";
import BorderButton from "../Animation/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Section = ({ strapiData, imagesData }) => {
  const router = useRouter();
  // console.log(imagesData, "data 123213");

  return (
    <section
      className="bg-[#F5F8FF] w-fit mx-[16px] mb-14 lg:mx-0 sm:mx-auto sm:w-full rounded-2xl xl:pr-[98px] pr-[11px] xl:pt-[58px] pt-[45px] xl:pl-[58px] pl-[15px] xl:pb-[64px] pb-[168px] flex xl:flex-row flex-col justify-between items-center  bg-center bg-cover bg-no-repeat relative max-md:min-h-[534px]"
      style={{
        backgroundImage: `url(${imagesData?.sections?.[3]?.images?.data?.[0]?.attributes?.url})`,
      }}
    >
      {/* bg-[url('/images/career/bg1.png')] */}
      <div className="w-full text-center flex flex-col items-center md:px-3 sm:mt-10 mt-28">
        <h1 className="gradient_heading text-[28px] leading-[35px] md:text-[40px] md:leading-[50px] px-2 md:px-14 font-sora font-semibold mb-6 mt-[30px] sm:mt-0">
          {strapiData?.sections?.[3].title ||
            "Want to apply but don't see an opportunity listed?"}
        </h1>
        <p className="text-[#D9D9D9] mb-6 text-[16px] md:text-[18px] leading-6 font-poppins para3B">
          {strapiData?.sections?.[3]?.content?.description ||
            "Apply here to grow your future"}
        </p>
        <BorderButton
          content={strapiData?.sections?.[3].cta?.[0]?.text || "Get In Touch"}
          className="py-5 rounded-[52px] text-white bg-black font-semibold leading-none text-center px-10 w-[183.75px]"
          onClick={() => router.push("/contact")}
        />
      </div>

      {imagesData?.sections?.[3]?.images?.data?.[1]?.attributes?.url && (
        <Image
          // src="/images/career/prop2.png"
          src={imagesData?.sections?.[3]?.images?.data?.[1]?.attributes?.url}
          alt="prop triangle"
          height={200}
          width={200}
          className="absolute top-0 left-0 object-contain max-w-[160px] md:max-w-[200px]"
        />
      )}

      {imagesData?.sections?.[3]?.images?.data?.[2]?.attributes?.url && (
        <Image
          // src="/images/career/prop3.png"
          src={imagesData?.sections?.[3]?.images?.data?.[2]?.attributes?.url}
          alt="prop triangle"
          height={200}
          width={200}
          className="absolute bottom-0 right-0 object-contain max-w-[160px] md:max-w-[200px]"
        />
      )}
    </section>
  );
};

export default Section;
