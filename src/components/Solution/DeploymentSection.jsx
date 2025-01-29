"use client";
import React, { useEffect, useState } from "react";

import DeploymentCard from "./DeploymentCard";
import { StickyScrollRevealDemo } from "../common/StickyScrollRevealDemo";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const deploymentCards = [
  {
    title: "AI Governance",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Ensure the ethical, transparent, and accountable development and use of artificial intelligence systems.",
  },
  {
    title: "EU AI Act",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Ensure the ethical, transparent, and accountable development and use of artificial intelligence systems.",
  },
  {
    title: "Biden's Executive Order on AI",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03b7a0d606f4296c611afb5890c98a17fc6f0d60be4bc7523540aa81c428137?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Ensure the ethical, transparent, and accountable development and use of artificial intelligence systems.",
  },
  {
    title: "CA ADMT",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03b7a0d606f4296c611afb5890c98a17fc6f0d60be4bc7523540aa81c428137?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Ensure the ethical, transparent, and accountable development and use of artificial intelligence systems.",
  },
];

function DeploymentSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setActiveTab(activeTab === 4 ? 1 : activeTab + 1);
    }, 2500);
  }, [activeTab]);
  const content = [
    {
      title: (
        <h2 className="title3 flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          AI Governance
        </h2>
      ),
      description: (
        <p className="mt-4 small_text font-sora max-md:max-w-full">
          Ensure the ethical, transparent, and accountable development and use
          of artificial intelligence systems.
        </p>
      ),
      content: (
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/ab6c/3434/3e858f75512cdc5faac96285bffeae8a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2ZJ9cKFP947RdlNE1MBiTrksW~REsiuThlzRPnsx8ik5A2O03bm~OA4wbNvtgyDk7ztJMQN4e5eXH6iTu~1KjIUTCdHpZiii4M6SwyJ8NotBdrz2zeQZCU3M4yPMb4PO6YPp4Jn2OdWsr8LsEBfStWMjsJT7hWWxvh0c0WtDXtUGaFoE~hsoGJyLyGWXJhB14TzQHzwsRU2stD-Cp3FMSXaNX9Qv9snwgV2Ds0~YWILWOaNA4k-73Jxr23x1CMYZAyPS8lMLZExho1UzEeWZLtL7~rKnk3OtV8rcyNcimpb9XQxaL7nZLsnn-aXBL54ufa6xJ1ZMvzu63CRVH35~w__"
          alt=""
          className="h-full w-full overflow-hidden"
        />
      ),
    },
    {
      title: (
        <h2 className="title3 flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          EU AI Act
        </h2>
      ),
      description: (
        <p className="mt-4 small_text font-sora max-md:max-w-full">
          Ensure the ethical, transparent, and accountable development and use
          of artificial intelligence systems.
        </p>
      ),
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          EU AI Act
        </div>
      ),
    },
    {
      title: (
        <h2 className="title3 flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          Biden&apos;s Executive Order on AI
        </h2>
      ),
      description: (
        <p className="mt-4 small_text font-sora max-md:max-w-full">
          Ensure the ethical, transparent, and accountable development and use
          of artificial intelligence systems.
        </p>
      ),
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Biden&apos;s Executive Order on AI
        </div>
      ),
    },
    {
      title: (
        <h2 className="title3 flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
          CA ADMT
        </h2>
      ),
      description: (
        <p className="mt-4 small_text font-sora max-md:max-w-full">
          Ensure the ethical, transparent, and accountable development and use
          of artificial intelligence systems.
        </p>
      ),
      content: (
        <img
          loading="lazy"
          src="https://s3-alpha-sig.figma.com/img/ab6c/3434/3e858f75512cdc5faac96285bffeae8a?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2ZJ9cKFP947RdlNE1MBiTrksW~REsiuThlzRPnsx8ik5A2O03bm~OA4wbNvtgyDk7ztJMQN4e5eXH6iTu~1KjIUTCdHpZiii4M6SwyJ8NotBdrz2zeQZCU3M4yPMb4PO6YPp4Jn2OdWsr8LsEBfStWMjsJT7hWWxvh0c0WtDXtUGaFoE~hsoGJyLyGWXJhB14TzQHzwsRU2stD-Cp3FMSXaNX9Qv9snwgV2Ds0~YWILWOaNA4k-73Jxr23x1CMYZAyPS8lMLZExho1UzEeWZLtL7~rKnk3OtV8rcyNcimpb9XQxaL7nZLsnn-aXBL54ufa6xJ1ZMvzu63CRVH35~w__"
          alt=""
          className="h-full w-full overflow-hidden"
        />
      ),
    },
  ];
  return (
    <section className="flex overflow-hidden relative w-full flex-col  bg-[url('/images/platform/deployment_bg.svg')] bg-cover bg-center bg-no-repeat pt-[53px] pb-[50px]  md:px-[80px]">
      <div className="flex relative flex-col  pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              <h1 className="gradient_heading font-sora md:mt-4 py-2 text-5xl font-semibold capitalize  max-md:text-[24px]">
                Governances
              </h1>
            </div>
            <p className="mt-5  text-[14px] leading-[16px] md:text-lg font-urbanist md:leading-7 text-[#EAEAEA] max-md:max-w-full">
              Manage data availability, usability, integrity, and security
              within an organization to ensure effective data management and
              compliance.
            </p>
            <div className="mt-8">
              <HoverBorderGradientDemo
                content="Know More"
                className="self-stretch  py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px]  "
                onClick={() => router.push("/solution/governance")}
              />
            </div>
          </div>
        </header>

        <div className="relative max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative gap-[8px]  flex-col grow capitalize text-primary_white max-md:mt-6 max-md:max-w-full">
                {deploymentCards.map((card, index) => (
                  <DeploymentCard
                    key={index}
                    {...card}
                    activeTab={activeTab}
                    index={index + 1}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow g:h-[676px]s w-full rounded-3xl bg-slate-950 max-md:mt-6 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4575e2b1a04b27d9e079833c75806baae0a252e3b740cd54dff8cd9d588c2555?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                  className="object-cover min-w-full min-h-full aspect-[1.26] max-md:max-w-full"
                  alt="Deployment visualization"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <div>
          <StickyScrollRevealDemo content={content} />
        </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

export default DeploymentSection;
