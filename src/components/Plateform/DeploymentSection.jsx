/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useRef, useState } from "react";
import DeploymentCard from "./DeploymentCard";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import Image from "next/image";

const deploymentCards = [
  {
    title: "Your Cloud",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "LightBeam connects to data sources using APIs (without any need to install/manage agents). Three step process - LEARN -> ENFORCE -> AUTOMATE.",
  },
  {
    title: "Your Data Center",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "LightBeam learns from customers' data and understands what's important to each specific customer (since every customer is unique and may have a",
  },
  {
    title: "Light SaaS",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03b7a0d606f4296c611afb5890c98a17fc6f0d60be4bc7523540aa81c428137?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Then, LightBeam scans everything making sure anything important to that customer is not getting exposed. And if it is getting exposed, LightBeam",
  },
];

function DeploymentSection({ name, setCurrentSection, sectionRefs }) {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab === 3 ? 1 : prevTab + 1));
    }, 2500);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Add each section ref to the sectionRefs array
    sectionRefs.current.push(ref);
  }, [ref, sectionRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(name);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [name, setCurrentSection, ref]);

  return (
    <section
      className="flex overflow-hidden relative flex-col min-h-[954px] bg-[url('/images/platform/deployment_bg.svg')] bg-cover bg-center bg-no-repeat pt-[54px] pb-[71px] md:px-[80px]"
      id="Deployment"
      ref={ref}
    >
      <div className="flex relative flex-col pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full mb-10">
            <div className="flex flex-col items-center">
              <p className="gradient_subheading text-xl leading-snug font-urbanist bg-clip-text">
                Powered by Generative AI
              </p>
              <h1 className="gradient_heading mt-4 py-2 text-5xl font-sora font-semibold capitalize  max-md:text-4xl">
                Deployment
              </h1>
            </div>
            <p className="mt-5 text-[18px] font-urbanist leading-7 text-[#EAEAEA] max-md:max-w-full">
              LightBeam can be deployed in customers&apos; own cloud
              environments thereby ensuring that no data leaves their
              environments.
            </p>
            {/* <div className="my-8">
              <HoverBorderGradientDemo
                content="Know More"
                className="self-stretch py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px]  "
              />
            </div> */}
          </div>
        </header>

        <div className="relative max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-lg:flex-col-reverse">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-lg:w-full">
              <div className="flex relative flex-col gap-8 max-md:gap-4  grow capitalize font-sora text-primary_white max-md:mt-6 max-md:max-w-full">
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
            <div className="flex flex-col lg:ml-5 w-6/12 max-md:ml-0 max-lg:w-full overflow-hidden">
              <Image
                height={520}
                width={631}
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4575e2b1a04b27d9e079833c75806baae0a252e3b740cd54dff8cd9d588c2555?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
                className=" rounded-[20px] h-full w-full"
                alt="Deployment visualization"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeploymentSection;
