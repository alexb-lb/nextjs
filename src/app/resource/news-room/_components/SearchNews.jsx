"use client";
import React, { useState } from "react";
import Select from "react-select";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Link from "next/link";
import Image from "next/image";

// Tab Button Component
const TabButton = ({ label, isActive, onClick }) => (
  <button
    type="button"
    className={`md:py-4 py-2 w-[300px] max-md:min-w-[200px] h-full mb-0 ${
      isActive
        ? "font-semibold border-[#545CF6] border-b-[2.5px]"
        : "text-black/50"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

// News Item Component
const NewsItem = ({ date, author, title, description, imgsrc }) => (
  <div className="w-full bg-white rounded-md flex  lg:flex-row p-[10px] ">
    <div className="w-full flex flex-col gap-5 py-[5px] px-[15px] lg:px-[31px] ">
      <div className="w-full flex  lg:flex-row gap-3 lg:gap-5 items-center">
        <img
          src="/images/resource/user.png"
          alt="user"
          className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
        />
        <div className="flex max-md:flex-col gap-1 md:gap-4">
          <p className="text-[#4B4B4B] font-urbanist text-[12px] md:text-[14px] lg:text-[16px] font-[600]">
            {author}
          </p>

          <p className="text-[#4B4B4B] font-urbanist text-[10px] md:text-[14px] lg:text-[16px] font-medium">
            {date}
          </p>
          <p className="text-[#4B4B4B] font-urbanist text-[14px] lg:text-[16px] font-medium hidden md:block">
            4 min read
          </p>
        </div>
      </div>
      <p className="text-[#4B4B4B] font-urbanist text-[12px] md:text-[14px] lg:text-[16px] font-[600] block md:hidden">
        May 21, 2024 | 4 min read
      </p>
      <div className="w-full flex flex-col gap-2">
        <p className="text-[#000000] font-urbanist text-[24px] lg:text-[32px] font-[700] max-md:font-sora max-md:text-[16px] max-md:leading-[20px]">
          {title}
        </p>
        <p className="text-[#000000] font-urbanist text-[16px] lg:text-[18px] font-[400] lg:max-w-[594px] max-md:text-[#808080] max-md:text-[12px] max-md:leading-[14px]">
          {description}
        </p>
      </div>
      <div className="flex gap-2 text-[#545CF6] text-[12px] md:text-[16px] lg:text-[18px] font-[600] font-urbanist cursor-pointer">
        <Link href={"/resource/news-details"}>
          {" "}
          <span className="self-stretch my-auto">Learn More</span>
        </Link>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/081ae5060143a0274d3d2f0984290f92d569b8f66cb6f62d1983e00c135fc020?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.0] w-[16px] lg:w-[18px]"
        />
      </div>
    </div>
    <img
      loading="lazy"
      src={imgsrc}
      alt="industry"
      className="w-[50%] max-md:rounded-[12px] lg:w-[50%] object-cover mt-4 lg:mt-0"
    />
  </div>
);

const SearchNews = () => {
  const [tabIndexSecond, setTabIndexSecond] = useState(1);
  const [clickedviewall, setclickedviewall] = useState(false);

  const options = [
    { value: "dateCreated", label: "Sort by: Date Created" },
    { value: "alphabetical", label: "Alphabetical Order" },
    { value: "oldest", label: "Oldest" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      // width: 200,
      padding: "0.6rem",
      fontFamily: "Urbanist, sans-serif",
      fontSize: "14px",
      fontWeight: "600",
      backgroundColor: "#fff",
      borderColor: "#EAEEF4",
      borderRadius: "9999px",
      boxShadow: state.isFocused ? "0 0 0 1px #EAEEF4" : "none",
      "&:hover": { borderColor: "#EAEEF4" },
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (base) => ({ ...base, color: "#999" }),
  };

  const tabs = [
    { id: 1, label: "All" },
    { id: 2, label: "Privacy Bites" },
    { id: 3, label: "US Privacy Law" },
    { id: 4, label: "GDPR" },
    { id: 5, label: "Quebec Law 25" },
    { id: 6, label: "International Privacy Law" },
  ];

  return (
    <section className="w-full py-[40px]">
      <div className="relative w-full px-2">
        <div className="w-[60%] mx-auto flex py-[50px] px-2 gap-5">
          <div className="relative w-full h-[60px]">
            <input
              type="text"
              placeholder="Search blog with keywords"
              className="w-[100%] text-[20px] py-[12px] pl-[67px]  font-urbanist font-medium leading-8 bg-[#fff] border-[1.5px] border-[#EAEEF4] rounded-full focus:outline-none max-md:text-[14px]"
            />
            <div className="absolute inset-y-0 left-[18px]  flex items-center pointer-events-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.5 18.5L22 22M21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21C16.7467 21 21 16.7467 21 11.5Z"
                  stroke="#2D323E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="lg:hidden">
            <Image
              src="/images/solution/integration/Sortby.svg"
              width={62}
              height={62}
              alt="Sortby"
            />
          </div>

          <div className="w-[30%] max-lg:hidden h-[60px]">
            <Select
              options={options}
              styles={customStyles}
              defaultValue={options[0]}
              isSearchable={false} // Disable search functionality if not needed
            />
          </div>
        </div>
        {/* <div className="w-full flex justify-center overflow-hidden overflow-x-auto"> */}
        <div className="w-full max-md:w-[96%] md:w-[91%] mx-auto mb-2 flex items-center md:justify-center border-b border-[#A877FF] overflow-x-scroll no-scrollbar">
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              label={tab.label}
              isActive={tabIndexSecond === tab.id}
              onClick={() => setTabIndexSecond(tab.id)}
            />
          ))}
        </div>
        {/* </div> */}

        <div className="w-full py-8">
          {tabIndexSecond === 1 ||
          tabIndexSecond === 2 ||
          tabIndexSecond === 3 ||
          tabIndexSecond === 4 ||
          tabIndexSecond === 5 ||
          tabIndexSecond === 6 ? (
            <div className="flex flex-col gap-[22px] px-2 md:px-[62px]">
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                imgsrc="/images/resource/industry.png"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                imgsrc="/images/resource/industry2.png"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry3.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                imgsrc="/images/resource/industry.png"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                imgsrc="/images/resource/industry2.png"
              />
              {/* {clickedviewall && ( */}
              {false && (
                <>
                  <NewsItem
                    author="Sharon Farber"
                    date="May 21, 2024"
                    title="AI and Employee Privacy"
                    description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                    imgsrc="/images/resource/industry.png"
                  />
                  <NewsItem
                    author="Sharon Farber"
                    date="May 21, 2024"
                    title="AI and Employee Privacy"
                    description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                    imgsrc="/images/resource/industry2.png"
                  />
                  <NewsItem
                    author="Sharon Farber"
                    date="May 21, 2024"
                    title="AI and Employee Privacy"
                    imgsrc="/images/resource/industry3.png"
                    description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                  />
                </>
              )}
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-4 mb-4 md:mt-10 md:mb-10">
        <HoverBorderGradientDemo
          content={"View All"}
          onClick={() => {
            setclickedviewall(true);
          }}
        />
      </div>
    </section>
  );
};

export default SearchNews;
