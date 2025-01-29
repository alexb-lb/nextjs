import React from "react";
import FeatureSection from "./FeatureSection";
import WhatsNewSection from "./WhatsNewSection";
import Link from "next/link";

const PlatformOverview = () => {
  const featureSections = [
    {
      title: "Privacy Center",
      link: "privacy-center",
      items: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fb571f919a5b7190939450aa24d757e93e9641784eb8853123ee800c4fef491?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Records of Processing Activity",
          sublink: "/template/template1",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6f34b5bf86126b2127dcfa7027645e8c4bd2797497f192faec71cf0497ec557?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Data Subject Request",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7aca74c733bf9cbf182668db8049c44248378f7be29937dc4f987b44d68554bf?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "PIA",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93f2928075ca8eb1fae793d1e1c024721cfbc5a26b630b33098883da7efc6968?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Cookie Mgmt",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5fb571f919a5b7190939450aa24d757e93e9641784eb8853123ee800c4fef491?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Consent Mgmt",
          sublink: "/template/template2",
        },
      ],
    },
    {
      title: "Governance",
      link: "governance-center",
      items: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ff87c6767478ab9f6516877da345ec43f7f82da932b75564ba8445422084e97?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Labelling",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b42a556a1cd44124b0b09ee4ac316373de1c2335fc70a58c98baf7065885d127?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Access",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/93f2928075ca8eb1fae793d1e1c024721cfbc5a26b630b33098883da7efc6968?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "All Bias Materials",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6f34b5bf86126b2127dcfa7027645e8c4bd2797497f192faec71cf0497ec557?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "All Bias Detection",
          sublink: "/template/template2",
        },
      ],
    },
    {
      title: "Security",
      link: "security",
      items: [
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/966817432e14439bfb89a7cf4fa363f2e4a4a1d5135edae861cb53f522589baa?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Data Posture",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bd9e775b55899ed36b6ed8a0b6dde826216133b06da02f66bb3fbad2721f5ec2?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Data Identity",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a6d205569030164e2c68a9f9054968ce96c5b1c73263ac2310144d37b4a1b300?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Remediate Risk",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ff4166eb547484e459df26890ef1ec2c96c532a829782d1c67adcd1c24bb027?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Audit Control",
          sublink: "/template/template2",
        },
        {
          icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a984cf76b5005b66947bf5a499b79031a999ec0f562183f87c90014dd538efe?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
          text: "Coverage",
          sublink: "/template/template2",
        },
      ],
    },
  ];

  return (
    <main className="overflow-hidden px-7 pt-[30px] pb-10 bg-primary_white min-w-[1219px] rounded-b-lg">
      <div className="flex justify-between">
        <section className="w-full">
          <div className="flex flex-col items-start">
            <header className="flex gap-3 text-lg font-semibold tracking-normal leading-[22px] font-sora text-[#221F20] cursor-pointer">
              <Link href={"/platform"} className="flex gap-3">
                <h1 className="grow">Platform Overview</h1>
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

export default PlatformOverview;
