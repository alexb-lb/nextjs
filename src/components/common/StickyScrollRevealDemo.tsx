"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

export function StickyScrollRevealDemo({ content }: any) {
  return (
    <div className="">
      <StickyScroll content={content} />
    </div>
  );
}
