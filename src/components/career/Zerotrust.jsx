/* eslint-disable react/jsx-key */
"use client";
import React from "react";
import HoverBorderGradientDemo from "../common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";

const Zerotrust = () => {
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
    <div className="md:mt-1 lg:mt-[30px] lg:px-[0px] py-20 px-4 lg:pt-[20px]  pt-[20px] bg-[url('/images/company/hero_bg.svg')] bg-cover bg-center bg-no-repeat">
      <section className="flex flex-col  mt-[25px] self-center  max-w-full text-center w-[664px] m-auto">
        <div className="flex flex-col items-center w-full max-lg:px-[24px]">
          <div className=" font-sora  flex flex-col items-center max-w-full w-[551px]">
            <div className="text-[20px] md:para1 font-urbanist bg-gradient-to-r from-[#DABEF6] to-[#8D83F5] text-transparent bg-clip-text">
              Powered by Generative AI
            </div>
            <h1 className="title2 gradient_heading mt-4 tracking-tighter my-[10px] max-md:max-w-full ">
              Zero Trust <br /> Data Protection
            </h1>
          </div>
          <p className="text-[14px] leading-[16px] md:para2 font-urbanist mb-8 text-[#EAEAEA] mt-2 first-line:max-md:max-w-full">
            LightBeam.ai ensures secure data across locations, maintaining
            control, compliance, and privacy for all data types, enabling a
            zero-trust data protection approach.
          </p>
        </div>
        <HoverBorderGradientDemo
          content="Know More"
          // className="bg-indigo-500 text-white mt-3.5 px-[40px] py-[20px] rounded-[50px]"
          onClick={() => router.push("/company")}
        />
      </section>
      <div className=" mt-8 w-[100%] ">
        <div className=" mx-auto md:px-4">
          <div className="flex flex-wrap max-md:gap-[7px] gap-[21px] justify-center  ">
            {data.map((item) => (
              <div className="flex flex-col lg:w-[302px] w-[47%] max-md:ml-0 md:mb-2">
                {/* w-[168px] */}
                <div className="flex overflow-hidden relative flex-col grow justify-center px-4 py-6 w-full capitalize rounded-3xl bg-[#ffffff1f] bg-center bg-cover bg-no-repeat max-md:mt-0">
                  <div className="flex flex-col max-w-full w-[272px]">
                    <img
                      loading="lazy"
                      src={item.icon}
                      alt=""
                      className="object-contain rounded-xl aspect-square lg:w-[60px] w-[48px]"
                    />
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
