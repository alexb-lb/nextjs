"use client";
import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function HoverBorderGradientDemo({
  content,
  className,
  onClick = () => {},
}: any) {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full z-10 "
        as="button"
        className={` bg-primary_blue text-[20px] font-semibold leading-[20px] tracking-[1.5px] font-urbanist text-white flex items-center px-[51px] h-[60px] rounded-[50px] max-md:py-[11px] max-md:px-[30px] max-md:h-[46px] max-md:text-[16px] max-md:leading-[20px] relative z-10 ${className}`}
        onClick={onClick}
        style={{ width: "max-content" }}
      >
        <span>{content || "Know More"}</span>
      </HoverBorderGradient>
    </div>
  );
}
