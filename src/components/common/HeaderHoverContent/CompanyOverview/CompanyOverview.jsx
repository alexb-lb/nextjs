import React from "react";
import FeatureSection from "./FeatureSection";
import WhatsNewSection from "./WhatsNewSection";
import Link from "next/link";

const CompanyOverview = ({ navChild, whatsNew }) => {
  return (
    <main className=" px-7 pt-[30px] pb-10 bg-primary_white max-xl:w-[1000px] xl:min-w-[1219px]  rounded-b-lg z-[10000000000]">
      <div className="flex justify-between">
        <section className="w-full">
          <div className="flex flex-col items-start">
            <header className="flex gap-3 text-lg font-semibold tracking-normal leading-[22px] font-sora text-[#221F20] cursor-pointer">
              <Link href={"/company"} className="flex gap-3">
                <h1 className="grow">Company Overview</h1>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c66db5a282615cff644cec3f5feda99ecb3e1fd7f4d1ea3b96a36285a8bc2092?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                  alt=""
                  className="object-contain shrink-0 my-auto w-4 aspect-[1.14]"
                />
              </Link>
            </header>
            <p className="mt-3 text-sm font-medium font-urbanist leading-[22px] text-[#808080]">
              LightBeam.ai converges data security, privacy, and governance,
              enabling businesses to secure their data,
              <br />
              remediate access risks, and comply with regulations with a single
              sensitive data platform
            </p>
            <hr className="shrink-0 self-stretch mt-7 h-px border border-solid border-zinc-300 border-opacity-80 max-md:max-w-full" />
            <div className="mt-8 w-[600px]">
              <div className="grid grid-cols-3 max-md:flex-col">
                {navChild?.map((section, index) => (
                  <FeatureSection
                    key={index}
                    title={section?.name}
                    items={section?.children}
                    link={section?.custom_path}
                    whatsNew={whatsNew}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <div>
          <WhatsNewSection />
        </div>
      </div>
    </main>
  );
};

export default CompanyOverview;
