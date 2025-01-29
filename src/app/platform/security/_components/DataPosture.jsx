"use client";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { TabsDemo } from "@/components/common/TabsDemo";

import Image from "next/image";
import { useEffect, useState } from "react";

const contentDetails = [
  { title: "Discover", value: "discover" },
  { title: "Classify", value: "classify" },
  { title: "Label", value: "label" },
];

const sharedContentImage =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/683a1507555190d8f6e03d9dd8cd7715ea0740831d2e675d658513697e581471?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";

function DeploymentCard({
  title,
  icon,
  description,
  activeTab,
  index,
  setActiveTab,
}) {
  return (
    <div
      className={`flex overflow-hidden flex-col px-8 py-6  w-full rounded-3xl  max-md:px-5 max-md:max-w-full cursor-pointer  ${
        activeTab === index ? "bg-[#F7F4FB]  text-[#8C83F6]" : " text-black"
      } `}
      onClick={() => setActiveTab(index)}
    >
      <div className=" w-full text-2xl font-semibold leading-none max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full font-sora">
          {title}
        </h2>
      </div>
    </div>
  );
}

const ContentSection = ({ ind }) => (
  <div className="bg-white mt-12 shadow-xl p-[32px] flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]">
    <div className="lg:w-2/3 w-full">
      <h3 className="text-[30px] leading-[37.8px] font-sora font-semibold text-[#002233]">
        What can you Discover with Spectra?
      </h3>
      <p className="font-[400] font-urbanist text-[16px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        Whether sensitive information is hiding in images, text, logs, emails,
        tables, HTML, or JSON, nothing skips the eyes of the detective!
      </p>
      <div>
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] lg:items-center">
          <div className="flex gap-[10px] items-center">
            <img
              loading="lazy"
              src="/images/solution/privacy/adv1.svg"
              alt=""
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-lg:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              loading="lazy"
              src="/images/solution/privacy/adv2.svg"
              alt=""
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Faster Launch,
              <br className="max-lg:hidden" />
              Zero Risk
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 w-full rounded-[8px] overflow-hidden">
      <img
        loading="lazy"
        src={"/images/platform/post" + ind + ".svg"}
        alt=""
        className=" min-h-[329px] min-w-full object-fit"
      />
    </div>
  </div>
);

const DataPosture = () => {
  const [activeTab, setActiveTab] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setActiveTab(activeTab === 3 ? 1 : activeTab + 1);
  //   }, 2500);
  // }, [activeTab]);

  const DataPosture = contentDetails.map((item, ind) => ({
    title: item.title,
    value: item.value,
    content: <ContentSection content={item} ind={ind + 1} />,
  }));

  return (
    <section className="flex overflow-hidden flex-col items-center px-20 lg:pt-24  lg:pb-24 w-full bg-[#F5F8FF] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h1 className="font-sora mb-[16px] title2 text-[#020103] font-semibold text-center">
        Data Posture
      </h1>
      <p className="text-center font-urbanist para3A text-[#4D4D4D] mb-[32px] max-w-[844px] mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor
        sit amet,{" "}
      </p>
      <HoverBorderGradientDemo content="Know More" className="" />

      {/* <div className="relative max-md:mt-10 max-md:max-w-full mt-10">
        <div className="flex items-center gap-5 max-md:flex-col">
          <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col gap-8  grow capitalize font-sora text-primary_white max-md:mt-6 max-md:max-w-full">
              {["Discover", "Classify", "Label"].map((card, index) => (
                <DeploymentCard
                  key={index}
                  title={card}
                  activeTab={activeTab}
                  index={index + 1}
                  setActiveTab={setActiveTab}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-8/12 max-md:ml-0 max-md:w-full  overflow-hidden">
            <div className="flex overflow-hidden relative flex-col grow w-full rounded-3xl  max-md:mt-6 max-md:max-w-full">
              <Image
                height={378}
                width={865}
                loading="lazy"
                src="/images/platform/posture_tab.svg"
                className="object-contain  max-md:max-w-full w-full"
                alt="Deployment visualization"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-md:mt-10 max-md:max-w-full w-full mt-10">
        <TabsDemo
          tabs={DataPosture}
          activeTab={""}
          tabClass={"bg-transparent w-[80%] mb-6"}
        />
      </div>
    </section>
  );
};
export default DataPosture;
