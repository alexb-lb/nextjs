"use client";
import { TabsDemo } from "@/components/common/TabsDemo";
import BorderButton from "../Animation/Button";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const imageSrc =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/d5d9a7dd3ee7ebeee44fdef9f4858c845f084ddf617b05d97ad57a52796132ac?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";
const sharedContentImage =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/683a1507555190d8f6e03d9dd8cd7715ea0740831d2e675d658513697e581471?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";

const contentDetails = [
  { title: "GDPR ", value: "data-subject-rights" },
  { title: "Québec's Law 25", value: "data-identity" },
  { title: "US Privacy Laws", value: "remediate-risk" },
  { title: "India DPDP", value: "audit-control" },
  { title: "FERPA", value: "coverage" },
  { title: "HIPAA", value: "hippa" },
];

const featureList = [
  {
    title: "",
    description:
      "Whether sensitive information is hiding in images, text, logs, emails, tables, HTML, or JSON, nothing skips the eyes of the detective!",
  },
];

const Feature = ({ feature, index }) => (
  <div className={`${index > 0 ? "mt-5" : ""} max-md:max-w-full`}>
    <span className="max-md:text-[14px] max-md:leading-[20px] font-semibold font-urbanist text-[#444444]">
      {feature.title}{" "}
    </span>
    <span className="max-md:text-[14px] max-md:leading-[20px] font-normal font-urbanist">
      {feature.description}
    </span>
  </div>
);

const ContentSection = ({ content }) => (
  <div className="w-fulls relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-white ">
    <div className="overflow-hidden pt-0 md:py-12 pl-12 max-w-full bg-white rounded-xl shadow-[0px_12px_80px_rgba(50,50,50,0.08)] w-full max-md:pl-5 max-md:mt-10 mx-auto">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-md:max-w-full">
            <h3 className="text-[28px] leading-[35px] md:text-4xl text-black font-sora">
              {content.title}
            </h3>
            <div className="flex flex-col mt-6 max-w-full text-lg leading-7 text-neutral-700 w-[495px] mb-10">
              {featureList.map((feature, index) => (
                <Feature feature={feature} index={index} key={index} />
              ))}
            </div>
            <div className="w-[183px]">
              <Link href="/template/template2">
                <BorderButton
                  content={"Learn More"}
                  className={"bg-white py-[20px] px-[40.88px] "}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={sharedContentImage}
            alt=""
            className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  </div>
);

const PrivacyTab = () => {
  const router = useRouter();

  const securityTabs = contentDetails.map((item) => ({
    title: item.title,
    value: item.value,
    content: <ContentSection content={item} />,
  }));

  return (
    <section
      className="flex overflow-hidden flex-col items-center px-20 mt-[60px] pb-0  md:pb-24 w-full bg-[#F5F8FF] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      id="Privacy"
    >
      <div className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <motion.div
            className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full max-md:hidden"
            animate={{
              translateY: [0, 50, 0],
              // rotate: [0, 40, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              // repeatDelay: 0.5,
            }}
          >
            <img
              loading="lazy"
              src={"/images/platform/privacy_left.svg"}
              alt=""
              className="object-contain shrink-0 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </motion.div>
          <div className="flex flex-col ml-5 w-[68%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center mt-6 text-xl font-semibold text-center max-md:mt-10 max-md:max-w-full">
              <h2 className="text-5xl font-sora text-black capitalize max-md:text-[24px] max-md:leading-[]">
                Privacy
              </h2>
              <p className="self-stretch font-urbanist font-normal mb-6 mt-6 leading-7 text-[20px]  text-[#444444] max-md:max-w-full max-md:text-[14px] max-md:leading-[20px]">
                Manage and protect personal information to ensure
                individuals&apos; data is collected, stored, and shared in
                accordance with legal and ethical standards.
              </p>
              <HoverBorderGradientDemo
                content="Know More"
                // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
                onClick={() => router.push("/solution/privacy")}
              />
            </div>
          </div>
          <motion.div
            className="flex flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full max-md:hidden"
            animate={{
              translateY: [0, 50, 0],
              // rotate: [0, 40, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.5, 1],
              repeat: Infinity,
              // repeatDelay: 0.5,
              delay: 1.5,
            }}
          >
            <img
              loading="lazy"
              src={"/images/platform/privacy_right.svg"}
              alt=""
              className="object-contain shrink-0 mt-2 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </motion.div>
        </div>
      </div>
      <TabsDemo tabs={securityTabs} />
    </section>
  );
};

export default PrivacyTab;
