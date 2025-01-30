"use client";
import Link from "next/link";
import React, { useState } from "react";

const options = [
  { value: "Location", label: "Location" },
  { value: "Haryana", label: "Haryana" },
  { value: "Delhi", label: "Delhi" },
  { value: "Noida", label: "Noida" },
];
const options2 = [
  { value: "Department", label: "Department" },
  { value: "Engineer", label: "Engineer" },
  { value: "Management", label: "Management" },
];

const customStyles = {
  control: (base, state) => ({
    ...base,

    padding: "0.6rem",
    fontFamily: "Urbanist, sans-serif",
    fontSize: "16px",
    fontWeight: "600",

    backgroundColor: "#fff",
    borderColor: "#EAEEF4",
    borderWidth: "1.5px",
    borderRadius: "9999px",
    paddingLeft: "25px",
    paddingRight: "25px",
    boxShadow: state.isFocused ? "0 0 0 1px #EAEEF4" : "none",
    "&:hover": {
      borderColor: "#EAEEF4",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }), // Remove the default separator line
  dropdownIndicator: (base) => ({
    ...base,
    color: "#232323", // Custom arrow color
  }),
};
const customStyles2 = {
  control: (base, state) => ({
    ...base,
    height: "60px",
    padding: "7px",
    fontFamily: "Urbanist, sans-serif",
    fontSize: "11px",
    fontWeight: "600",
    color: "#00000096",
    backgroundColor: "#fff",
    borderColor: "#EAEEF4",
    borderWidth: "1.5px",
    borderRadius: "9999px",
    boxShadow: state.isFocused ? "0 0 0 1px #EAEEF4" : "none",
    "&:hover": {
      borderColor: "#EAEEF4",
    },
  }),
  indicatorSeparator: () => ({ display: "none" }), // Remove the default separator line
  dropdownIndicator: (base) => ({
    ...base,
    color: "#999", // Custom arrow color
  }),
};

const Jobs = ({ allJobs }) => {
  const [viewAll, setViewAll] = useState(false);
  const jobs = [
    {
      title: "DevOps + Customer Success Engineer",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
    {
      title: "Backend Engineer",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
    {
      title: "Full Stack Developer",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
    {
      title: "DevOps + Customer Success Engineer",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
    {
      title: "Backend Engineer",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
    {
      title: "Full Stack Developer",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
  ];
  const jobsproduct = [
    {
      title: "Product Marketing Manager",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
    {
      title: "Enterprise Account Manager",
      location: "India",
      type: "Full Time",
      link: "/company/career/detail",
    },
  ];

  const formattedJobs = allJobs?.reduce((acc, ele) => {
    const category = ele?.attributes?.career_category?.data?.attributes?.title;
    const newAcc = { ...acc };
    if (newAcc[category]) {
      newAcc[category] = [
        ...newAcc[category],
        {
          title: ele?.attributes?.title,
          slug: ele?.attributes?.slug,
          location: ele?.attributes?.country,
          type: ele?.attributes?.mode,
        },
      ];
    } else {
      newAcc[category] = [
        {
          title: ele?.attributes?.title,
          slug: ele?.attributes?.slug,
          location: ele?.attributes?.country,
          type: ele?.attributes?.mode,
        },
      ];
    }
    return newAcc;
  }, {});

  return (
    <div className="min-h-screen bg-[#F5F8FF] p-4 md:p-8 z-50 relative" id="jobs">
      <div
        className="w-[100%] h-[60px] my-5 flex justify-center items-center"
        id="careers"
      >
        {/* <div className="flex max-lg:items-center gap-4 lg:w-[80%] w-full">
          <div className="w-[24%] max-lg:hidden h-[60px]">
            <Select
              className="font-semibold text-[16px] font-urbanist leading-8 text-[#232323]"
              options={options2}
              styles={customStyles}
              defaultValue={options2[0]}
              isSearchable={false}
            />
          </div>
          <div className="w-[24%] max-lg:hidden h-[60px]">
            <Select
              className="font-semibold  text-[16px] font-urbanist leading-8 text-[#232323]"
              options={options}
              styles={customStyles}
              defaultValue={options[0]}
              isSearchable={false}
            />
          </div>

          <div className="relative lg:w-[70%] w-full h-[60px]">
            <input
              type="text"
              placeholder="Search your desired job "
              className="w-[100%] sm:text-[20px] py-[12px] pl-[67px] text-[14px] font-urbanist font-medium leading-8 bg-[#fff] border-[1.5px] border-[#EAEEF4] rounded-full focus:outline-none"
              // onChange={handleInputChange}
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
        </div> */}
      </div>

      {Object.keys(formattedJobs).map((key) => (
        <div className="max-w-[90%] mx-auto  md:p-6" key={key}>
          <h1 className="sm:text-[36px] text-[18px] flex gap-4 leading-[45px] font-semibold font-sora mb-5 sm:mb-8">
            <span>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-md:w-[28px]"
              >
                <rect
                  x="3.33594"
                  y="10.5"
                  width="33.3333"
                  height="26.6667"
                  rx="6.66667"
                  stroke="#232323"
                  stroke-width="2.5"
                />
                <path
                  d="M13.3359 10.5007V8.83398C13.3359 6.07256 15.5745 3.83398 18.3359 3.83398H21.6693C24.4307 3.83398 26.6693 6.07256 26.6693 8.83398V10.5007"
                  stroke="#232323"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <path
                  d="M3.33594 22.166H36.6693"
                  stroke="#232323"
                  stroke-width="2.5"
                  stroke-linecap="round"
                />
                <path
                  d="M23.3307 22.1673C23.3307 24.0083 21.8383 25.5007 19.9974 25.5007C18.1564 25.5007 16.6641 24.0083 16.6641 22.1673C16.6641 20.3264 18.1564 18.834 19.9974 18.834C21.8383 18.834 23.3307 20.3264 23.3307 22.1673Z"
                  fill="#232323"
                />
              </svg>
            </span>{" "}
            <span className="max-md:text-[18px]">{key}</span>
          </h1>

          <div className="space-y-4   ">
            {formattedJobs[key]
              ?.filter((item, ind) => (viewAll ? ind < jobs.length : ind < 3))
              ?.map((job, index) => (
                <div
                  key={index}
                  className=" w-[100%] border-b border-[#23232333] pb-2"
                >
                  <div className="flex justify-between items-center  sm:h-[150px] h-[70px] ">
                    <h2
                      onClick={() =>
                        (window.location.href = `/company/career/detail?slug=${job.slug}`)
                      }
                      className="text-[14px]  max-md:leading-[16px] md:text-[30px] font-semibold font-urbanist leading-9 w-[50%] text-[#232323] cursor-pointer"
                    >
                      {job.title}
                    </h2>
                    <p className="text-[12px] max-md:leading-[14px] md:text-[26px] font-normal font-urbanist leading-8 text-[#232323] w-[20%]">
                      Location - {job.location || "India"}
                    </p>

                    <p className="text-[12px] max-md:leading-[14px] md:text-[26px]  font-normal font-urbanist leading-8 text-[#232323] w-[15%] hidden md:block ">
                      {job.type || "Full Time"}
                    </p>
                    <Link href={`/company/career/detail?slug=${job.slug}`}>
                      <p className="text-blue-500 hover:underline text-xl w-[10%]">
                        <svg
                          width="24"
                          height="23"
                          viewBox="0 0 35 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M20.5786 12.3261L9.25349 12.5279L9.30204 9.46261L25.7319 9.16115L25.4387 26.0524L22.4573 26.1024L22.6529 14.4587L9.57397 27.9049L7.49967 25.7723L20.5786 12.3261Z"
                            fill="#232323"
                          />
                        </svg>
                      </p>
                    </Link>
                  </div>
                  <p className="text-[12px] max-md:leading-[14px] md:text-[26px] font-normal font-urbanist leading-8 text-[#232323] w-[15%] block md:hidden max-md:mt-[-10px] max-md:pb-[20px]">
                    {job.type}
                  </p>
                </div>
              ))}
            {/* <div className="">
            <Button
              label="View All"
              className="mt-6 mb-6 font-urbanist flex m-auto text-black border border-[#8C70D2] rounded-[50px] px-[60px] py-3 "
            />
          </div> */}
            {/* {viewAll ? (
              <div className="mt-[31px] mb-[40px] md:my-[40px] w-full items-center justify-center  flex">
                <BorderButton
                  content={"View Less"}
                  className={
                    "text-xl font-semibold leading-none text-center text-[#020103] px-[54.88px] py-[20px] rounded-[52px] max-md:px-5 bg-primary_white"
                  }
                  onClick={() => setViewAll(false)}
                />
              </div>
            ) : (
              <div className="mt-[31px] mb-[40px] md:my-[40px] w-full items-center justify-center  flex">
                <BorderButton
                  content={strapiData.sections[1].cta[0].text || "View All"}
                  className={
                    "text-xl leading-[20px] font-semibold text-center text-[#020103] px-[54.88px] py-[20px] rounded-[52px] max-md:px-5 bg-primary_white"
                  }
                  onClick={() => setViewAll(true)}
                />
              </div>
            )} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
