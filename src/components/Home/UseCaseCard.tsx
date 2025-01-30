
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface UseCaseCardProps {
  title: string;
  description: string;
  cta_text: string;
  cta_url: string;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description,
  cta_text,
  cta_url,
}) => {
  const router = useRouter();
  return (

    <div className={` flex overflow-hidden flex-col  lg:pb-10 pb-[21.64px] bg-white rounded-2xl border lg:w-[22%] 2xl:w-[305px]  w-[47%] ${cta_url ? 'cursor-pointer hover:shadow-md' : ""} `} onClick={()=>router.push(cta_url)}>
      <h3 className="lg:p-8 p-[17.31px] lg:py-4 bg-violet-50 lg:text-[32px] text-[18px] lg:leading-[38.4px] leading-[21.6px] text-[#151617] font-bold font-urbanist">
        {title}
      </h3>
      <p className="lg:mt-9 mt-[21.6px] lg:px-8 px-[17.31px] lg:text-[20px] text-[12px] lg:leading-[24px] leading-[14.4px] text-[#151617] font-urbanist">
        {description}
      </p>
      {/* <div className="flex gap-2 justify-center items-center self-start pb-2 lg:mt-9 mt-[19.48px] lg:text-[22px] text-[12px] lg:leading-[26px] leading-[14.4px] font-semibold text-[#545CF6]">
        <Link href={cta_url || "#"}>
          <span className="self-stretch my-auto font-urbanist ">
            {cta_text}
          </span>
        </Link>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdc60fe34a05c7c02bbf27a111ef4d2e3c6e4ef32daa6f08108245696f5cdb60?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[12px] md:w-[23px]"
        />
      </div> */}
      {/*  */}
    </div>
  );
};

export default UseCaseCard;
