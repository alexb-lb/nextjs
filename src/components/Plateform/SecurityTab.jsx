"use client";
import { TabsDemo } from "@/components/common/TabsDemo";
import BorderButton from "../Animation/Button";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { motion } from "framer-motion";
import Link from "next/link";
import useTabAnimation from "../../hooks/useTabAnimation";

const imageSrc =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d5d9a7dd3ee7ebeee44fdef9f4858c845f084ddf617b05d97ad57a52796132ac?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";
const sharedContentImage =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/683a1507555190d8f6e03d9dd8cd7715ea0740831d2e675d658513697e581471?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";

const contentDetails = [
  { title: "Data Posture", value: "data-posture" },
  { title: "Data Identity", value: "data-identity" },
  { title: "Remediate Risk", value: "remediate-risk" },
  { title: "Audit Control", value: "audit-control" },
  { title: "Coverage", value: "coverage" },
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
    } max-md:max-w-full max-md:text-[14px] max-md:leading-[23px] text-[#444444]`}
  >
    <span className="font-extrabold font-urbanist text-black">
      {feature.title}:{" "}
    </span>
    <span className="font-normal font-urbanist ">{feature.description}</span>
  </div>
);

const ContentSection = ({ content }) => (
  <div className="w-fulls relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-white ">
    <div className="overflow-hidden lg:py-12 lg:pl-12 md:p-8 p-5  max-w-full bg-white rounded-xl shadow-[0px_12px_80px_rgba(50,50,50,0.08)] w-full max-md:p-5 mt-14 mx-auto">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-lg:w-full">
          <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-2 max-md:max-w-full">
            <h3 className="text-4xl max-md:text-[28px] max-md:leading-[35px] text-black font-sora">
              {content.title}
            </h3>
            <div className="flex flex-col mt-6 max-w-full text-lg leading-7 text-neutral-700  mb-10 max-md:mb-6">
              {featureList.map((feature, index) => (
                <Feature feature={feature} index={index} key={index} />
              ))}
            </div>
            <div className="w-[183px]">
              <Link href={"/template/template1"}>
                <BorderButton
                  content={"Learn More"}
                  className={"bg-white py-[20px] px-[40.88px] "}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:ml-5 w-6/12 max-md:ml-0 max-lg:w-full">
          <img
            loading="lazy"
            src={sharedContentImage}
            alt=""
            className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)]  max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
);

const SecurityTab = () => {
  const securityTabs = contentDetails.map((item) => ({
    title: item.title,
    value: item.value,
    content: <ContentSection content={item} />,
  }));

  const {
    sectionRef,
    changeAnimationAsPerTabClick,
    cardActive,
    refreshAnimation,
  } = useTabAnimation(".security_tab");

  return (
    <section
      className="flex overflow-hidden flex-col items-center px-20 lg:pt-24  lg:pb-24 w-full bg-[#F5F8FF] max-md:px-5 max-md:mt-11 max-md:max-w-full"
      id="Security"
      ref={sectionRef}
    >
      <div className="self-stretch max-md:max-w-full">
        <div className="flex justify-center gap-5 max-md:flex-col">
          <motion.div
            className="md:flex hidden flex-col w-[16%] max-md:ml-0 max-md:w-full"
            animate={{
              translateY: [0, 50, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
            }}
          >
            <img
              loading="lazy"
              src={"/images/platform/security_left1.svg"}
              alt=""
              className="object-contain shrink-0 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </motion.div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center mt-6 text-xl font-semibold text-center max-md:mt-10 max-md:max-w-full">
              <h2 className="lg:text-5xl text-[30px] font-sora text-black capitalize max-lg:text-4xl">
                Security
              </h2>
              <p className="self-stretch font-urbanist font-normal mb-6 mt-6 lg:leading-7 leading-[20px] lg:text-[20px] text-[14px] text-[#444444] max-md:max-w-full">
                Get workflows for assisting organizations in efforts to comply
                with state, national & international privacy regulations like
                GDPR, CPRA, Quebec Law 25, and so on.
              </p>
              <Link href={"/platform/security"}>
                <HoverBorderGradientDemo content="Know More" />
              </Link>
            </div>
          </div>
          <motion.div
            className="md:flex hidden flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full"
            animate={{
              translateY: [0, 50, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              delay: 1.5,
            }}
          >
            <img
              loading="lazy"
              src={"/images/platform/security_right1.svg"}
              alt=""
              className="object-contain shrink-0 mt-2 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </motion.div>
        </div>
      </div>
      <TabsDemo
        tabs={securityTabs}
        activeTab={cardActive}
        animateClass={"security_tab"}
        handleAnimationChange={changeAnimationAsPerTabClick}
        refreshAnimation={refreshAnimation}
      />
    </section>
  );
};

export default SecurityTab;
