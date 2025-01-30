import ContentPage from "./ContentPage";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import Image from "next/image";

import { useEffect, useState } from "react";
import Select from "react-select";



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
const SearchPapers = ({ whitePaper }) => {
  const [viewAll, setViewAll] = useState(false);
  const [search, setSearch] = useState("");

  const [papers, setPapers] = useState();
  useEffect(() => setPapers(whitePaper), [whitePaper]);

  const [filterSelect, setFilterSelect] = useState(options[0]);

  function filterAlpha() {
    const sortedBlogs = [...papers].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setPapers(sortedBlogs);

  }

  function filterDateCreated() {
    const sortedBlogs = [...papers].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setPapers(sortedBlogs);
  }

  function filterOldest() {
    const sortedBlogs = [...papers].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    setPapers(sortedBlogs);
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
    <div>
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
      {/* <div className="pt-10">
        <h1 className="text-[28px] md:text-[48px] font-semibold text-center md:mb-6">
          {sectionData[0]?.title}
        </h1>
      </div> */}
      <div className="flex flex-nowrap md:flex-wrap max-md:px-4 md:gap-6 items-center justify-center md:justify-start md:w-[90%] md:mx-auto">
        {/* <ContentPage contentList={sectionData[1]?.cards} /> */}
        <ContentPage
          contentList={papers
            ?.filter((item) =>
              item?.attributes.title
                .toLowerCase()
                .includes(search.toLocaleLowerCase())
            )
            ?.filter((item, ind) =>
              viewAll ? ind < whitePaper.length : ind < 9
            )}
          value={filterSelect}
        />
      </div>
      <div className="p-10">
        {/* <Link href={sectionData[0]?.cta[0]?.url || "#"}> */}
        <HoverBorderGradientDemo
          //   content={sectionData[0]?.cta[0]?.text}
          content={viewAll ? "View Less" : "View All"}
          className="flex"
          onClick={() => setViewAll(!viewAll)}
        />
        {/* </Link> */}
      </div>
    </div>
  );
};
export default SearchPapers;
