import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Notification = ({ sectionData, imageData }) => {
  return (
    <div className="relative">
      <Image
        src="/images/platform/notification.png"
        alt=""
        width={500}
        height={169}
        className="w-full max-md:h-[169px]"
        layout="responsive"
      />
      <div className="absolute left-[15px] lg:left-[55px] mt-[-60px] md:mt-[-100px] lg:mt-[-250px]">
        <div
          className=" w-[96%]  md:w-[736px] md:min-h-[371px] 
          py-4 md:py-[50px] px-[46px] bg-[#0e0f3b] rounded-[16px]"
          style={{
            backgroundImage: "url('/images/platform/lineBg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h3
            className="font-sora text-[22px] md:text-[48px] md:leading-[60px] 
          gradient_heading font-semibold mb-3 md:mb-[24px]"
          >
            {/* Breach Notification */}
            {sectionData[0]?.content?.title}
          </h3>
          <p className="md:pb-[44px] font-urbanist text-[12px] md:text-[20px] md:leading-[28px] text-white">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing Lorem
            ipsum dolor sit amet, Lorem ipsum dolor sit */}
            {sectionData[0]?.content?.description}
          </p>
          <div className="w-full flex justify-start max-md:mt-[15px]">
            <Link href={sectionData[0]?.cta[0]?.url || "/template/template1"}>
              <HoverBorderGradientDemo
                className={
                  "max-md:py-[10px] max-md:px-[20px] max-md:text-[10px] leading-[10px] max-md:h-[28px]"
                }
                content={sectionData[0]?.cta[0]?.text}
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="md:mt-[360px] px-4 mt-[180px] lg:mt-[200px] flex items-center justify-center flex-wrap gap-[20px]">
        {/* <div className="min-w-[343.07px] md:w-[30%]  md:min-w-[413px]  rounded-[20px] bg-white p-3 md:p-[12px]">
          <img
            loading="lazy"
            src="/images/platform/access1.png"
            alt=""
            className="w-full"
          />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="min-w-[343.07px] md:w-[30%]  md:min-w-[413px]  rounded-[20px] bg-white p-3 md:p-[12px]">
          <img
            loading="lazy"
            src="/images/platform/access1.png"
            alt=""
            className="w-full"
          />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="min-w-[343.07px] md:w-[30%]  md:min-w-[413px]  rounded-[20px] bg-white p-3 md:p-[12px]">
          <img
            loading="lazy"
            src="/images/platform/access1.png"
            alt=""
            className="w-full"
          />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div> */}
        {sectionData[1]?.cards?.map((item, id) => (
          <div
            className="min-w-[343.07px] md:w-[30%]  md:min-w-[413px]  rounded-[20px] bg-white p-3 md:p-[12px]"
            key={id}
          >
            {imageData?.cards[id]?.image?.data?.attributes?.url && (
              <Image
                src={imageData?.cards[id]?.image?.data?.attributes?.url}
                alt=""
                width={500}
                height={300}
                className="w-full max-h-[323px]"
                layout="responsive"
              />
            )}

            <h2 className=" md:px-[27px] pt-6 font-sora text-[#444444] text-[18px] md:text-[24px] md:leading-[32px] font-semibold">
              {item?.title}
            </h2>
            <p className="md:px-[27px] pt-3 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod. Lorem ipsum dolor sit amet. */}
              {item?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notification;
