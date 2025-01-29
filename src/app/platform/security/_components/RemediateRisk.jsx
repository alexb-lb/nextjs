"use client";
import { TabsDemo } from "@/components/common/TabsDemo";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const imageSrc =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d5d9a7dd3ee7ebeee44fdef9f4858c845f084ddf617b05d97ad57a52796132ac?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";
const sharedContentImage =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/683a1507555190d8f6e03d9dd8cd7715ea0740831d2e675d658513697e581471?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";

const contentDetails = [
  { title: "Redaction", value: "redaction" },
  { title: "Deletion", value: "deletion" },
  { title: "Archival", value: "archival" },
];

const featureList = [
  {
    title: "Discover",
    description:
      "Whether sensitive information is hiding in images, text, logs, emails, tables, HTML, or JSON, nothing skips the eyes of the detective!",
  },
  {
    title: "Classify",
    description:
      "LightBeam can classify documents automatically based on their content. With pre-trained models and automated processes, it can detect and categorize documents quickly.",
  },
  {
    title: "Label",
    description:
      "Spectra connects to applications such as log repositories, ticketing systems, project management tools, databases, emails, messaging platforms, and file repositories to discover and label sensitive information.",
  },
];

const Feature = ({ feature, index }) => (
  <div
    className={`${
      index > 0 ? "mt-5" : ""
    } max-lg:max-w-full max-md:text-[14px] max-md:leading-[23px] text-[#444444]`}
  >
    <span className="font-bold font-urbanist ">{feature.title}: </span>
    <span className="font-normal font-urbanist">{feature.description}</span>
  </div>
);

const ContentSection = ({ content }) => (
  <div className="w-full relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-white ">
    <div className="overflow-hidden lg:py-12 max-md:mt-6 lg:pl-12 px-6 max-lg:p-10 max-w-full bg-white rounded-xl shadow-[0px_12px_80px_rgba(50,50,50,0.08)] w-full mt-14  mx-auto">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-lg:w-full">
          <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-0 max-md:max-w-full">
            <h3 className="text-4xl max-md:text-[28px] max-md:leading-[35px] text-black font-sora">
              {content.title}
            </h3>
            <div className="flex flex-col mt-6 max-w-full text-lg leading-7 text-neutral-700  mb-10 max-md:mb-6">
              {featureList.map((feature, index) => (
                <Feature feature={feature} index={index} key={index} />
              ))}
            </div>
            <div className="w-[183px]">
              <BorderButton
                content={"Learn More"}
                className={
                  "bg-white  font-semibold text-[#232323] text-[20px] leading-[20px] py-[20px] px-[40px] font-urbanist"
                }
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:ml-5 w-6/12 max-md:ml-0 max-lg:w-full">
          <Image
            loading="lazy"
            src={sharedContentImage}
            alt=""
            className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)]  max-md:max-w-full"
            width={400}
            height={407}
          />
        </div>
      </div>
    </div>
  </div>
);

const RemediateRisk = ({ name, setCurrentSection, sectionRefs }) => {
  const securityTabs = contentDetails.map((item) => ({
    title: item.title,
    value: item.value,
    content: <ContentSection content={item} />,
  }));

  const ref = useRef(null);

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

  //for scroll
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  // };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  // console.log(scrollPosition);

  useEffect(() => {
    if (scrollPosition < 1425) {
      setActiveTab(0);
    }
    if (scrollPosition > 1425) {
      setActiveTab(1);
    }
    if (scrollPosition > 1460) {
      setActiveTab(2);
    }
    if (scrollPosition > 1510) {
      setActiveTab(3);
    }
    if (scrollPosition > 1550) {
      setActiveTab(4);
    }
  }, [scrollPosition]);

  //scroll end

  return (
    <section
      className="flex overflow-hidden flex-col items-center px-20 lg:pt-24  lg:pb-24 w-full bg-[#F5F8FF] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      id="Security"
      ref={ref}
    >
      <div className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col items-center ml-5 mx-auto max-md:ml-0 max-md:w-full">
            <div className="lg:w-[80%] w-full flex flex-col grow items-center mt-6 text-xl font-semibold text-center max-md:mt-10 max-md:max-w-full">
              <h2 className="lg:text-5xl text-[30px] font-sora text-black capitalize max-md:text-4xl">
                Remediate Risk
              </h2>
              <p className="self-stretch font-urbanist font-normal md:mb-6 mt-4 lg:leading-7 leading-[20px] lg:text-[20px] text-[14px] text-[#444444] max-md:max-w-full">
                LightBeam ai pioneers zero-trust data protection, merging data
                security, privacy, and AI governance. It ensures compliance with
                regulations like PCI, GLBA, GDPR, and HIPAA for businesses&apos;
                growth.
              </p>
              <div className="max-md:mt-[27px] max-md:mb-[14px]">
                <Link href={"/template/template1"}>
                  <HoverBorderGradientDemo content="Know More" className="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TabsDemo
        tabs={securityTabs}
        activeTab={""}
        tabClass="md:w-[80%] w-[90%] mb-10"
      />
    </section>
  );
};

export default RemediateRisk;
