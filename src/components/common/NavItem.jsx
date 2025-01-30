"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import PlatformOverview from "./HeaderHoverContent/PlateformOverview/PlatformOverview";
import SolutionOverview from "./HeaderHoverContent/SolutionOverview/SolutionOverview";
import CompanyOverview from "./HeaderHoverContent/CompanyOverview/CompanyOverview";
import CustomerOverview from "./HeaderHoverContent/CustomerOverview/CustomerOverview";
import ResourceOverview from "./HeaderHoverContent/ResourceOverview/ResourceOverview";

const NavItem = ({
  navigation,
  caseStudy,
  whatsNew,
  blogs,
  ebook,
  whitePaper,
}) => {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const isActive = (path) => pathname === path;
  if (!navigation || navigation.length === 0) {
    return null;
  }
  return (
    <>
      <ul className="flex items-center gap-[30px]">
        {navigation?.map((item, index) => (
          <>
            <li
              key={index}
              className="group "
              onMouseEnter={() => {
                setHoveredItem(item?.name);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
                setHoveredIndex(null);
              }}
            >
              {item?.custom_path && (
                <Link
                  href={item?.custom_path}
                  className="relative z-[100]"
                  style={{ cursor: "pointer" }}
                >
                  <div
                    className={`flex items-center gap-2 cursor-pointer font-urbanist`}
                  >
                    {item?.name}
                    <span>
                      <FaAngleDown />
                    </span>
                  </div>
                  <div
                    className={`absolute top-[45px] ${
                      isActive(item?.custom_path)
                        ? "w-full h-[8px] bg-[#475070] border-t border-r border-l border-[#D4DEFF]"
                        : ""
                    }`}
                  ></div>
                </Link>
              )}

              {hoveredItem === "Platform" && (
                <div className="hidden absolute z-200 left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
                  <PlatformOverview
                    navChild={navigation[hoveredIndex]?.children}
                    whatsNew={whatsNew}
                    blogs={blogs}
                  />
                </div>
              )}
              {hoveredItem === "Solution" && (
                <div className=" hidden absolute z-50 left-[50%] transform translate-x-[-50%] group-hover:block pt-7 min-h-[300px]">
                  <SolutionOverview
                    navChild={navigation[hoveredIndex]?.children}
                  />
                </div>
              )}
              {hoveredItem === "Company" && (
                <div className=" hidden absolute z-50 left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
                  <CompanyOverview
                    navChild={navigation[hoveredIndex]?.children}
                    whatsNew={whatsNew}
                  />
                </div>
              )}
              {hoveredItem === "Customer" && (
                <div className=" hidden absolute z-50 left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
                  <CustomerOverview
                    navChild={navigation[hoveredIndex]?.children}
                    caseStudy={caseStudy}
                  />
                </div>
              )}
              {hoveredItem === "Resources" && (
                <div className=" hidden absolute z-50 left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
                  <ResourceOverview
                    navChild={navigation[hoveredIndex]?.children}
                    whatsNew={whatsNew}
                    blogs={blogs}
                    ebook={ebook}
                    whitePaper={whitePaper}
                  />
                </div>
              )}
            </li>
          </>
        ))}
      </ul>
    </>
  );
};

export default NavItem;
