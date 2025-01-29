"use client";
import React, { useEffect, useRef } from "react";
import Button from "../common/Button";
import BorderButton from "../Animation/Button";

const integrationLogos = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0737b89fe07513354caf93d16b54062cd9f81be4bd4484e4d38ebb7e649d0264?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    alt: "Integration partner logo 1",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0248030a22734ec5b3acf03b6b6b45f1765a382810e1028c6406560cf66d7065?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    alt: "Integration partner logo 2",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c2db216b3d475eb729375561d10025c944e26cd00a43b459c37017500c5711b3?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887",
    alt: "Integration partner logo 3",
  },
];

function IntegrationSection({ name, setCurrentSection, sectionRefs }) {
  const ref = useRef(null);

  useEffect(() => {
    // Add each section ref to the sectionRefs array
    sectionRefs.current.push(ref);
  }, [ref, sectionRefs]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(name);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [name, setCurrentSection, ref]);
  return (
    <section className=" md:pt-28 max-md:mt-10 " ref={ref} id="Integration">
      <h2 className="text-5xl font-semibold font-sora text-center text-black capitalize max-md:text-[30px]">
        Solution by Applications
      </h2>
      <h3 className="mt-10 text-4xl text-center font-sora text-black max-md:text-[24px]">
        Integration
      </h3>
      <p className="mt-6 text-[14px] leading-[20px] max-md:px-6 md:text-xl md:leading-7 text-center text-[#444444] font-urbanist max-w-[886px] mx-auto">
        With native API integration for key enterprise applications, LightBeam
        provides a unified platform for sensitive data discovery. Go ahead,
        connect your applications and see for yourself.
      </p>
      <div className="text-center mt-[23px]">
        <BorderButton
          content={"Know More"}
          className={"bg-white py-[20px] px-[40.88px] "}
        />
      </div>

      <div className="flex items-center justify-center flex-wrap gap-[21px] md:gap-[32px] mt-[64px]">
        <div
          className="w-[161px] h-[148px] max-md:p-8 md:w-[267px] md:h-[247px] rounded-[24px] bg-white flex items-center justify-center"
          style={{ boxShadow: "0px 12px 32px 0px #23232314" }}
        >
          <img loading="lazy" src="/images/solution/app1.svg" />
        </div>
        <div
          className="w-[161px] h-[148px] max-md:p-8 md:w-[267px] md:h-[247px] rounded-[24px] bg-white flex items-center justify-center"
          style={{ boxShadow: "0px 12px 32px 0px #23232314" }}
        >
          <img loading="lazy" src="/images/solution/app2.svg" />
        </div>
        <div
          className="w-[161px] h-[148px] max-md:p-8 md:w-[267px] md:h-[247px] rounded-[24px] bg-white flex items-center justify-center"
          style={{ boxShadow: "0px 12px 32px 0px #23232314" }}
        >
          <img loading="lazy" src="/images/solution/app3.svg" />
        </div>
      </div>
    </section>
  );
}

export default IntegrationSection;
