import React from "react";

function DeploymentCard({ title, icon, description, activeTab, index }) {
  return (
    <div
      className={`flex overflow-hidden flex-col px-6 py-10 max-md:py-[18px] max-md:px-[14pxs]  w-full rounded-3xl max-md:rounded-[12px]   max-md:max-w-full  ${
        activeTab === index ? "bg-[#363654]" : "bg-[#3636545c]"
      } `}
    >
      <div className="flex flex-wrap gap-2.5 justify-center items-center w-full text-2xl font-semibold leading-none max-md:max-w-full">
        <img
          loading="lazy"
          src={icon}
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px] max-md:w-[17px]"
          alt=""
        />
        <h2 className="flex-1 shrink self-stretch my-auto basis-0 max-md:text-[16px] max-md:max-w-full font-sora">
          {title}
        </h2>
      </div>
      <p className="mt-4 text-sm max-md:text-[12px] max-md:max-w-full">
        {description}
      </p>
    </div>
  );
}

export default DeploymentCard;
