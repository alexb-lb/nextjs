/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import React from "react";

const Gallery = ({strapiData}) => {
  return (
    <div
      className="  bg-[#F5F8FF] sm:pt-8 pt-3 pb-2 md:pb-[111px]"
      style={{
        backgroundImage:
          'url("https://cdn.builder.io/api/v1/image/assets/TEMP/8c429d9b6bce0b23291a73dabba5ebc0cd54e762c7f5eb27fa71fe6dd70d9051?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887")',
        backgroundSize: "cover",

        backgroundPosition: "center",
      }}
      id="life"
    >
      <div className="flex justify-center items-center">
        <p className="text-[30px] leading-[37px] max-md:text-center  sm:text-[48px] text-black sm:mb-10 mb-3 font-semibold font-sora  sm:leading-[60px]">
          {strapiData.sections[4].title || "A Day In A Life at LightBeam.ai"}
        </p>
      </div>
      <div className="flex justify-center items-center w-[100%]">
        <Image src="/images/career/gallery.png" height={400} width={800} className="hidden md:block size-full"  />
      </div>

      <div className="flex justify-center items-center w-[100%]">
        {/* <img src="/images/career/gallery1.png" className=" sm:hidden block" /> */}
        <Image
          loading="lazy"
          src="/images/contact/imageCollab.svg"
          alt="images"
          height={400}
          width={400}
          className="size-full  z-50 md:hidden"
        />
      </div>
    </div>
  );
};

export default Gallery;
