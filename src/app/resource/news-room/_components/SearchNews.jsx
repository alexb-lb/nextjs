"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";

import Link from "next/link";
import Image from "next/image";
import {
  fetchNewsByCategoryNameClient,
  formatNews,
} from "@/utils/helpers/dataFormating.helper";

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
const NewsItem = ({
  date,
  author,
  title,
  description,
  imgsrc,
  slug,
  authorImage,
}) => (
  <div className="w-full bg-white rounded-md flex flex-col  lg:flex-row p-[11px] ">
    <div className="w-full lg:w-[60%] flex flex-col gap-5 py-[5px] px-[15px] lg:px-[31px] ">
      <div className="w-full flex  lg:flex-row gap-3 lg:gap-5 items-center">
        {authorImage && (
          <Image
            src={authorImage}
            height={40}
            width={40}
            alt="user"
            className="w-10 h-10 lg:w-[36px] lg:h-[36px]"
          />
        )}

        <div className="flex max-md:flex-col gap-1 md:gap-4">
          <p className="text-[#4B4B4B] font-urbanist text-[12px] md:text-[14px] lg:text-[16px] font-[600]">
            {author}
          </p>

          <p className="text-[#4B4B4B] font-urbanist text-[10px] md:text-[14px] lg:text-[16px] font-medium">
            {date && new Date(date).toLocaleDateString()}
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
        <Link href={`/resources/news-detail/${slug}`}>
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
    {imgsrc && (
      <Image
        loading="lazy"
        src={imgsrc}
        height={200}
        width={500}
        alt="industry"
        className="w-full max-md:rounded-[12px] lg:w-[40%] h-[200px] lg:h-[300px] rounded-2xl object-cover mt-4 lg:mt-0"
      />
    )}
  </div>
);

const SearchNews = ({ newsCategoryList }) => {
  const [tabIndexSecond, setTabIndexSecond] = useState(1);
  const [clickedviewall, setclickedviewall] = useState(false);

  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");


  

  const tabs = newsCategoryList?.map((ele, idx) => {
    return {
      id: idx + 1,
      label: ele?.attributes?.title,
    };
  });

  useEffect(() => {
    (async function () {
      const selectedTab = tabs[tabIndexSecond - 1];
      const data = await fetchNewsByCategoryNameClient(
        "news-rooms",
        selectedTab.label
      );

      const formated_date = formatNews(data?.data);

      
      const new_formated_date = formated_date.sort((a, b) => {
        const dateA = new Date(a.createdAt); 
        const dateB = new Date(b.createdAt);
        return dateB - dateA; 
      });


      setBlogs(new_formated_date);
      setSearch("");
    })();
  }, [tabIndexSecond]);



  const options = [
    { value: "dateCreated", label: "Sort by: Date Created" },
    { value: "alphabetical", label: "Alphabetical Order" },
    { value: "oldest", label: "Oldest" },
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      width: 220,
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

  const [filterSelect, setFilterSelect] = useState(options[0]);

  function filterAlpha() {
    const sortedBlogs = [...blogs].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setBlogs(sortedBlogs);
  }

  function filterDateCreated() {
    const sortedBlogs = [...blogs].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setBlogs(sortedBlogs);
  }

  function filterOldest() {
    const sortedBlogs = [...blogs].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    setBlogs(sortedBlogs);
  }

  function handleFilterChange(event) {
    switch (event.value) {
      case "alphabetical":
        return filterAlpha();
      case "dateCreated":
        return filterDateCreated();
      case "oldest":
        return filterOldest();
    }
  }

  return (
    <section className="w-full py-[40px]">
      <div className="relative w-full px-2">
        <div className="w-full md:w-[60%] mx-auto flex py-[50px] px-2 gap-5">
          <div className="relative w-full h-[60px]">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
              width={64}
              height={64}
              alt="Sortby"
            />
          </div>

          {/* <div className="w-[30%] max-lg:hidden h-[60px]">
            <Select
              options={options}
              styles={customStyles}
              defaultValue={options[0]}
              isSearchable={false}
              onChange={handleFilterChange}
            />
          </div> */}
        </div>
        {/* <div className="w-full flex justify-center overflow-hidden overflow-x-auto"> */}
        <div className="w-full max-md:w-[96%] md:md:w-[90%] mx-auto mb-2 flex items-center md:justify-center border-b border-[#A877FF] overflow-x-scroll no-scrollbar">
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
          <div className="flex flex-col gap-[22px] px-2 md:px-[62px]">
            {blogs
              ?.filter((item) =>
                item.title.toLowerCase().includes(search.toLowerCase())
              )
              ?.map((blog, index) => (
                <NewsItem
                  key={index}
                  author={blog?.author?.name}
                  authorImage={blog?.author?.image}
                  date={blog?.createdAt}
                  title={blog.title}
                  description={blog.description}
                  imgsrc={blog.image}
                  slug={blog?.slug}
                  value={filterSelect}
                />
              ))}
          </div>
        </div>
      </div>
      {/* <div className="mt-4 mb-4 md:mt-10 md:mb-10">
        <HoverBorderGradientDemo
          content={strapiData?.sections[5]?.cta[0]?.text || "View All"}
          onClick={() => {
            setclickedviewall(true);
          }}
        />
      </div> */}
    </section>
  );
};

export default SearchNews;
