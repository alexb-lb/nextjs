"use client";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Cards from "./Cards";

import { useRouter } from "next/navigation";

import Image from "next/image";
import {
  fetchResourcesByCategoryNameClient,
  formatBlogs,
} from "../../../../utils/helpers/dataFormating.helper";

// Tab Button Component
const TabButton = ({ label, isActive, onClick }) => (
  <button
    type="button"
    className={`md:gap-2.5 md:py-4 h-full  py-2 md:min-w-[200px] min-w-[130px]  ${
      isActive
        ? "font-semibold border-[#545CF6] border-b-[3px]"
        : "text-black/50"
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);



const SearchNews = ({ blogsCategoryList = [] }) => {
  const [tabIndexSecond, setTabIndexSecond] = useState(1);
  const route = useRouter();
  const [blogs, setBlogs] = useState([]);

  const [search, setSearch] = useState("");

  const tabs = blogsCategoryList?.map((ele, idx) => {
    return {
      id: idx + 1,
      label: ele?.attributes?.title,
    };
  });

  useEffect(() => {
    (async function () {
      const selectedTab = tabs[tabIndexSecond - 1];
      const data = await fetchResourcesByCategoryNameClient(
        "blogs",
        selectedTab.label
      );
      setBlogs(formatBlogs(data?.data));
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
    <section className="w-full lg:px-[80px] px-4 pt-[10px]">
      <div className="relative flex  flex-col items-center w-full">
        
        <div className="w-full md:w-[65%] mx-auto flex py-[50px] px-2 gap-5">
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

          <div className="w-[30%] max-lg:hidden h-[60px]">
            <Select
              options={options}
              styles={customStyles}
              defaultValue={options[0]}
              isSearchable={false}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <div className="w-full md:w-[98%] sm:mb-10 mb-5 flex lg:justify-between items-center border-b border-[#A877FF] overflow-x-scroll no-scrollbar">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                label={tab.label}
                isActive={tabIndexSecond === tab.id}
                onClick={() => setTabIndexSecond(tab.id)}
              />
            ))}
          </div>
        </div>

        <section className="flex flex-wrap items-stretch w-full gap-4 mb-6">
          {blogs
            ?.filter((item) =>
              item.title.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((blog, index) => (
              <div key={index} className="md:w-[32%] w-full ">

                  <Cards
                    image={blog?.image}
                    description={blog?.description}
                    title={blog?.title}
                    category={blog?.category?.title}
                    slug={blog?.slug}
                    value={filterSelect}
                  />

              </div>
            ))}
        </section>
      </div>
      
    </section>
  );
};

export default SearchNews;
