"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const KeyBenefits = ({ sectionData, imageData }) => {
  const router = useRouter();
  return (
    <div
      className="lg:pt-[68px]  lg:pb-[118px] lg:px-[80px] px-4 py-[32px]"
      style={{
        backgroundImage: "url('/images/platform/accessBg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h3 className="font-semibold text-[#020103] font-sora text-[30px] md:text-[48px] leading-[44px] text-center md:mb-[28px]">
        {/* Key Benefits */}
        {sectionData[0]?.title}
      </h3>

      <div className="md:mt-[65px] mt-[24px] flex items-center justify-center flex-wrap gap-[20px]">
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] lg:h-auto rounded-[20px] bg-white p-2 md:p-[12px]">
          {imageData?.cards[0]?.image?.data?.attributes?.url && (
            <Image
              src={imageData?.cards[0]?.image?.data?.attributes?.url}
              alt=""
              width={500}
              height={300}
              layout="responsive"
            />
          )}

          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet. */}
            {sectionData[1]?.cards[0]?.description}
          </p>
        </div>
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] lg:h-auto  rounded-[20px] bg-white p-2 md:p-[12px]">
          {imageData?.cards[1]?.image?.data?.attributes?.url && (
            <Image
              src={imageData?.cards[1]?.image?.data?.attributes?.url}
              alt=""
              width={500}
              height={300}
              layout="responsive"
            />
          )}

          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet. */}
            {sectionData[1]?.cards[1]?.description}
          </p>
        </div>
        <div className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] lg:h-auto  rounded-[20px] bg-white p-2 md:p-[12px]">
          {imageData?.cards[2]?.image?.data?.attributes?.url && (
            <Image
              src={imageData?.cards[2]?.image?.data?.attributes?.url}
              alt=""
              width={500}
              height={300}
              layout="responsive"
            />
          )}

          <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod. Lorem ipsum dolor sit amet. */}
            {sectionData[1]?.cards[2]?.description}
          </p>
        </div>
        {/* {sectionData[1]?.cards?.map((item, ind) => (
          <div
            className="w-[343.07px] h-[400.31px] md:w-[388px] md:h-[482px] rounded-[20px] bg-white p-2 md:p-[12px]"
            key={ind}
          >
            <img
              loading="lazy"
              src={
                (imageData?.cards &&
                  imageData?.cards[ind]?.image?.data?.attributes?.url) ||
                [imageData?.card[0]?.image?.data?.attributes?.url ||"/images/platform/access1.png"]
              }
              alt=""
              className="h-[250px] w-full rounded-xl"
            />
            <p className="md:px-[27px] pt-6 font-urbanist text-[#444444] text-[16px] md:text-[20px] md:leading-[27px]">
             
              {item?.description}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default KeyBenefits;
