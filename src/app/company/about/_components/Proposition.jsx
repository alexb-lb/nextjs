"use client";

import { TabsDemo } from "@/components/common/TabsDemo";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// function DeploymentCard({ title, icon, description, activeTab, index }) {
//   return (
//     <div
//       className={`flex overflow-hidden flex-col px-8 py-6  w-full rounded-3xl  max-md:px-5 max-md:max-w-full  ${
//         activeTab === index ? "bg-[#F7F4FB]  text-[#8C83F6]" : " text-black"
//       } `}
//     >
//       <div className=" w-full text-2xl font-semibold leading-none max-md:max-w-full">
//         <h2 className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full font-sora">
//           {title}
//         </h2>
//       </div>
//     </div>
//   );
// }

const contentDetails = [
  { title: "Unify Compliance", value: "unify_compliance" },
  { title: "Consolidate Tools", value: "consolidate_tools" },
  { title: "Reduce Risk", value: "reduce_risk" },
  { title: "Migrate & Modernize", value: "migrate_modernize" },
];

const ContentSection = ({ content, ind }) => (
  <div className="bg-white mt-12 max-md:mt-16 shadow-xl p-[32px] max-md:p-6 max-md:pt-8 flex lg:flex-row flex-col gap-[24px] items-center rounded-[16px]">
    <div className="lg:w-[58%] w-full">
      <h3 className="text-[28px] leading-[35px] font-sora font-semibold text-[#002233]">
        {/* LightBeam Simplifies Data Security Operations */}
        {content?.title}
      </h3>
      <p className="font-[400] font-urbanist text-[16px] max-md:text-[14px] leading-[19.2px] text-[#444444] mt-[30px] mb-[38px]">
        {/* LightBeam revolutionizes data security and privacy operations by
        offering organizations a unified platform that consolidates a wide range
        of tools.
        <br />
        <br />
        This comprehensive solution streamlines workflows, enhances efficiency,
        and ensures robust protection for sensitive information, all from a
        single interface. */}
        {content?.content}
      </p>
      <div>
        <h4 className="para1 font-urbanist lg:font-semibold font-bold text-[#33405A] mb-[20px]">
          Key Advantages
        </h4>
        <div className="flex lg:flex-row flex-col gap-[16px] max-md:gap-2 lg:items-center">
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv1.svg"
              alt=""
              className="max-md:h-[32px]"
              height={50}
              width={50}
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Reduced Long-Term <br className="max-md:hidden" />
              Costs
            </p>
          </div>
          <div className="flex gap-[10px] items-center">
            <Image
              loading="lazy"
              src="/images/solution/privacy/adv2.svg"
              alt=""
              height={50}
              width={50}
              className="max-md:h-[32px]"
            />
            <p className="font-urbanist font-[400] text-[16px] leading-[19.2px] text-[#020103]">
              Faster Launch,
              <br className="max-md:hidden" />
              Zero Risk
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="lg:w-[40%] w-full rounded-[8px] overflow-hidden">
      {content?.image && (
        <Image
          loading="lazy"
          // src={content?.image || "/images/platform/post" + ind + ".svg"}
          src={content?.image}
          alt=""
          height={200}
          width={300}
          className=" md:min-h-[329px] h-[350px] max-md:h-[184px] min-w-full object-cover"
        />
      )}
    </div>
  </div>
);

const Proposition = ({ sectionData, imageData }) => {
  const tabdata = sectionData?.[1]?.tabs?.map((item, idx) => {
    return {
      title: item.title,
      value: item.title.trim().split(" ").join("-"),
      content: item.content,
      image:
        imageData?.tabs &&
        imageData?.tabs[idx]?.image?.data &&
        imageData?.tabs[idx]?.image?.data[0]?.attributes?.url,
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
    const boxes = gsap.utils.toArray(".proposition_tab");
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

    boxes.forEach((box, index) => {
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
      topPosition += 50;
    });

    tlRef.current = tl;

    return () => {
      // Clean up ScrollTrigger instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  function handleAnimationChange(newTabIndex) {
    if (tlRef.current) {
      const totalBoxes = gsap.utils.toArray(".proposition_tab").length;
      const progressValue = newTabIndex / totalBoxes;
      tlRef.current.progress(progressValue + 0.1);
    }
  }

  return (
    <section
      className="pt-[40px] lg:pt-[68px] pl-[20px] lg:pl-[97px] pr-[20px] lg:pr-[81px] "
      id="key_proposition"
      ref={sectionRef}
    >
      <h1 className="font-sora mb-[16px] title2 text-[#020103] font-semibold text-center">
        {/* Key Proposition */}
        {sectionData?.[0]?.content?.title}
      </h1>
      <p className="text-center font-urbanist para3A md:text-2xl text-[#4D4D4D] mb-[32px] max-w-[844px] mx-auto">
        {/* LightBeam.ai ensures secure data across locations, maintaining control,
        compliance, and privacy for all data types, enabling a zero-trust data
        protection approach. */}
        {sectionData?.[0]?.content?.description}
      </p>

      <div className="max-md:mt-10 max-md:max-w-full mt-10">
        <TabsDemo
          tabs={DataPosture}
          tabClass={"bg-transparent w-[80%] max-md:w-full"}
          activeTab={cardsActive}
          animateClass={"proposition_tab"}
          handleAnimationChange={handleAnimationChange}
        />
      </div>
    </section>
  );
};
export default Proposition;
