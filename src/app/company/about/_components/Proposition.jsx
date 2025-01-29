"use client";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { TabsDemo } from "@/components/common/TabsDemo";

import Image from "next/image";
import { useEffect, useState } from "react";

// function DeploymentCard({ title, icon, description, activeTab, index }) {
//   return (
//     <div
//       className={`flex overflow-hidden flex-col px-8 py-6  w-full rounded-3xl  max-md:px-5 max-md:max-w-full  ${
//         activeTab === index ? "bg-[#F7F4FB]  text-[#8C83F6]" : " text-black"
//       } `}
//     >
//       <div className=" w-full text-2xl font-semibold leading-none max-md:max-w-full">
//         <h2 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full font-sora">
//           {title}
//         </h2>
//       </div>
//     </div>
//   );
// }

const contentDetails = [
  { title: "Unify Compliance", value: "unify_compliance" },
  { title: "Consolidate Tools", value: "consolidate_tools" },
  { title: "Reduce Risk", value: "reduce_risk" },
  { title: "Migrate & Modernize", value: "migrate_modernize" },
];

const ContentSection = ({ ind }) => (
  <div className="bg-white mt-12 max-md:mt-16 shadow-xl p-[32px] max-md:p-6 max-md:pt-8 flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]">
    <div className="lg:w-[58%] w-full">
      <h3 className="text-[28px] leading-[35px] font-sora font-semibold text-[#002233]">
        LightBeam Simplifies Data Security Operations
      </h3>
      <p className="font-[400] font-urbanist text-[16px] max-md:text-[14px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        LightBeam revolutionizes data security and privacy operations by
        offering organizations a unified platform that consolidates a wide range
        of tools.
        <br />
        <br />
        This comprehensive solution streamlines workflows, enhances efficiency,
        and ensures robust protection for sensitive information, all from a
        single interface.
      </p>
      <div>
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] max-md:gap-2 lg:items-center">
          <div className="flex gap-[10px] items-center">
            <img
              loading="lazy"
              src="/images/solution/privacy/adv1.svg"
              alt=""
              className="max-md:h-[32px]"
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-md:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <img
              loading="lazy"
              src="/images/solution/privacy/adv2.svg"
              alt=""
              className="max-md:h-[32px]"
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Faster Launch,
              <br className="max-md:hidden" />
              Zero Risk
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-[40%] w-full rounded-[8px] overflow-hidden">
      <img
        loading="lazy"
        src={"/images/platform/post" + ind + ".svg"}
        alt=""
        className=" md:min-h-[329px] h-[350px] max-md:h-[184px] min-w-full object-cover"
      />
    </div>
  </div>
);

const Proposition = () => {
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
    <section
      className="pt-[40px] lg:pt-[68px] pl-[20px] lg:pl-[97px] pr-[20px] lg:pr-[81px] "
      id="key_proposition"
    >
      <h1 className="font-sora mb-[16px] title2 text-[#020103] font-semibold text-center">
        Key Proposition
      </h1>
      <p className="text-center font-urbanist para3A text-[#4D4D4D] mb-[32px] max-w-[844px] mx-auto">
        LightBeam.ai ensures secure data across locations, maintaining control,
        compliance, and privacy for all data types, enabling a zero-trust data
        protection approach.
      </p>

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

      <div className="max-md:mt-10 max-md:max-w-full mt-10">
        <TabsDemo
          tabs={DataPosture}
          activeTab={""}
          tabClass={"bg-transparent w-[80%] max-md:w-full"}
        />
      </div>
    </section>
  );
};
export default Proposition;
