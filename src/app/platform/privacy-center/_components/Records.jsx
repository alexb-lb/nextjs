"use client";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import React, { useState } from "react";

import Image from "next/image";
import plusIcon from "./plus-icon.svg";
import minusIcon from "./minus-icon.svg";
import styles from "./styles.module.css";
import Link from "next/link";

const AccordionItem = ({ header, isOpen, onClick, children }) => (
  <div className="border-b border-gray-300">
    <div
      className={`flex justify-between items-center cursor-pointer p-4 ${styles.itemBtn}`}
      onClick={onClick}
    >
      <div className="text-white font-bold text-[20px]">{header}</div>
      <Image
        src={isOpen ? minusIcon : plusIcon}
        width={24}
        height={24}
        className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`}
        alt={isOpen ? "Minus Icon" : "Plus Icon"}
      />
    </div>
    <div
      className={` overflow-hidden transition-all duration-150 ${
        isOpen ? "max-h-[500px]" : "max-h-0 opacity-0"
      }`}
    >
      <div className="pb-4 text-white">{children}</div>
    </div>
  </div>
);

const Records = ({ sectionData }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleAccordionClick = (index) => {
    if (openIndex === 0 && index === 0) {
      setOpenIndex(1);
    }
    if (openIndex === 0 && index === 1) {
      setOpenIndex(1);
    }
    if (openIndex === 1 && index === 0) {
      setOpenIndex(0);
    }
    if (openIndex === 1 && index === 1) {
      setOpenIndex(0);
    }
  };

  const accordionItems = [
    {
      header: sectionData[1]?.title,
      content: sectionData[1]?.description,
    },
    {
      header: sectionData[2]?.title,
      content: sectionData[1]?.description,
    },
  ];

  return (
    <div
      className=""
      style={{
        backgroundImage: "url('/images/platform/AiBg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="pt-[93px] pb-[60px] px-[20px] lg:px-[80px]">
        <div className="flex items-center justify-center gap-[20px]">
          <h3
            className="gradient_heading font-sora text-[24px] lg:text-[48px] lg:leading-[60px] 
        font-semibold text-center md:mb-[46px]"
          >
            {/* Records of Processing Activity (RoPA) */}
            {sectionData[0]?.title}
          </h3>
        </div>
        <div className="md:hidden my-[30px]">
          <Link href={sectionData[0]?.cta[0]?.url || "#"}>
            <HoverBorderGradientDemo
              content={sectionData[0]?.cta[0]?.text}
              className=""
            />
          </Link>
        </div>

        <div className="flex flex-col-reverse xl:flex-row max-xl:items-center justify-center gap-[20px] md:pb-[72px]">
          <div
            className={`${styles.accordion} w-full xl:w-[60%] h-auto md:min-h-[440px]
            overflow-hidden bg-[#FBFBFB1A] bg-opacity-[10%] rounded-[16px] py-[35px] md:py-[49px] px-[30px] md:px-[57px]`}
          >
            {accordionItems.map((item, index) => (
              <AccordionItem
                key={index}
                header={item.header}
                isOpen={openIndex === index}
                onClick={() => handleAccordionClick(index)}
              >
                {item.content}
              </AccordionItem>
            ))}
          </div>
          <div className="w-full lg:w-[40%] lg:min-h-[440px] h-[257px]">
            {openIndex === 0 && (
              <>
                {sectionData[1]?.icon?.data?.attributes?.url && (
                  <Image
                    src={
                      sectionData && sectionData[1]?.icon?.data?.attributes?.url
                    }
                    alt="Records of Processing Activity"
                    width={500}
                    height={500}
                    className="w-full h-full object-fill"
                    layout="responsive"
                  />
                )}
              </>
            )}
            {openIndex === 1 && (
              <>
                {sectionData[2]?.icon?.data?.attributes?.url && (
                  <Image
                    src={
                      sectionData && sectionData[2]?.icon?.data?.attributes?.url
                    }
                    alt="Records of Processing Activity"
                    width={500}
                    height={500}
                    className="w-full h-full object-fill"
                    layout="responsive"
                  />
                )}
              </>
            )}
          </div>
        </div>

        <div className="max-md:hidden">
          <Link href={sectionData[0]?.cta[0]?.url || "#"}>
            <HoverBorderGradientDemo
              content={sectionData[0]?.cta[0]?.text}
              className=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Records;
