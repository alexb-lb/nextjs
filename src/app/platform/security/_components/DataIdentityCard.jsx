import React from "react";
function DeploymentCard({ title, icon, description, activeTab, index }) {
  return (
    <div
      className={`flex overflow-hidden flex-col px-6 max-md:px-[14px] py-[36px] max-md:py-[18px] w-full rounded-3xl  max-md:max-w-full  ${
        activeTab === index ? "bg-[#464669]" : "bg-[#F8F8F91A]"
      } `}
    >
      <div className="flex flex-wrap gap-2.5 justify-center items-center w-full text-[16px] text-2xl font-semibold leading-none max-md:max-w-full">
        <img
          src={icon}
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px] max-md:w-[18px]"
          layout="responsive"
          loading="lazy"
        />
        <h2 className="flex-1 shrink self-stretch my-auto basis-0 max-md:text-[16px] text-[26px] max-md:max-w-full font-sora">
          {title}
        </h2>
      </div>
      <p className="mt-4 text-[12px] md:text-sm max-md:max-w-full">
        {description}
      </p>
    </div>
  );
}

export default DeploymentCard;
