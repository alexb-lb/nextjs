"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
gsap.registerPlugin(ScrollTrigger);

function LawRegulationSection({ name, setCurrentSection, sectionRefs }) {
  const ref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const boxes = gsap.utils.toArray(".card-box");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    boxes.forEach((box, index) => {
      tl.fromTo(
        box,
        { x: window.innerWidth > 768 ? 2000 : 700 }, // Start from the right with opacity 0
        {
          x: 0, // Move to original position
          duration: 0.4,
          delay: index * 0.2, // Stagger effect based on index
          ease: "power1.out",
        }
      );
    });

    return () => {
      // Clean up ScrollTrigger instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section
      className="w-full  pt-[94px] max-md:mt-10 overflow-x-hidden"
      id="Law"
      ref={ref}
    >
      <h2 className="text-5xl font-semibol font-sora text-center text-[#020103] capitalize max-md:text-[30px]">
        Solution by Law & <br className="md:hidden" /> Regulations
      </h2>
      <h3 className="mt-[40px] text-4xl text-center text-black font-sora max-md:text-[24px]">
        Data Security
      </h3>
      <p className="mt-6 text-[14px] leading-[20px] text-[#232323] md:text-xl font-urbanist md:leading-7 text-center md:text-[#444444] max-w-[886px] mx-auto max-md:px-14">
        Automated privacy-aware data security with 360 visibility and control of
        sensitive information across SaaS, Cloud and On-prem applications for
        data at-rest, in-motion and in-use.
      </p>
      <div className="text-center mt-6">
        <HoverBorderGradientDemo
          content="Know More"
          // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
          onClick={() => router.push("/solution/security")}
        />
      </div>

      <div className="flex items-center max-md:flex-col justify-center relative mx-2 md:mx-[80px] h-[470px] mt-6 max-md:mt-12">
        <div
          className={`bg-[url('/images/solution/ds1.png')] bg-center bg-fit bg-no-repeat h-[470px] w-2/4 max-md:w-full rounded-2xl absolute top-0 left-0 cursor-pointer`}
        ></div>
        <div
          className={`card-box bg-[url('/images/solution/ds2.png')] bg-center bg-fit bg-no-repeat h-[470px] w-2/4 max-md:w-full  rounded-2xl absolute top-0 max-md:top-32 left-1/4 max-md:left-0 cursor-pointer`}
        ></div>
        <div
          className={`card-box bg-[url('/images/solution/ds3.png')] bg-center bg-fit bg-no-repeat h-[470px] w-2/4 max-md:w-full rounded-2xl absolute top-0 max-md:top-60 left-2/4 max-md:left-0 cursor-pointer`}
        ></div>
      </div>
    </section>
  );
}

export default LawRegulationSection;
