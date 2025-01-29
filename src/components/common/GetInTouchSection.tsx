"use client";
import React, { useState } from "react";

import Button from "./Button";

const GetInTouchSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Request a Demo");
  const tabs = ["Request a Demo", "Become a Partner", "Careers"];

  return (
    <section className="flex overflow-hidden relative flex-col justify-center items-center self-center px-20 py-11 mt-32 w-full max-w-screen-xl min-h-[600px] rounded-[32px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebe787014f6a0bd4509348c410aa8f04cc54611dd964e581afff1f9580e1d026?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
        alt=""
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col max-w-full w-[646px]">
        <h2 className="self-center text-5xl font-semibold text-center text-black capitalize max-md:text-4xl">
          Get In Touch
        </h2>
        <div className="flex overflow-hidden flex-wrap gap-4 items-start p-2 mt-11 text-lg leading-normal text-black border border-solid border-zinc-300 rounded-[60px] max-md:mt-10 max-md:max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`gap-2 self-stretch px-2 py-4 font-semibold rounded-[60px] w-[190px] max-md:px-5 ${
                activeTab === tab ? "bg-lime-400" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <form className="flex flex-col items-center mt-11 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col items-center w-full max-w-[639px] text-zinc-500 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 items-center w-full text-lg leading-normal max-md:max-w-full">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 shrink gap-2.5 self-stretch py-5 my-auto border-b border-zinc-300 min-h-[52px] min-w-[240px]"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 shrink gap-2.5 self-stretch py-5 my-auto border-b border-zinc-300 min-h-[52px] min-w-[240px]"
              />
            </div>
            <div className="flex flex-wrap gap-10 mt-6 w-full max-md:max-w-full">
              <input
                type="email"
                placeholder="Email ID"
                className="flex-1 shrink gap-2.5 self-stretch py-4 h-full text-lg leading-normal border-b border-zinc-300 min-w-[240px] w-[84px]"
              />
              <div className="flex flex-1 shrink gap-2.5 items-center py-4 my-auto text-base border-b basis-0 border-zinc-300 min-w-[240px]">
                <div className="flex gap-1.5 items-center self-stretch my-auto w-[216px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cabfa57f026533d187ab1486f9131f7bef33648e08d4619700f00e99b4762c8?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                    alt=""
                    className="object-contain shrink-0 self-stretch w-5 aspect-square"
                  />
                  <span className="self-stretch my-auto">+91</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7dba8c5c889f4958f7ee1b1b1e6c2f6a9e0cc0047afcbceb68ed90a36c4de74e?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                    alt=""
                    className="object-contain shrink-0 self-stretch my-auto w-2.5 aspect-[1.67] stroke-[1.5px] stroke-zinc-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="grow shrink self-stretch my-auto leading-loose w-[137px] bg-transparent border-none"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 items-center mt-6 w-full text-lg leading-normal max-md:max-w-full">
              <input
                type="text"
                placeholder="Company Name"
                className="flex-1 shrink gap-2.5 self-stretch py-5 my-auto border-b border-zinc-300 min-h-[52px] min-w-[240px]"
              />
              <div className="flex flex-1 shrink gap-10 justify-between items-center self-stretch py-5 my-auto border-b basis-0 border-zinc-300 min-h-[52px] min-w-[240px]">
                <select className="self-stretch my-auto bg-transparent border-none appearance-none">
                  <option value="">Solution of Interest</option>
                  {/* Add more options here */}
                </select>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/88e84ea657ad73ff3c96245ac7a26989201b5da6c0545bd27ce6a25c897e934e?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-[2.16] stroke-[1.5px] stroke-zinc-500 w-[13px]"
                />
              </div>
            </div>
          </div>
          <Button
            label="Submit"
            className="flex flex-col mt-8 max-w-full text-xl font-semibold leading-none text-center text-white whitespace-nowrap bg-indigo-500 rounded-[50px] px-[40px] py-[20px]"
          />
        </form>
      </div>
    </section>
  );
};

export default GetInTouchSection;
