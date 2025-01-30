import Link from "next/link";
import React from "react";
import Image from "next/image";

const AccessCard = ({ sectionData }) => {
  return (
    <div className="mx-auto w-auto xl:w-[100%] 2xl:w-[1276px] h-auto xl:h-auto rounded-[16px] bg-white md:pl-[44px] p-4 md:pr-[19px] md:pt-[20px] max-md:flex-col-reverse flex max-md:gap-0 gap-[42px] mb-[40px]">
      <section className="w-full xl:w-[50%]">
        <h2 className="font-sora text-[#020103] text-[28px] leading-[35px] md:text-[36px] md:leading-[45px] font-semibold  max-md:mt-[18px] mb-[16px] md:mb-8">
          {/* LightBeam Access Governance Webinar */}
          {sectionData?.title}
        </h2>
        <p className="text-[#444444] text-[14px] leading-[23px] xl:text-[20px] xl:leading-[28px] font-urbanist mb-[20px] md:mb-8">
          {/* Join us for an exciting discussion about our newest release, LightBeam
          Access Governance, a solution which extends our Data Security Posture
          Management platform to eliminate risks from data oversharing and
          unauthorized access. */}
          {sectionData?.description}
        </p>
        <div className="flex flex-wrap gap-[18px]">
          <Link href={sectionData?.cta_url || "#"}>
            <button className="px-[16px] py-[6px]  border border-[#545CF6] rounded-[27px] text-[#545CF6] font-bold text-[14px] leading-[23px] md:text-[18px] md:leading-[28px] font-urbanist">
              {/* Dropbox */}
              {sectionData?.cta_text}
            </button>
          </Link>
        </div>
      </section>
      <section className="w-full xl:w-[50%]">
        {sectionData?.image?.data?.attributes?.url && (
          <Image
            src={sectionData?.image?.data?.attributes?.url}
            alt=""
            className="max-md:w-full max-md:h-[270px] min-h-full max-md:rounded-[16px] lg:max-h-[610px]"
            width={500}
            height={500}
            layout="responsive"
          />
        )}
      </section>
    </div>
  );
};

export default AccessCard;
