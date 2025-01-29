"use client";

// import Image from "next/image";
import { Tabs } from "../ui/tabs";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
  sectionRef: any;
  animateClass: string;
};

export function TabsDemo({
  tabs,
  activeTab,
  tabClass,
  animateClass,
  handleAnimationChange,
  refreshAnimation,
}: any) {
  const containerClassName =
    "border-b border-[#A877FF] pb-0 flex flex-row justify-between pt-2 " +
    tabClass;
  const tabClassName = "text-[#23232399]/[.60]";
  const activeTabClassName = "border-b-2 border-[#545CF6] text-[#232323]";
  return (
    <div className="max-md:min-h-[50rem] md:min-h-[80rem] lg:min-h-[40rem] [perspective:1000px]  relative  flex flex-col  mx-auto w-full items-center justify-start lg:my-[48px] my-[13px] ">
      <Tabs
        tabs={tabs}
        containerClassName={containerClassName}
        tabClassName={tabClassName}
        activeTabClassName={activeTabClassName}
        activeTab={activeTab}
        animateClass={animateClass}
        handleAnimationChange={handleAnimationChange}
        refreshAnimation={refreshAnimation}
      />
    </div>
  );
}
