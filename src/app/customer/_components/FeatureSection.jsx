import React from "react";
import FeatureCard from "./FeatureCard";

function FeatureSection({ sectionData, imagesData }) {
  return (
    <section className="overflow-hidden relative lg:px-px px-[16px] lg:mt-9 mt-[44px] lg:ml-0 max-md:max-w-full ">
      <div className="flex md:gap-5 flex-wrap max-lg:justify-between lg:w-[1280px] mx-auto max-md:justify-center max-md:gap-[7px]">
        {sectionData?.cards?.map((feature, index) => (
          <FeatureCard key={index} feature={feature} imagesData={imagesData?.cards?.[index]?.image?.data?.attributes?.url} />
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
