import React, { useEffect, useRef, useState } from "react";

import DeploymentCard from "../../../../components/Plateform/DeploymentCard";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";

const deploymentCards = [
  {
    title: "Customer, Employee, Partner",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
  },
  {
    title: "Employee",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ce010e0d4bb7715981d3a0a9dff49c24b74cf71263aa728db8e21452900f15a?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
  },
  {
    title: "partners",
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b03b7a0d606f4296c611afb5890c98a17fc6f0d60be4bc7523540aa81c428137?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ",
  },
];

function DeploymentSection({ name, setCurrentSection, sectionRefs }) {
  const ref = useRef(null);

  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setActiveTab(activeTab === 3 ? 1 : activeTab + 1);
    }, 2500);
  }, [activeTab]);

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
      className="flex overflow-hidden relative flex-col min-h-[954px] bg-[url('/images/platform/deployment_bg.svg')] bg-cover bg-center bg-no-repeat pt-[20px] md:pt-[54px] pb-[71px] md:px-[80px]"
      id="Deployment"
      ref={ref}
    >
      <div className="flex relative flex-col pb-1 w-full min-h-[886px] max-md:px-5 max-md:max-w-full">
        <header className="flex relative flex-col items-center self-center max-w-full text-center w-[664px] xl:mb-[52px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center">
              {/* <p className="gradient_subheading text-xl leading-snug font-urbanist bg-clip-text">
                Powered by Generative AI
              </p> */}
              <h1 className="gradient_heading mt-4 py-2 text-[30px] md:text-5xl font-sora font-semibold capitalize  ">
                US Privacy Laws
              </h1>
            </div>
            <p className=" text-[14px] leading-[20px] mt-5 md:text-[18px] font-urbanist md:leading-7 text-[#EAEAEA] max-md:max-w-full">
              LightBeam.ai ensures secure data across locations, maintaining
              control, compliance, and privacy for all data types, enabling a
              zero-trust data protection approach.
            </p>
            <div className="mt-8">
              <HoverBorderGradientDemo
                content="Know More"
                className="self-stretch  py-5 px-[41px] my-auto text-xl font-semibold leading-none  rounded-[50px]  "
              />
            </div>
          </div>
        </header>

        <div className="relative max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col-reverse">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative flex-col gap-8  grow capitalize font-sora text-primary_white max-md:mt-6 max-md:max-w-full">
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
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full h-[519.5px] overflow-hidden">
              <div className="flex h-full justify-between overflow-hidden relative flex-col grow w-full rounded-3xl  max-md:mt-6 max-md:max-w-full">
                <p className="text-[#fff] text-[14px] leading-[20px] md:text-[20px] mb-4 md:leading-9 font-urbanist font-normal max-md:pl-2">
                  Get a handle on sensitive information still lurking inside
                  your data repositories far beyond the necessary regulatory
                  requirements. Control the leakage risks and unpleasant
                  surprises.
                </p>
                <img
                  loading="lazy"
                  src="/images/solution/privacy/depl.png"
                  className="object-cover  max-md:max-w-full w-full min-h-full rounded-3xl"
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
