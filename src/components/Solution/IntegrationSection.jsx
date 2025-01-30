"use client";
import React, { useEffect, useRef } from "react";
import BorderButton from "../Animation/Button";
import Link from "next/link";
import Image from "next/image";

function IntegrationSection({
  name,
  setCurrentSection,
  sectionRefs,
  sectionData,
  imagesData,
}) {
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
        {/* Solution by Applications */}
        {sectionData[0]?.content?.title}
      </h2>
      <h3 className="mt-10 text-4xl text-center font-sora text-black max-md:text-[24px]">
        {sectionData[0]?.content?.description}
      </h3>
      <p className="mt-6 text-[14px] leading-[20px] max-md:px-6 md:text-xl md:leading-7 text-center text-[#444444] font-urbanist max-w-[886px] mx-auto">
        {sectionData[0]?.content?.content}
      </p>
      <div className="text-center mt-[23px]">
        <Link href={sectionData[0]?.cta[0]?.url || "#"}>
          <BorderButton
            content={sectionData[0]?.cta[0]?.text}
            className={"bg-white py-[20px] px-[40.88px] "}
          />
        </Link>
      </div>

      <div className="flex items-center justify-center flex-wrap gap-[21px] md:gap-[32px] mt-[64px]">
        {imagesData?.cards &&
          imagesData?.cards?.map((item, idx) => (
            <div
              className="w-[161px] h-[148px] max-md:p-8 md:w-[267px] md:h-[247px] rounded-[24px] bg-white flex items-center justify-center"
              style={{ boxShadow: "0px 12px 32px 0px #23232314" }}
              key={idx}
            >
              {item?.image?.data?.attributes?.url && (
                <Image
                  loading="lazy"
                  src={item?.image?.data?.attributes?.url}
                  height={150}
                  width={150}
                />
              )}
            </div>
          ))}
      </div>
    </section>
  );
}

export default IntegrationSection;
