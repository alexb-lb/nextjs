import React from "react";
import FeatureSection from "./FeatureSection";
import WhatsNewSection from "./WhatsNewSection";
import Link from "next/link";

const CompanyOverview = () => {
  const featureSections = [
    {
      title: "About us",
      link: "about",
      items: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fb571f919a5b7190939450aa24d757e93e9641784eb8853123ee800c4fef491?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Our Mission & Vision",
          link: "/company/about#out_mission",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6f34b5bf86126b2127dcfa7027645e8c4bd2797497f192faec71cf0497ec557?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Key Propositions",
          link: "/company/about#key_proposition",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7aca74c733bf9cbf182668db8049c44248378f7be29937dc4f987b44d68554bf?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Solutions",
          link: "/company/about#solution",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93f2928075ca8eb1fae793d1e1c024721cfbc5a26b630b33098883da7efc6968?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "PLatforms",
          link: "/company/about#platform",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fb571f919a5b7190939450aa24d757e93e9641784eb8853123ee800c4fef491?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Consent Mgmt",
          link: "/company/about",
        },
      ],
    },
    {
      title: "Partnership",
      link: "partnership",
      items: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ff87c6767478ab9f6516877da345ec43f7f82da932b75564ba8445422084e97?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Type of Partners",
          link: "/company/about#partnership",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b42a556a1cd44124b0b09ee4ac316373de1c2335fc70a58c98baf7065885d127?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Benefits",
          link: "/company/about#benefits",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93f2928075ca8eb1fae793d1e1c024721cfbc5a26b630b33098883da7efc6968?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Key Propositions",
          link: "/company/about#key_proposition",
        },
      ],
    },
    {
      title: "Careers",
      link: "career",
      items: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/966817432e14439bfb89a7cf4fa363f2e4a4a1d5135edae861cb53f522589baa?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Job Opportunities",
          link: "/company/about#careers",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd9e775b55899ed36b6ed8a0b6dde826216133b06da02f66bb3fbad2721f5ec2?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Life At LightBeam",
          link: "/company/about#life",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6d205569030164e2c68a9f9054968ce96c5b1c73263ac2310144d37b4a1b300?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Why Choose Us",
          link: "/company/about#why_us",
        },
      ],
    },
  ];

  return (
    <main className="overflow-hidden px-7 pt-[30px] pb-10 bg-primary_white min-w-[1219px] rounded-b-lg z-[10000000000]">
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
              Lightbeam is building a data security platform that delivers the
              <br />
              ease, agility, and robust protections that security teams demand.
            </p>
            <hr className="shrink-0 self-stretch mt-7 h-px border border-solid border-zinc-300 border-opacity-80 max-md:max-w-full" />
            <div className="mt-8 w-[600px]">
              <div className="grid grid-cols-3 max-md:flex-col">
                {featureSections.map((section, index) => (
                  <FeatureSection
                    key={index}
                    title={section.title}
                    items={section.items}
                    link={section.link}
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
