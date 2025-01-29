"use client";
import Image from "next/image";
import React, { useRef } from "react";
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
    padding: "0.6rem ",
    fontFamily: "Urbanist, sans-serif",
    fontSize: "14px",
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

const integrations = [
  {
    id: "m365-suite",
    title: "M365",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int1.svg",
    reverse: false,
  },
  {
    id: "suite-google",
    title: "SuiteGoogle",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int2.svg",
    reverse: true,
  },
  {
    id: "gsuite",
    title: "Gsuite",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: false,
  },
  {
    id: "sql-database",
    title: "SQL Databases",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int1.svg",
    reverse: true,
  },
  {
    id: "nosql-database",
    title: "NoSQL Databases",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int2.svg",
    reverse: false,
  },
  {
    id: "datawarehouses",
    title: "Datawarehouses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: true,
  },

  {
    id: "file-apps",
    title: "File Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int1.svg",
    reverse: false,
  },
  {
    id: "email-apps",
    title: "Email Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int2.svg",
    reverse: true,
  },
  {
    id: "messaging-apps",
    title: "Messaging Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: false,
  },

  {
    id: "web-apps",
    title: "Web Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int1.svg",
    reverse: true,
  },
  {
    id: "onprem-storage",
    title: "On-prem Storage",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int2.svg",
    reverse: false,
  },
  {
    id: "ticketing-system",
    title: "Ticketing Systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: true,
  },
  {
    id: "logging-system",
    title: "Logging Systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: false,
  },
  {
    id: "crm-system",
    title: "CRM Systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: true,
  },
  {
    id: "hr-system",
    title: "HR Systems",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: false,
  },
  {
    id: "generic-apps",
    title: "Generic Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
    image: "/images/solution/integration/int3.svg",
    reverse: true,
  },
];

const DetailSection = () => {
  const cardRefs = useRef([]);

  const scrollToCard = (cardId) => {
    const cardElement = cardRefs.current[cardId];
    if (cardElement) {
      cardElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value.toLowerCase();
    const cardIndex = integrations.findIndex((card) =>
      card.title.toLowerCase().includes(inputValue)
    );
    if (cardIndex >= 0) {
      scrollToCard(cardIndex);
    }
  };

  return (
    <section className="mt-[52px] md:mt-[108px] pb-[67px] flex flex-col items-center">
      <div className="w-[100%] h-[60px] flex justify-center items-center">
        <div className="flex gap-5 max-lg:items-center lg:w-[70%] w-full">
          <div className="relative lg:w-[68%] w-full h-[60px]">
            <input
              type="text"
              placeholder="Search the blog with keywords"
              className="w-[100%] text-[20px] py-[12px] pl-[67px]  font-urbanist font-medium leading-8 bg-[#fff] border-[1.5px] border-[#EAEEF4] rounded-full focus:outline-none max-md:text-[14px]"
              onChange={handleInputChange}
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
              width={52}
              height={52}
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
      </div>

      {integrations.map((integration, index) => (
        // <IntegrationBox  key={index} {...integration} />
        <div
          key={integration.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className={`flex max-lg:flex-col lg:gap-[88px] gap-4 items-center lg:mt-[100px] mt-10 max-lg:text-center ${
            integration.reverse ? "flex-row-reverse" : ""
          }`}
          id={integration.id}
        >
          <div className="lg:w-[542px] w-full">
            <h2 className="text-[28px] leading-[35px] md:title2 font-sora font-semibold">
              {integration.title}
            </h2>
            <p className="font-urbanist text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[#444444] lg:my-[32px] mt-4">
              {integration.description}
            </p>
          </div>
          <div className=" lg:w-[649px] w-full lg:h-[315px] rounded-[16px] overflow-hidden">
            <img
              loading="lazy"
              src={integration.image}
              alt={integration.title}
              className=" min-h-[315px] min-w-full object-cover"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default DetailSection;
