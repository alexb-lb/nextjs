"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string | React.ReactNode | any;
    description: string | React.ReactNode | any;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  //   const backgroundColors = [
  //     "var(--slate-900)",
  //     "var(--black)",
  //     "var(--neutral-900)",
  //   ];
  //   const linearGradients = [
  //     "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
  //     "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
  //     "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  //   ];

  //   const [backgroundGradient, setBackgroundGradient] = useState(
  //     linearGradients[0]
  //   );

  //   useEffect(() => {
  //     setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  //   }, [activeCard]);

  return (
    <motion.div
      //   animate={{
      //     backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      //   }}
      className="w-full h-[30rem] overflow-y-auto flex justify-center relative  rounded-md "
      ref={ref}
    >
      <div className="w-1/2 div relative flex items-start px-4 ">
        <div className="w-full ">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className={`my-[80px]  px-6 py-8 rounded-xl ${
                activeCard === index ? "bg-[#363654]" : "bg-[#F8F8F91A]/[.10]"
              }`}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-[26px] leading-[22px] font-sora font-semibold text-[#F5F8FF]"
              >
                <div className="flex items-center gap-[10px]">
                  <span>
                    <svg
                      width="30"
                      height="30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.749 9A1.25 1.25 0 0 1 21 10.748l-5.609 7.5a1.25 1.25 0 0 1-1.995.008l-3.141-4.125a1.25 1.25 0 1 1 1.989-1.514l2.137 2.807L19 9.251A1.25 1.25 0 0 1 20.75 9Z"
                        fill="#fff"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.73 1.733a5.503 5.503 0 0 1 4.507 0l.022.01 7.728 3.62.03.014c1.73.867 2.757 2.773 2.418 4.815-.642 3.988-2.588 11.85-9.8 17.628l-.014.01a4.244 4.244 0 0 1-5.275 0l-.014-.01c-7.214-5.78-9.159-13.644-9.801-17.63a1.253 1.253 0 0 1-.01-.086c-.16-1.765.626-3.844 2.585-4.742l7.595-3.616.029-.013Zm1.03 2.278L6.172 7.624l-.02.009c-.764.348-1.219 1.241-1.145 2.205.611 3.764 2.416 10.841 8.88 16.025a1.745 1.745 0 0 0 2.192 0c6.491-5.205 8.284-12.32 8.889-16.071v-.007c.158-.947-.305-1.782-1.058-2.166l-7.7-3.607a3.002 3.002 0 0 0-2.45-.001Z"
                        fill="#fff"
                      />
                    </svg>
                  </span>
                  {item.title}
                </div>
              </motion.h2>
              <motion.span
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-[14px] leading-[17px] font-sora text-[#F5F8FF] max-w-sm mt-[32px]"
              >
                {item.description}
              </motion.span>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        // style={{ background: backgroundGradient }}
        className={cn(
          "w-1/2 hidden lg:block h-auto rounded-2xl bg-white sticky top-0 overflow-hidden",
          contentClassName
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
