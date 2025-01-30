/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Zerotrust = ({ strapiData, imagesData }) => {
  const router = useRouter();
  const data = [
    {
      id: 1,
      icon: "/images/career/1.png", // Replace with your icon path
      title: "Customer Across Different Verticals",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
    {
      id: 2,
      icon: "/images/career/2.png", // Replace with your icon path
      title: "Growing Partner Ecosystem Across Globe",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
    {
      id: 3,
      icon: "/images/career/3.png", // Replace with your icon path
      title: "Employees Across 6 Countries",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
    {
      id: 4,
      icon: "/images/career/4.png", // Replace with your icon path
      title: "Patented Technology For Entity Resolution",
      description: "Lorem Ipsum Dolor Sit Amet, Consectetur.",
    },
  ];
  return (
    <div
      className="md:mt-1 lg:mt-[30px] lg:px-[0px] py-20 px-4 lg:pt-[20px]  pt-[20px]  bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${imagesData?.sections?.[6]?.images?.data?.[0]?.attributes?.url})`,
      }}
    >
      {/* bg-[url('/images/hero/Desktop_banner.webp')] */}
      <section className="flex flex-col  mt-[25px] self-center  max-w-full text-center w-[664px] m-auto">
        <div className="flex flex-col items-center w-full max-lg:px-[24px]">
          <div className=" font-sora  flex flex-col items-center max-w-full w-[551px]">
            <div className="text-[20px] md:para1 font-urbanist bg-gradient-to-r from-[#DABEF6] to-[#8D83F5] text-transparent bg-clip-text">
              {strapiData?.sections?.[6]?.content?.title}
            </div>
            <h1 className="title2 gradient_heading mt-4 tracking-tighter my-[10px] max-md:max-w-full ">
              {strapiData.sections[6]?.content?.description}
            </h1>
          </div>
          <p className="text-[14px] leading-[16px] md:para2 md:text-2xl font-urbanist mb-8 text-[#EAEAEA] mt-2 first-line:max-md:max-w-full">
            {strapiData.sections[6]?.content?.content}
          </p>
        </div>
        <HoverBorderGradientDemo
          content={strapiData.sections[6].cta[0].text || "Know More"}
          // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
          onClick={() =>
            strapiData.sections[6].cta[0].url &&
            router.push(strapiData.sections[6].cta[0].url)
          }
        />
      </section>
      <div className=" mt-8 w-[100%] ">
        <div className=" mx-auto md:px-4">
          <div className="flex flex-wrap max-md:gap-[7px] gap-[21px] justify-center  ">
            {strapiData.sections[7].cards.map((item, index) => (
              <div
                className="flex flex-col lg:w-[302px] w-[47%] max-md:ml-0 md:mb-2"
                key={index}
              >
                {/* w-[168px] */}
                <div className="flex overflow-hidden relative flex-col grow justify-start px-4 py-6 w-full capitalize rounded-3xl bg-[#ffffff1f] bg-center bg-cover bg-no-repeat max-md:mt-0">
                  <div className="flex flex-col max-w-full w-[272px]">
                    {imagesData?.sections?.[7]?.cards?.[index]?.image?.data
                      ?.attributes?.url && (
                      <Image
                        loading="lazy"
                        // src={`/images/career/${index + 1}.png` || null}
                        src={
                          imagesData?.sections?.[7]?.cards?.[index]?.image?.data
                            ?.attributes?.url
                        }
                        alt=""
                        width={60}
                        height={60}
                        className="object-contain rounded-xl aspect-square lg:w-[60px] w-[48px]"
                      />
                    )}

                    <div className="flex flex-col mt-6 w-full">
                      <div className="small_text font-urbanist text-light_purple">
                        {item.description}
                      </div>
                      <div className="para3A mt-6 lg:mt-4 text-primary_white font-sora ">
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zerotrust;
