"use client";

import Image from "next/image";

const MicrosoftCopilot = ({ sectionData, imageData }) => {
  return (
    <div
      className="lg:pt-[68px]  lg:pb-[118px] md:px-[80px] px-4 py-[32px]"
      style={{
        backgroundImage: "url('/images/platform/accessBg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-semibold text-[#020103] font-sora text-[30px] md:text-[48px] leading-[44px] text-center lg:mb-[28px]">
        {/* LightBeam for Microsoft Copilot */}
        {sectionData[0]?.title}
      </h3>

      <div className="md:mt-[65px] mt-[24px] flex items-start justify-center flex-wrap gap-[20px]">
        {sectionData[1]?.cards?.map((item, ind) => (
          <div
            className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] lg:h-auto rounded-[20px] bg-white p-2 md:p-[12px] lg:pb-[20px]"
            id={item?.id}
            key={ind}
          >
            {imageData?.cards[ind]?.image?.data?.attributes?.url && (
              <Image
                src={imageData?.cards[ind]?.image?.data?.attributes?.url}
                alt=""
                width={500}
                height={240}
                className="h-[240px]"
                layout="responsive"
              />
            )}

            <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
              {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod. Lorem ipsum dolor sit amet. */}
              {item?.description}
            </p>
          </div>
        ))}
        {/* <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] rounded-[20px] bg-white p-2 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] rounded-[20px] bg-white p-2 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] rounded-[20px] bg-white p-2 md:p-[12px]">
          <img loading="lazy" src="/images/platform/access1.png" alt="" />
          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet.
          </p>
        </div> */}
      </div>
    </div>
  );
};
export default MicrosoftCopilot;
