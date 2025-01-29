"use client";
import React, { useEffect, useRef, useState } from "react";
// import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";

import BorderButton from "../Animation/Button";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PlatformSection = ({ height }: any) => {
  const router = useRouter();

  const refd = useRef() as any;

  useEffect(() => {
    const boxes = gsap.utils.toArray(".card-box") as any;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: refd.current,
        start: "top top",
        end: "+=1500",
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.fromTo(
      boxes[0],
      { y: window.innerWidth > 768 ? 2000 : 1000 },
      {
        y: 50, // Move to original position
        duration: 0.6,
        delay: 2 * 0.2, // Stagger effect based on index
        ease: "power1.out",
      }
    );

    tl.fromTo(
      boxes[1],
      { y: 2000 }, // Start from the right with opacity 0
      {
        y: 150, // Move to original position
        duration: 0.6,
        delay: 2 * 0.2, // Stagger effect based on index
        ease: "power1.out",
      }
    );

    tl.fromTo(
      boxes[2],
      { y: 2000 }, // Start from the right with opacity 0
      {
        y: 250, // Move to original position
        duration: 0.6,
        delay: 2 * 0.2, // Stagger effect based on index
        ease: "power1.out",
      }
    );

    // boxes.forEach((box: any, index) => {
    //   tl.fromTo(
    //     box,
    //     { y: 2000 }, // Start from the right with opacity 0
    //     {
    //       y: topPosition, // Move to original position
    //       duration: 0.6,
    //       delay: index * 0.2, // Stagger effect based on index
    //       ease: "power1.out",
    //     }
    //   );
    //   topPosition = topPosition + 20;
    // });

    return () => {
      // Clean up ScrollTrigger instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const ourPlatformCards = [
    {
      data: (
        <div className="relative bg-[#DDECFE] h-[532px] rounded-2xl pl-8 pt-10 w-auto md:w-[412px] ml-0  card-box">
          <h1 className="title3 text-[#043A7C] mb-7 max-md:text-[28px]">
            Data Security
          </h1>
          <p className="link_text min-h-[150px] font-urbanist text-[#10667F] mb-10 w-[90%]">
            Automated privacy-aware data security with 360 visibility and
            control of sensitive information across SaaS, Cloud and On-prem
            applications for data at-rest, in-motion and in-use.
          </p>

          <BorderButton
            content={"Learn More"}
            className={
              "font-sora space-x-2 border  px-8 py-4 rounded-[50px] bg-[#DDECFE]"
            }
            onClick={() => router.push("/platform/security")}
          />

          <div className="w-full absolute bottom-0 right-0 flex justify-end">
            <img
              loading="lazy"
              src="/images/home/platform_card_img.svg"
              alt=""
              className="-mt-20"
            />
          </div>
        </div>
      ),
    },
    {
      data: (
        <div className="relative bg-[#E4EDF7] h-[532px] rounded-2xl pl-8 pt-10 w-auto md:w-[412px]  sm:ml-32 card-box ">
          <h1 className="title3 text-[#224872] mb-7 max-md:text-[28px]">
            Data Privacy
          </h1>
          <p className="link_text min-h-[150px] font-urbanist text-[#10667F] mb-10 w-[90%]">
            Manage and protect personal information to ensure individual&apos;s
            data is collected, stored, and shared in accordance with privacy
            regulations with self-service workflows to comply with GDPR, CPRA,
            Quebec 25 and many other privacy regulations.
          </p>

          <BorderButton
            content={"Learn More"}
            className={
              "font-sora space-x-2 border  px-8 py-4 rounded-[50px] bg-[#E4EDF7]"
            }
            onClick={() => router.push("/platform/privacy-center")}
          />

          <div className="w-full absolute bottom-0 right-0 flex justify-end">
            <img
              loading="lazy"
              src="/images/home/platform_card_img.svg"
              alt=""
              className="-mt-20"
            />
          </div>
        </div>
      ),
    },
    {
      data: (
        <div className="relative bg-[#D6F2FA] h-[532px] rounded-2xl pl-8 pt-10 w-auto md:w-[412px] sm:ml-64  card-box">
          <h1 className="title3 text-[#10667F] mb-7 max-md:text-[28px]">
            Governance
          </h1>
          <p className="link_text min-h-[150px] font-urbanist text-[#10667F] mb-10 w-[90%]">
            Manage data availability, usability, integrity, and security within
            an organization to ensure effective data management and compliance.
          </p>

          <BorderButton
            content={"Learn More"}
            className={
              "font-sora space-x-2 border  px-8 py-4 rounded-[50px] bg-[#D6F2FA]"
            }
            onClick={() => router.push("/platform/governance-center")}
          />

          <div className="w-full absolute bottom-0 right-0 flex justify-end">
            <img
              loading="lazy"
              src="/images/home/platform_card_img.svg"
              alt=""
              className="-mt-20"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="flex relative flex-col px-16 pt-20 pb-16 mt-0 w-full min-h-[1201px] max-md:px-5 max-md:pt-24 max-md:max-w-full bg-primary_white ">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/88faadd44db72d1fe414821f69560c0c5c185c39578c85d5b8507b6121ec7f4a?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
        alt=""
        className="object-fit absolute bottom-0 left-[-200px] size-full max-md:hidden"
      />
      <div className="relative max-md:max-w-full" ref={refd}>
        <div
          className={`flex gap-5 items-stretch max-md:flex-col relative lg:h-[731.117px] md:h-[64vh]  no-scrollbar `}
        >
          <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full lg:sticky top-0">
            <div className="flex relative flex-col sm:mt-16 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col pl-2.5 max-md:max-w-full ">
                <h2 className="self-start title2 mx-auto sm:mx-0 font-semibold font-sora text-primary_black capitalize max-md:text-[30px]">
                  Our Platform
                </h2>
                <p className="mt-6 para2 text-center sm:text-start font-urbanist text-[#444444]  max-md:max-w-full">
                  LightBeam platform converges data security, privacy, and AI
                  governance, so businesses can secure their data across cloud,
                  SaaS and on-prem locations. <br />
                  <br /> Leveraging generative AI, LightBeam ties together
                  sensitive data cataloging, control, and compliance across
                  structured (databases), unstructured (file repositories), and
                  semi-structured (ticketing systems) applications.
                </p>
              </div>
              <div className="flex justify-center sm:justify-start mt-6">
                <HoverBorderGradientDemo
                  content="View All"
                  onClick={() => router.push("/platform")}
                  className="max-md:py-[12px] max-md:px-[36px]"
                />
              </div>
            </div>
          </div>
          <div
            className={`lg:absolute top-0 right-0 flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full max-md:h-[734.273px]  max-md:overflow-scroll no-scrollbar `}
          >
            {ourPlatformCards.map((item, ind) => (
              <div key={ind} className="flex">
                <div className="absolute">{item?.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="relative self-start mt-32 ml-3 text-xl leading-tight uppercase text-neutral-800 max-md:mt-10 max-md:ml-2.5">
        {/* USE CASES */}
      </p>
    </section>
  );
};

export default PlatformSection;
