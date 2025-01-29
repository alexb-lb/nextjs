import React from "react";

interface UseCaseCardProps {
  title: string;
  description: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description }) => {
  return (
    <div className=" flex overflow-hidden flex-col lg:px-8 px-[17.31px] lg:py-10 py-[21.64px] bg-white rounded-2xl  lg:w-[285px] 2xl:w-[305px] w-[47%] ">
      <h3 className="lg:text-[32px] text-[18px] lg:leading-[38.4px] leading-[21.6px] text-[#151617] font-bold font-urbanist">
        {title}
      </h3>
      <p className="lg:mt-9 mt-[21.6px] lg:text-[20px] text-[12px] lg:leading-[24px] leading-[14.4px] text-[#151617] font-urbanist">
        {description}
      </p>
      <div className="flex gap-2 justify-center items-center self-start pb-2 lg:mt-9 mt-[19.48px] lg:text-[22px] text-[12px] lg:leading-[26px] leading-[14.4px] font-semibold text-[#545CF6]">
        <span className="self-stretch my-auto font-urbanist ">Learn More</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc60fe34a05c7c02bbf27a111ef4d2e3c6e4ef32daa6f08108245696f5cdb60?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[12px] md:w-[23px]"
        />
      </div>
    </div>
  );
};

export default UseCaseCard;
