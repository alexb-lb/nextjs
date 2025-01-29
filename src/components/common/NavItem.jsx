"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaAngleDown } from "react-icons/fa6";
import PlatformOverview from "./HeaderHoverContent/PlateformOverview/PlatformOverview";
import SolutionOverview from "./HeaderHoverContent/SolutionOverview/SolutionOverview";
import CompanyOverview from "./HeaderHoverContent/CompanyOverview/CompanyOverview";
import CustomerOverview from "./HeaderHoverContent/CustomerOverview/CustomerOverview";
import ResourceOverview from "./HeaderHoverContent/ResourceOverview/ResourceOverview";

const NavItem = ({ label, hasDropdown, link = "#" }) => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
  return (
    <>
      <ul className="flex items-center gap-[30px]">
        <li className="group">
          <Link href="/platform" className="relative z-[100]">
            <div
              className={`flex items-center gap-2 cursor-pointer font-urbanist`}
            >
              Platform
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className={`absolute top-[45px] ${
                isActive("/platform")
                  ? "w-full h-[8px] bg-[#475070] border-t border-r border-l border-[#D4DEFF]"
                  : ""
              }`}
            ></div>
          </Link>
          <div className=" hidden absolute z-50 left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
            <PlatformOverview />
          </div>
        </li>
        <li className=" group ">
          <Link href="/solution" className="relative">
            <div className="flex items-center gap-2 cursor-pointer font-urbanist">
              Solutions
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className={`absolute top-[45px] ${
                isActive("/solution")
                  ? "w-full h-[7px] bg-[#475070] border-t border-r border-l border-[#D4DEFF]"
                  : ""
              }`}
            ></div>
          </Link>
          <div className=" hidden absolute left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
            <SolutionOverview />
          </div>
        </li>
        <li className=" group ">
          <Link href="/company" className="relative">
            <div className="flex items-center gap-2 cursor-pointer font-urbanist">
              Company
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className={`absolute top-[45px] ${
                isActive("/company")
                  ? "w-full h-[7px] bg-[#475070] border-t border-r border-l border-[#D4DEFF]"
                  : ""
              }`}
            ></div>
          </Link>
          <div className=" hidden absolute left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
            <CompanyOverview />
          </div>
        </li>
        <li className=" group ">
          <Link href={"/customer"} className="relative">
            <div className="flex items-center gap-2 cursor-pointer font-urbanist">
              Customer
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className={`absolute top-[45px] ${
                isActive("/customer")
                  ? "w-full h-[7px] bg-[#475070] border-t border-r border-l border-[#D4DEFF]"
                  : ""
              }`}
            ></div>
          </Link>
          <div className=" hidden absolute left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
            <CustomerOverview />
          </div>
        </li>

        <li className=" group ">
          <Link href={"/resource"} className="relative">
            <div className="flex items-center gap-2 cursor-pointer font-urbanist">
              Resources
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className={`absolute top-[45px] ${
                isActive("/resource")
                  ? "w-full h-[7px] bg-[#475070] border-t border-r border-l border-[#D4DEFF]"
                  : ""
              }`}
            ></div>
          </Link>
          <div className=" hidden absolute left-[50%] transform translate-x-[-50%] group-hover:block pt-7">
            <ResourceOverview />
          </div>
        </li>
      </ul>
    </>
  );
};

export default NavItem;
