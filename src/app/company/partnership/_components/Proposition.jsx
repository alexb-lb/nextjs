"use client";


import Image from "next/image";
import { useState } from "react";

const data_section = [
  <div
    key="section1"
    className="bg-white mt-12 shadow-xl py-[32px] px-[20px] md:p-[32px] flex lg:flex-row flex-col gap-[24px] items-center rounded-[4px]"
  >
    <div className="lg:w-2/3 w-full">
      <h3 className="text-[30px] leading-[37.8px] font-sora font-semibold text-[#002233]">
        LightBeam Simplifies Unify Compliance
      </h3>
      <p className="font-[400] font-urbanist text-[16px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        LightBeam revolutionizes data security and privacy operations by
        offering organizations a unified platform that consolidates a wide range
        of tools.
        <br /> <br />
        This comprehensive solution streamlines workflows, enhances efficiency,
        and ensures robust protection for sensitive information, all from a
        single interface.
      </p>
      <div className="max-sm:hidden">
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] lg:items-center">
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv1.svg"
              width={46}
              height={46}
              alt=""
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-md:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv2.svg"
              width={46}
              height={46}
              alt=""
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
    <div className="lg:w-1/3 w-full rounded-[8px] overflow-hidden">
      <Image
        loading="lazy"
        src={"/images/company/kp1.svg"}
        alt=""
        height={300}
        width={200}
        className=" min-h-[329px] min-w-full object-cover"
      />
    </div>
  </div>,
  <div
    key="section2"
    className="bg-white mt-12 shadow-xl p-[32px] flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]"
  >
    <div className="lg:w-2/3 w-full">
      <h3 className="text-[30px] leading-[37.8px] font-sora font-semibold text-[#002233]">
        LightBeam Simplifies Consolidate Tools
      </h3>
      <p className="font-[400] font-urbanist text-[16px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        LightBeam revolutionizes data security and privacy operations by
        offering organizations a unified platform that consolidates a wide range
        of tools.
        <br /> <br />
        This comprehensive solution streamlines workflows, enhances efficiency,
        and ensures robust protection for sensitive information, all from a
        single interface.
      </p>
      <div className="max-sm:hidden">
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] lg:items-center">
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv1.svg"
              width={46}
              height={46}
              alt=""
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-md:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv2.svg"
              width={46}
              height={46}
              alt=""
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
    <div className="lg:w-1/3 w-full rounded-[8px] overflow-hidden">
      <Image
        loading="lazy"
        src={"/images/company/kp1.svg"}
        alt=""
        width={200}
        height={300}
        className=" min-h-[329px] min-w-full object-cover"
      />
    </div>
  </div>,
  <div
    key="section3"
    className="bg-white mt-12 shadow-xl p-[32px] flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]"
  >
    <div className="lg:w-2/3 w-full">
      <h3 className="text-[30px] leading-[37.8px] font-sora font-semibold text-[#002233]">
        LightBeam Simplifies Reduce Risk
      </h3>
      <p className="font-[400] font-urbanist text-[16px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        LightBeam revolutionizes data security and privacy operations by
        offering organizations a unified platform that consolidates a wide range
        of tools.
        <br /> <br />
        This comprehensive solution streamlines workflows, enhances efficiency,
        and ensures robust protection for sensitive information, all from a
        single interface.
      </p>
      <div className="max-sm:hidden">
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] lg:items-center">
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv1.svg"
              alt=""
              width={46}
              height={46}
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-md:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv2.svg"
              alt=""
              width={46}
              height={46}
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
    <div className="lg:w-1/3 w-full rounded-[8px] overflow-hidden">
      <Image
        loading="lazy"
        src={"/images/company/kp1.svg"}
        alt=""
        width={200}
        height={300}
        className=" min-h-[329px] min-w-full object-cover"
      />
    </div>
  </div>,
  <div
    key="section4"
    className="bg-white mt-12 shadow-xl p-[32px] flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]"
  >
    <div className="lg:w-2/3 w-full">
      <h3 className="text-[30px] leading-[37.8px] font-sora font-semibold text-[#002233]">
        LightBeam Simplifies Migrate & Modernize
      </h3>
      <p className="font-[400] font-urbanist text-[16px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        LightBeam revolutionizes data security and privacy operations by
        offering organizations a unified platform that consolidates a wide range
        of tools.
        <br /> <br />
        This comprehensive solution streamlines workflows, enhances efficiency,
        and ensures robust protection for sensitive information, all from a
        single interface.
      </p>
      <div className="max-sm:hidden">
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] lg:items-center">
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv1.svg"
              alt=""
              width={46}
              height={46}
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-md:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv2.svg"
              alt=""
              width={46}
              height={46}
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
    <div className="lg:w-1/3 w-full rounded-[8px] overflow-hidden">
      <Image
        loading="lazy"
        src={"/images/company/kp1.svg"}
        alt=""
        width={200}
        height={300}
        className=" min-h-[329px] min-w-full object-cover"
      />
    </div>
  </div>,
];

function DeploymentCard({
  key,
  title,
  icon,
  description,
  setActiveTab,
  activeTab,
  index,
}) {
  return (
    <div
      className={`flex max-md:min-w-[230px] md:overflow-hidden flex-col px-8 py-6  w-full md:rounded-3xl cursor-pointer max-md:px-5 max-md:max-w-full  ${
        activeTab === index
          ? "md:bg-[#F7F4FB] text-[#444444] md:text-[#8C83F6] font-bold max-md:border-b-[3px] max-md:border-[#545CF6]"
          : "text-[#44444499] "
      } `}
      onClick={() => setActiveTab(index)}
      key={key}
    >
      <div className=" w-full text-[16px] md:text-2xl font-semibold leading-none max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full font-sora">
          {title}
        </h2>
      </div>
    </div>
  );
}

const Proposition = ({ strapiData }) => {
  const [activeTab, setActiveTab] = useState(1);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setActiveTab(activeTab === 3 ? 1 : activeTab + 1);
  //   }, 2500);
  // }, [activeTab]);
  return (
    <section
      className="pt-[40px] lg:pt-[68px] pl-[20px] lg:pl-[97px] pr-[20px] lg:pr-[81px] "
      id="key_proposition"
    >
      <h1 className="font-sora mb-[16px] title2 text-[#020103] font-semibold text-center">
        {strapiData.sections[5]?.title || "Key Proposition"}
      </h1>
      <p className="text-center font-urbanist para3A md:text-2xl text-[#4D4D4D] mb-[32px] max-w-[844px] mx-auto">
        {strapiData.sections[6]?.content?.description ||
          "LightBeam.ai ensures secure data across locations, maintaining control, compliance, and privacy for all data types, enabling a zero-trust data protection approach."}
      </p>

      <div className="relative max-md:mt-10 max-md:max-w-full mt-10">
        <div className="flex items-center gap-5 max-md:flex-col">
          <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative md:flex-col gap-4  grow capitalize font-sora text-primary_white max-md:mt-6 max-md:max-w-full max-md:overflow-hidden max-md:overflow-x-auto max-md:border-b max-md:border-[#A877FF] max-md:scrollbar-none">
              {strapiData.sections[6].tabs.map((card, index) => (
                <DeploymentCard
                  key={index}
                  title={card?.title}
                  setActiveTab={setActiveTab}
                  activeTab={activeTab}
                  index={index + 1}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-8/12 max-md:ml-0 max-md:w-full  overflow-hidden">
            {/* <div className="flex overflow-hidden relative flex-col grow w-full rounded-3xl  max-md:mt-6 max-md:max-w-full">
              <Image
                height={378}
                width={865}
                loading="lazy"
                src="/images/platform/posture_tab.svg"
                className="object-contain  max-md:max-w-full w-full"
                alt="Deployment visualization"
              />
            </div> */}
            {data_section
              ?.filter((item, idx) => idx + 1 === activeTab)
              ?.map((item, id) => (
                <div key={id}>{item}</div>
              ))}
          </div>
        </div>
      </div>

      <div className="max-md:mt-10 max-md:max-w-full mt-10">
        {/* <TabsDemo /> */}
      </div>
    </section>
  );
};
export default Proposition;
