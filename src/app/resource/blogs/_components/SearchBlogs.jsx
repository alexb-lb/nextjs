"use client";
import React, { useState } from "react";
import Select from "react-select";
import Cards from "./Cards";
import HoverBorderGradientDemo from "@/components/common/HoverBorderGradientDemo";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

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

// News Item Component
const NewsItem = ({ category, title, description, image }) => (
  // <div className="max-md:max-w-full">
  //   <div className="max-md:w-full">
  //     <div className="">
  //       <img
  //         loading="lazy"
  //         src={image}
  //         alt={title}
  //         className="object-contain w-full aspect-[1.72] max-md:max-w-full"
  //       />
  //     </div>
  //     <div className="flex flex-col px-6 pt-6 pb-2 w-full leading-7 text-neutral-900 max-md:px-5">
  //       <h3 className="para2 text-[#151617] font-sora font-semibold tracking-tight">
  //         {title}
  //       </h3>
  //       <p className="mt-2 link_text text-[#151617] font-urbanist font-normal text-base">
  //         {description}
  //       </p>
  //     </div>
  //     <div className="flex gap-10 justify-between items-center px-6 py-6 w-full min-h-[80px] max-md:px-5">
  //       <div className="self-stretch px-[6.5px] py-[5px] my-auto text-sm font-medium tracking-tight leading-none text-[#7B808A] rounded bg-[#F5F7FA] w-[107px]">
  //         {category}
  //       </div>
  //       <div className="mt-[30px]">
  //         <HoverBorderGradientDemo contain={"View All"} />
  //       </div>
  //       <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#545CF6] font-urbanist">
  //         <span className="self-stretch my-auto">Read More</span>
  //         <img
  //           loading="lazy"
  //           src="https://cdn.builder.io/api/v1/image/assets/TEMP/081ae5060143a0274d3d2f0984290f92d569b8f66cb6f62d1983e00c135fc020?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
  //           alt=""
  //           className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[23px]"
  //         />
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div className="flex flex-col overflow-hidden flex-1 shrink self-stretch pb-6 my-auto bg-white rounded-2xl basis-0 min-w-[240px]">
    <div className="flex flex-col overflow-hidden w-full rounded-xl">
      <img
        loading="lazy"
        src={image}
        alt={title}
        className="object-contain w-full aspect-[1.72]"
      />
    </div>
    <div className="flex overflow-hidden flex-col px-6 pt-6 pb-2 w-full leading-7 text-neutral-900 max-md:px-5">
      <h3 className="para2 text-[#151617] font-sora font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 link_text text-[#151617] font-urbanist font-normal text-base">
        {description}
      </p>
    </div>
    <div className="flex gap-10 justify-between items-center px-6 py-6 w-full min-h-[80px] max-md:px-5">
      <div className="self-stretch px-[6.5px] py-[5px] my-auto text-sm font-medium tracking-tight leading-none text-[#7B808A] rounded bg-[#F5F7FA] w-[107px]">
        {category}
      </div>
      <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#545CF6] font-urbanist">
        <span
          className="self-stretch my-auto"
          onClick={() => route.push("/resource/news-details")}
        >
          Read More
        </span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/081ae5060143a0274d3d2f0984290f92d569b8f66cb6f62d1983e00c135fc020?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[23px]"
        />
      </div>
    </div>
  </div>
);

const SearchNews = () => {
  const [tabIndexSecond, setTabIndexSecond] = useState(1);
  const route = useRouter();

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
    <section className="w-full lg:px-[80px] px-4 pt-[10px]">
      <div className="relative flex  flex-col items-center w-full">
        <div className="w-full flex  items-center justify-center sm:py-[50px] py-[30px] px-2 md:px-[80px] gap-5">
          <div className="relative lg:w-[68%] w-full h-[60px]">
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

        <div className="">
          {tabIndexSecond === 1 && (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 px-4 mb-4">
                <Cards
                  image="/images/resource/industry.png"
                  description="We're thrilled to share that Dig has been named an
                    outperformer in GigaOm's "
                  title="Dig Security Named"
                  category="Industry News"
                />
                <Cards
                  image="/images/resource/industry.png"
                  description="We're thrilled to share that Dig has been named an
                    outperformer in GigaOm's "
                  title="Dig Security Named"
                  category="Industry News"
                />
                <Cards
                  image="/images/resource/industry.png"
                  description="We're thrilled to share that Dig has been named an
                    outperformer in GigaOm's "
                  title="Dig Security Named"
                  category="Industry News"
                />
              </div>
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 px-4 mb-4">
                <div className="md:basis-3/5">
                  <div className="flex flex-col flex-1 shrink self-stretch pb-6 my-auto bg-white rounded-2xl">
                    <div className="flex flex-col w-full rounded-xl">
                      <img
                        loading="lazy"
                        src="/images/resource/industry.png"
                        alt="Dig Security Named"
                        className="object-cover w-full h-[240px] rounded-xl"
                      />
                    </div>
                    <div className="flex overflow-hidden flex-col px-6 pt-6 pb-2 w-full leading-7 text-neutral-900 max-md:px-5">
                      <h3 className="para2 text-[#151617] font-sora font-semibold tracking-tight">
                        Dig Security Named
                      </h3>
                      <p className="mt-2 link_text text-[#151617] font-urbanist font-normal text-base">
                        We&apos;re thrilled to share that Dig has been named an
                        outperformer in GigaOm&apos;s
                      </p>
                    </div>
                    <div className="flex gap-10 justify-between items-center px-6 py-6 w-full min-h-[80px] max-md:px-5">
                      <div className="self-stretch px-[6.5px] py-[5px] my-auto text-sm font-medium tracking-tight leading-none text-[#7B808A] rounded bg-[#F5F7FA] w-[107px]">
                        Industry News
                      </div>
                      <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#545CF6] font-urbanist">
                        <span
                          className="self-stretch my-auto"
                          onClick={() => route.push("/resource/news-details")}
                        >
                          Read More
                        </span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/081ae5060143a0274d3d2f0984290f92d569b8f66cb6f62d1983e00c135fc020?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                          alt=""
                          className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[23px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:basis-2/5">
                  <div className="flex flex-col overflow-hidden flex-1 shrink self-stretch pb-6 my-auto bg-white rounded-2xl basis-0 min-w-[240px]">
                    <div className="flex flex-col overflow-hidden w-full rounded-xl">
                      <img
                        loading="lazy"
                        src="/images/resource/industry.png"
                        alt="Dig Security Named"
                        className="object-cover w-full h-[240px]"
                      />
                    </div>
                    <div className="flex overflow-hidden flex-col px-6 pt-6 pb-2 w-full leading-7 text-neutral-900 max-md:px-5">
                      <h3 className="para2 text-[#151617] font-sora font-semibold tracking-tight">
                        Dig Security Named
                      </h3>
                      <p className="mt-2 link_text text-[#151617] font-urbanist font-normal text-base">
                        We&apos;re thrilled to share that Dig has been named an
                        outperformer in GigaOm&apos;s
                      </p>
                    </div>
                    <div className="flex gap-10 justify-between items-center px-6 py-6 w-full min-h-[80px] max-md:px-5">
                      <div className="self-stretch px-[6.5px] py-[5px] my-auto text-sm font-medium tracking-tight leading-none text-[#7B808A] rounded bg-[#F5F7FA] w-[107px]">
                        Industry News
                      </div>
                      <div className="flex gap-2 justify-center items-center self-stretch pb-2 my-auto para1 font-semibold text-[#545CF6] font-urbanist">
                        <span
                          className="self-stretch my-auto"
                          onClick={() => route.push("/resource/news-details")}
                        >
                          Read More
                        </span>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/081ae5060143a0274d3d2f0984290f92d569b8f66cb6f62d1983e00c135fc020?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                          alt=""
                          className="object-contain shrink-0 self-stretch my-auto aspect-[1.15] w-[23px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 px-4 mb-4">
                <Cards
                  image="/images/resource/industry.png"
                  description="We're thrilled to share that Dig has been named an
                    outperformer in GigaOm's "
                  title="Dig Security Named"
                  category="Industry News"
                />
                <Cards
                  image="/images/resource/industry.png"
                  description="We're thrilled to share that Dig has been named an
                    outperformer in GigaOm's "
                  title="Dig Security Named"
                  category="Industry News"
                />
                <Cards
                  image="/images/resource/industry.png"
                  description="We're thrilled to share that Dig has been named an
                    outperformer in GigaOm's "
                  title="Dig Security Named"
                  category="Industry News"
                />
              </div>
            </div>
          )}

          {tabIndexSecond === 2 && (
            <div className="flex flex-wrap items-center justify-between gap-4 px-4 mb-4">
              <Cards
                image="/images/resource/industry.png"
                description="We're thrilled to share that Dig has been named an
                outperformer in GigaOm's "
                title="Dig Security Named"
                category="Industry News"
              />
              <Cards
                image="/images/resource/industry.png"
                description="We're thrilled to share that Dig has been named an
                outperformer in GigaOm's "
                title="Dig Security Named"
                category="Industry News"
              />
              <Cards
                image="/images/resource/industry.png"
                description="We're thrilled to share that Dig has been named an
                outperformer in GigaOm's "
                title="Dig Security Named"
                category="Industry News"
              />
            </div>
          )}
          {tabIndexSecond === 3 && (
            <div className="flex flex-wrap items-center justify-between gap-4 px-4">
              <Cards
                image="/images/resource/industry.png"
                description="We're thrilled to share that Dig has been named an
                  outperformer in GigaOm's "
                title="Dig Security Named"
                category="Dig Security"
              />
              <Cards
                image="/images/resource/industry.png"
                description="We're thrilled to share that Dig has been named an
                  outperformer in GigaOm's "
                title="Dig Security Named"
                category="Dig Security"
              />
              <Cards
                image="/images/resource/industry.png"
                description="We're thrilled to share that Dig has been named an
                  outperformer in GigaOm's "
                title="Dig Security Named"
                category="Dig Security"
              />
            </div>
          )}
          {tabIndexSecond === 4 && (
            <div className="flex flex-wrap items-center justify-between gap-[22px] px-2 md:px-[60px]">
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
            </div>
          )}
          {tabIndexSecond === 5 && (
            <div className="flex flex-wrap items-center justify-between gap-[22px] px-2 md:px-[60px]">
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
            </div>
          )}
          {tabIndexSecond === 6 && (
            <div className="flex flex-wrap items-center justify-between  gap-[22px] px-2 md:px-[60px]">
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry2.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry2.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
              <NewsItem
                author="Sharon Farber"
                date="May 21, 2024"
                title="AI and Employee Privacy"
                imgsrc="/images/resource/industry2.png"
                description="AI technologies like ChatGPT are becoming very common in workplaces, making tasks easier. However, they can also pose privacy problems."
                category="Dig Security"
              />
            </div>
          )}
        </div>
      </div>
      <div className="sm:mt-[30px] sm:mb-[70px] mb-[35px] mt-[16px] ">
        <Link href={"/resource/blogs"}>
          <HoverBorderGradientDemo
            content="View All"
            onClick={() => route.push("/resource/blogs")}
          />
        </Link>
      </div>
    </section>
  );
};

export default SearchNews;
