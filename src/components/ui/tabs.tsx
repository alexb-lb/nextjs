"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  sectionRef?: any;
  animateClass: any;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  activeTab,
  animateClass,
  handleAnimationChange,
  refreshAnimation,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  activeTab: number;
  animateClass: string;
  handleAnimationChange: any;
  refreshAnimation: any;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  // useEffect(() => {
  //   if (Array.isArray(propTabs) && propTabs.length > 0 && activeTab)
  //     if (propTabs[activeTab]) {
  //       setActive(propTabs[activeTab]);
  //     }
  // }, [activeTab]);

  const moveSelectedTabToTop = (idx: number) => {
    // if (handleAnimationChange) {
    //   handleAnimationChange(idx);
    // }
  };

  return (
    <>
      <div
        className={`flex flex-row max-lg:gap-[16px] items-end justify-start [perspective:1000px] overflow-x-scroll no-scrollbar  no-visible-scrollbar lg:max-w-full w-full ${containerClassName}`}
      >
        {propTabs?.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            className={`para1 relative lg:px-4 lg:py-2 p-3 font-urbanist font-semibold lg:pb-8 pb-6 max-lg:min-w-[150px] ${tabClassName}`}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={`text-[#232323] opacity-[60%] absolute inset-0  w-full max-lg:min-w-[154px] ${activeTabClassName}`}
              />
            )}

            <span
              className={`para1 font-urbanist relative block max-md:text-[16px]  ${
                active.value === tab.value && "text-[#232323]"
              }`}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        key={active.value}
        animateClass={animateClass}
        refreshAnimation={refreshAnimation}
      />
    </>
  );
};

export const FadeInDiv = React.memo(
  ({
    tabs,
    animateClass,
    refreshAnimation,
  }: {
    tabs: Tab[];
    animateClass: string;
    refreshAnimation: any;
  }) => {
    return (
      <div className="relative lg:w-[80%] w-full mx-auto h-full">
        {tabs.map((tab) => (
          <div
            className={`w-full h-full absolute top-0 ${animateClass}`}
            key={tab.value}
          >
            {tab.content}
          </div>
        ))}
      </div>
    );
  },
  () => {
    return false;
  }
);
