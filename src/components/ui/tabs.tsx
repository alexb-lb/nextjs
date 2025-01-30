"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import React from "react";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  sectionRef?: any;
  animateClass: any;
};

export const Tabs = ({
  tabs: propTabs = [],
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
  activeTab,
  animateClass,
  handleAnimationChange,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
  activeTab: number;
  animateClass: string;
  handleAnimationChange: any;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  // const moveSelectedTabToTop = (idx: number) => {
  //   if (idx === activeIndex + 1 || idx === activeIndex - 1) {
  //     if (handleAnimationChange) {
  //       handleAnimationChange(idx);
  //     }
  //     if (idx === activeIndex - 1)
  //       setActiveIndex((activeIndex) => activeIndex - 1);
  //     if (idx === activeIndex + 1)
  //       setActiveIndex((activeIndex) => activeIndex + 1);
  //   }
  //   setActive(tabs[idx]);
  // };

  const moveSelectedTabToTop = (idx: number) => {
    if (handleAnimationChange) {
      handleAnimationChange(idx);
    }
    setActive(tabs[idx]);
  };

  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    setActive(tabs[activeTab || 0]);
  }, [activeTab]);

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
            {active?.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={`text-[#232323] opacity-[60%] absolute inset-0  w-full max-lg:min-w-[154px] ${activeTabClassName}`}
              />
            )}

            <span
              className={`para1 font-urbanist relative block max-md:text-[16px]  ${
                active?.value === tab.value && "text-[#232323]"
              }`}
            >
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={activeTab}
        hovering={hovering}
        className={`lg:mt-[58px] ${contentClassName}`}
        animateClass={animateClass}
      />
    </>
  );
};

export const FadeInDiv = ({
  tabs,
  animateClass,
  active,
}: {
  className?: string;
  tabs: Tab[];
  active: number;
  hovering?: boolean;
  animateClass: string;
}) => {
  function getClassName(idx: number) {
    return true;
  }

  return (
    <div className="relative lg:w-[80%] w-full mx-auto h-full">
      {tabs.map((tab, idx) => (
        <div
          className={`w-full h-full absolute top-0 ${
            getClassName(idx) ? animateClass : null
          }`}
          key={idx}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
};
