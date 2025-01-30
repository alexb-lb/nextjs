"use client";

import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Image from "next/image";
import { TabsDemo } from "@/components/common/TabsDemo";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const contentDetails = [
  { title: "Discover", value: "discover" },
  { title: "Classify", value: "classify" },
  { title: "Label", value: "label" },
];

const sharedContentImage =
  "https://cdn.builder.io/api/v1/image/assets/TEMP/683a1507555190d8f6e03d9dd8cd7715ea0740831d2e675d658513697e581471?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887";

function DeploymentCard({
  title,
  icon,
  description,
  activeTab,
  index,
  setActiveTab,
}) {
  return (
    <div
      className={`flex overflow-hidden flex-col px-8 py-6  w-full rounded-3xl  max-md:px-5 max-md:max-w-full cursor-pointer  ${
        activeTab === index ? "bg-[#F7F4FB]  text-[#8C83F6]" : " text-black"
      } `}
      onClick={() => setActiveTab(index)}
    >
      <div className=" w-full text-2xl font-semibold leading-none max-md:max-w-full">
        <h2 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full font-sora">
          {title}
        </h2>
      </div>
    </div>
  );
}

const ContentSection = ({ content, ind }) => (
  <div className="bg-white mt-4 shadow-xl p-[32px] flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]">
    <div className="lg:w-2/3 w-full">
      <h3 className="text-[30px] leading-[37.8px] font-sora font-semibold text-[#002233]">
        {content?.description || "What can you Discover with Spectra?"}
      </h3>
      <p className="font-[400] font-urbanist text-[16px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        {content?.content ||
          "Whether sensitive information is hiding in images, text, logs, emails, tables, HTML, or JSON, nothing skips the eyes of the detective!"}
      </p>
      <div>
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] lg:items-center">
          <div className="flex gap-[10px] items-center">
            <Image
              src="/images/solution/privacy/adv1.svg"
              alt=""
              width={50}
              height={50}
              loading="lazy"
              // layout="responsive"
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-lg:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image
              src="/images/solution/privacy/adv2.svg"
              alt=""
              width={50}
              height={50}
              // layout="responsive"
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Faster Launch,
              <br className="max-lg:hidden" />
              Zero Risk
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-1/3 w-full rounded-[8px] overflow-hidden">
      {content?.image && (
        <Image
          // src={content?.image || "/images/platform/post" + ind + ".svg"}
          src={content?.image}
          alt=""
          width={500}
          height={329}
          className="min-h-[329px] min-w-full object-fit"
          layout="responsive"
        />
      )}
    </div>
  </div>
);

const DataPosture = ({ sectionData, imageData }) => {
  const [activeTab, setActiveTab] = useState(1);

  const tabdata = sectionData[1]?.tabs?.map((item, ind) => {
    return {
      title: item.title,
      value: item?.title?.trim()?.split(" ").join("-"),
      content: item.content,
      image:
        imageData?.tabs[ind]?.image?.data &&
        imageData?.tabs[ind]?.image?.data[0] &&
        imageData?.tabs[ind]?.image?.data[0]?.attributes?.url,
    };
  });

  const DataPosture = tabdata.map((item, ind) => ({
    title: item.title,
    value: item.value,
    content: <ContentSection content={item} ind={ind + 1} />,
  }));

  const ref = useRef(null);
  const tlRef = useRef(null);

  const sectionRef = useRef();
  const [cardsActive, setCardsActive] = useState(0);

  useEffect(() => {
    const boxes = gsap.utils.toArray(".dataposture_tab");
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
      const totalBoxes = gsap.utils.toArray(".dataposture_tab").length - 1;
      const progressValue = newTabIndex / totalBoxes;
      tlRef.current.progress(progressValue + 0);
    }
  }

  return (
    <section
      className="flex overflow-hidden flex-col items-center px-20 lg:pt-24  lg:pb-24 w-full bg-[#F5F8FF] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      ref={sectionRef}
    >
      <h1 className="font-sora mb-[16px] title2 text-[#020103] font-semibold text-center">
        {/* Data Posture */}
        {sectionData[0]?.content?.title}
      </h1>
      <p className="text-center font-urbanist para3A text-[#4D4D4D] lg:text-2xl mb-[32px] max-w-[844px] mx-auto">
        {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua, Lorem ipsum dolor
        sit amet,{" "} */}
        {sectionData[0]?.content?.description}
      </p>
      <Link href={sectionData[0]?.cta[0]?.url || "#"}>
        {" "}
        <HoverBorderGradientDemo
          content={sectionData[0]?.cta[0]?.text}
          className=""
        />
      </Link>

      {/* <div className="relative max-md:mt-10 max-md:max-w-full mt-10">
        <div className="flex items-center gap-5 max-md:flex-col">
          <div className="flex flex-col w-4/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col gap-8  grow capitalize font-sora text-primary_white max-md:mt-6 max-md:max-w-full">
              {["Discover", "Classify", "Label"].map((card, index) => (
                <DeploymentCard
                  key={index}
                  title={card}
                  activeTab={activeTab}
                  index={index + 1}
                  setActiveTab={setActiveTab}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-8/12 max-md:ml-0 max-md:w-full  overflow-hidden">
            <div className="flex overflow-hidden relative flex-col grow w-full rounded-3xl  max-md:mt-6 max-md:max-w-full">
              <Image
                height={378}
                width={865}
                loading="lazy"
                src="/images/platform/posture_tab.svg"
                className="object-contain  max-md:max-w-full w-full"
                alt="Deployment visualization"
              />
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-md:mt-10 max-md:max-w-full w-full mt-10">
        <TabsDemo
          tabClass={"bg-transparent w-[80%] mb-6"}
          tabs={DataPosture}
          activeTab={cardsActive}
          animateClass={"dataposture_tab"}
          handleAnimationChange={handleAnimationChange}
        />
      </div>
    </section>
  );
};
export default DataPosture;
