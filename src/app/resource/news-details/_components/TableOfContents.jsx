"use client";
import React, { useState,useEffect } from "react";

const tableOfContents = [
  { title: "Introduction" },
  { title: "Existing Threats and Vulnerabilities" },
  { title: "Addressing Threats" },
  { title: "Third party Risk Management" },
  { title: "CRM Tools" },
];

function TableOfContents({divWidth}) {
  console.log(divWidth)
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const [divWidth, setDivWidth] = useState(10);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = window.scrollY;
  //     const newWidth = Math.min(30, 10 + scrollPosition / 100);
  //     setDivWidth(newWidth);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleItemClick = (index) => {
  //   setSelectedIndex(index); // Set the clicked item index
  // };

  return (
    <div className="flex overflow-hidden flex-col px-7 py-11 mt-4 w-full bg-white rounded-2xl shadow-[0px_12px_45px_rgba(35,35,35,0.06)] max-md:px-5 max-md:mt-10">
      <div className="flex flex-col w-full">
        <div className="flex gap-5 items-center self-start text-2xl font-semibold text-black">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e78f644c8edb8e984a7155de3097a64605fb11558a64290898a284d8c4da4f29?placeholderIfAbsent=true&apiKey=1abc4d0464e34738b1ac60d620a89887"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
          />
          <h2 className="self-stretch my-auto">Table of Contents</h2>
        </div>
        <div className="mt-9 w-full border-2 border-indigo-500 border-solid min-h-[2px]" />
        <nav className="mt-9 text-xl">
          <ul className="list-disc space-y-4 px-4">
            {tableOfContents.map((item, index) => (
              <li
                key={index}
                className={
                  selectedIndex === index
                    ? "font-bold cursor-pointer"
                    : "font-normal cursor-pointer text-black/80"
                }
                onClick={() => handleItemClick(index)} // Handle click event
              >
                {item.title}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="self-start mt-12 text-sm font-semibold text-neutral-500 max-md:mt-10">
        8 min read
      </div>
      <div className=" w-[100%]  mt-3 rounded-2xl border border-solid border-zinc-300 overflow-hidden  ">
        <div className=" h-4 rounded-3xl bg-[#545CF6] " style={{ width: `${(Math.floor(divWidth))*3.333}%` }}  />
      </div>
    </div>
  );
}

export default TableOfContents;
