"use client";
import { TabsDemo } from "@/components/common/TabsDemo";
import BorderButton from "@/components/Animation/Button";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// const imageSrc =
//   "https://cdn.builder.io/api/v1/image/assets/TEMP/d5d9a7dd3ee7ebeee44fdef9f4858c845f084ddf617b05d97ad57a52796132ac?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";
const sharedContentImage =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/683a1507555190d8f6e03d9dd8cd7715ea0740831d2e675d658513697e581471?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";

const contentDetails = [
  { title: "Reports", value: "reports" },
  { title: "Alert", value: "alert" },
  { title: "Logs", value: "logs" },
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
    <span className="font-bold font-urbanist ">{feature.title}: </span>
    <span className="font-normal font-urbanist">{feature.description}</span>
  </div>
);

const ContentSection = ({ content }) => (
  <div className="mt-6 w-fulls relative h-full rounded-2xl text-xl md:text-4xl font-bold text-white bg-white ">
    <div className="overflow-hidden lg:py-12 lg:pl-12 md:p-10 max-w-full bg-white rounded-xl shadow-[0px_12px_80px_rgba(50,50,50,0.08)] w-full max-md:pl-5  mx-auto">
      <div className="flex gap-5 max-lg:flex-col">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-lg:w-full">
          <div className="flex flex-col self-stretch my-auto font-semibold max-md:mt-10 max-lg:max-w-full">
            <h3 className="text-4xl max-md:text-[28px] text-black font-sora">
              {content.title}
            </h3>
            <div className="flex flex-col mt-6 max-w-full text-lg leading-7 text-neutral-700 w-[495px] mb-10 max-md:mb-6">
              {content.content ? (
                <>
                  <p className="mb-2">{content?.content}</p>
                  <p className="mb-2"> {content?.content2}</p>
                  <p>{content?.content3}</p>
                </>
              ) : (
                featureList.map((feature, index) => (
                  <Feature feature={feature} index={index} key={index} />
                ))
              )}
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
          {content?.image && (
            <Image
              loading="lazy"
              src={content?.image || null}
              alt=""
              className="object-contain grow w-full rounded-3xl aspect-[1.08] shadow-[0px_4px_42px_rgba(50,50,50,0.08)]  max-md:max-w-full"
              height={406}
              width={400}
            />
          )}
        </div>
      </div>
    </div>
  </div>
);

const AuditControl = ({ sectionData, imageData = {} }) => {
  const tabdata = sectionData[1]?.tabs?.map((item, ind) => {
    return {
      title: item.title,
      value: item?.title?.trim().split(" ").join("-"),
      content: item.content,
      image:
        imageData.tabs &&
        imageData?.tabs[ind]?.image?.data &&
        imageData?.tabs[ind]?.image?.data[0]?.attributes?.url,
      content2: item.content2,
      content3: item.content3,
    };
  });

  const securityTabs = tabdata.map((item) => ({
    title: item.title,
    value: item.value,
    content: <ContentSection content={item} image={item.image} />,
  }));

  const ref = useRef(null);
  const tlRef = useRef(null);

  const sectionRef = useRef();
  const [cardsActive, setCardsActive] = useState(0);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".auditControl_tab");
    // gsap.set(boxes[0], { y: 0, scale: 1, zIndex: 10 });
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top-=200px",
        end: "+=1500",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const currentBox = Math.floor(progress * boxes.length);
          setCardsActive(currentBox);
          // Apply scale down to previous boxes
          boxes.forEach((box, index) => {
            if (index < currentBox) {
              gsap.to(box, {
                scale: 1 - 0.05 * (currentBox - index),
                zIndex: 1,
                duration: 0.2,
              });
            } else if (index === currentBox) {
              gsap.to(box, { scale: 1, zIndex: 10, duration: 0.2 });
            }
          });
        },
      },
    });

    let topPosition = 0;

    boxes.slice(1).forEach((box, index) => {
      tl.fromTo(
        box,
        { y: window.innerWidth > 768 ? 1000 : 800, scale: 1 },
        {
          y: topPosition,
          scale: 1, // Make sure the new card starts at full size
          duration: 0.6,
          delay: index * 0.2, // Stagger effect based on index
          ease: "power1.out",
        }
      );
      topPosition += 30;
    });

    tlRef.current = tl;

    return () => {
      // Clean up ScrollTrigger instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function handleAnimationChange(newTabIndex) {
    if (tlRef.current) {
      const totalBoxes = gsap.utils.toArray(".auditControl_tab").length - 1;
      const progressValue = newTabIndex / totalBoxes;
      tlRef.current.progress(progressValue + 0);
    }
  }

  return (
    <section
      className="flex overflow-hidden flex-col items-center px-20 lg:pt-24  lg:pb-24 w-full bg-[#F5F8FF] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      id="Security"
      ref={sectionRef}
    >
      <div className="self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {/* <motion.div
            className="lg:flex hidden flex-col w-[16%] max-md:ml-0 max-md:w-full"
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
              src={"/images/platform/security_left.svg"}
              alt=""
              className="object-contain shrink-0 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </motion.div> */}
          <div className="flex flex-col  w-[68%] mx-auto max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center mt-6 text-xl font-semibold text-center max-md:mt-10 max-md:max-w-full">
              <h2 className="lg:text-5xl text-[30px] font-sora text-black capitalize max-md:text-4xl">
                {/* Audit Control */}
                {sectionData[0]?.content?.title}
              </h2>
              <p className="self-stretch font-urbanist font-normal mb-6 mt-6 lg:leading-7 leading-[20px] lg:text-[24px] text-[14px] text-[#444444] max-md:max-w-full">
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim */}
                {sectionData[0]?.content?.description}
              </p>
              <Link href={sectionData[0]?.cta[0]?.url || "#"}>
                <HoverBorderGradientDemo
                  content={sectionData[0]?.cta[0]?.text}
                  className=""
                />
              </Link>
            </div>
          </div>
          {/* <motion.div
            className="lg:flex hidden flex-col ml-5 w-[16%] max-md:ml-0 max-md:w-full"
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
              src={"/images/platform/security_right.svg"}
              alt=""
              className="object-contain shrink-0 mt-2 max-w-full aspect-square w-[199px] max-md:mt-10"
            />
          </motion.div> */}
        </div>
      </div>
      <TabsDemo
        tabs={securityTabs}
        tabClass="md:w-[80%] w-[90%]"
        activeTab={cardsActive}
        animateClass={"auditControl_tab"}
        handleAnimationChange={handleAnimationChange}
      />
    </section>
  );
};

export default AuditControl;
