"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import HoverBorderGradientDemo from "./HoverBorderGradientDemo";
import Button from "./Button";
import Link from "next/link";

import PlatformMenu from "./HeaderHoverContent/mobile/PlatformMenu";
import SolutionMenu from "./HeaderHoverContent/mobile/SolutionMenu";
import CompanyMenu from "./HeaderHoverContent/mobile/CompanyMenu";
import CoustmerMenu from "./HeaderHoverContent/mobile/CoustmerMenu";
import ResourceMenu from "./HeaderHoverContent/mobile/ResourceMenu";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [navMenu, setNavMenu] = useState(0);
  const changeNavMenu = (step) => {
    setNavMenu(step);
  };
  const handleCloseNavbar = () => {
    setShowNav(false);
    setNavMenu(0);
  };

  return (
    <>
      <header className="hidden lg:flex overflow-hidden items-center justify-between gap-[150px] p-2.5 w-full bg-[#13111E]  rounded-[60px] shadow-[2px_4px_14px_rgba(0,0,0,0.05)] text-primary_white">
        <Link href="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e12b969f5b2e3cb9845a7587987edd0c8237c7f64216c73c0c8987dad50b0e1?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
            alt="Company Logo"
            className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[5.13] w-[205px]"
          />
        </Link>
        <nav className="flex z-[100] flex-wrap gap-8 justify-center items-center self-stretch my-auto text-base whitespace-nowrap bg-blend-difference min-w-[240px] max-md:max-w-full">
          <NavItem />
        </nav>
        <Link href="/contact">
          <Button
            label="Try Demo"
            className="self-stretch  py-5 my-auto text-xl font-semibold leading-none bg-indigo-500 rounded-[50px] w-[183px] "
          />
          {/* <HoverBorderGradientDemo
            content="Try Demo"
            className="self-stretch  py-5 px-[46px] font-urbanist my-auto tracking-[0.4px] text-xl font-semibold leading-none  rounded-[50px] "
          /> */}
        </Link>
      </header>
      <header className="flex lg:hidden w-full relative">
        {showNav ? (
          <>
            <section className="w-full h-screen fixed top-0 left-0 z-50 bg-primary_white px-[16px] pt-[24px] overflow-y-scroll">
              {/* mobile navbar  */}
              <div className="w-full  flex justify-between items-center bg-[#13111E] rounded-[60px] p-[12px]">
                <Link href="/">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e12b969f5b2e3cb9845a7587987edd0c8237c7f64216c73c0c8987dad50b0e1?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                    alt="Company Logo"
                    className="object-contain z-0 shrink-0 self-stretch my-auto w-[108px] h-[24px]"
                  />
                </Link>
                <div className="flex gap-[8px] items-center">
                  <Link href="/contact">
                    {/* <Button
                      label="Try Demo"
                      className="self-stretch  py-[11px] my-auto text-[16px] leading-[20px] font-semibold font-urbanist text-white bg-indigo-500 rounded-[50px] w-[120px] "
                    /> */}
                    <HoverBorderGradientDemo
                      content="Try Demo"
                      className="self-stretch   my-auto text-[16px] leading-[20px] font-semibold font-urbanist text-white bg-indigo-500 rounded-[50px] py-[11px] px-[30px] h-[46px]"
                    />
                  </Link>
                  <div>
                    <img
                      loading="lazy"
                      src="/images/navbar/close.svg"
                      alt=""
                      onClick={handleCloseNavbar}
                    />
                  </div>
                </div>
              </div>
              {/* mobile navbar content  */}
              <div className=" mt-[47px] font-sora font-semibold text-[16px] leading-[22px] ">
                {navMenu === 0 && (
                  <>
                    <div
                      className="w-full flex justify-between items-center"
                      onClick={() => changeNavMenu(1)}
                    >
                      <h5 className="uppercase">Platform</h5>
                      <img
                        loading="lazy"
                        src="/images/navbar/menu_right.svg"
                        alt=""
                      />
                    </div>
                    <div
                      className="flex justify-between items-center mt-[35px]"
                      onClick={() => changeNavMenu(2)}
                    >
                      <h5 className="uppercase">Solution</h5>
                      <img
                        loading="lazy"
                        src="/images/navbar/menu_right.svg"
                        alt=""
                      />
                    </div>
                    <div
                      className="flex justify-between items-center mt-[35px]"
                      onClick={() => changeNavMenu(3)}
                    >
                      <h5 className="uppercase">Company</h5>
                      <img
                        loading="lazy"
                        src="/images/navbar/menu_right.svg"
                        alt=""
                      />
                    </div>
                    <div
                      className="flex justify-between items-center mt-[35px]"
                      onClick={() => changeNavMenu(4)}
                    >
                      <h5 className="uppercase">Customer</h5>
                      <img
                        loading="lazy"
                        src="/images/navbar/menu_right.svg"
                        alt=""
                      />
                    </div>
                    <div
                      className="flex justify-between items-center mt-[35px]"
                      onClick={() => changeNavMenu(5)}
                    >
                      <h5 className="uppercase">Resource</h5>
                      <img
                        loading="lazy"
                        src="/images/navbar/menu_right.svg"
                        alt=""
                      />
                    </div>
                  </>
                )}
                {navMenu === 1 && (
                  <PlatformMenu changeNavMenu={changeNavMenu} />
                )}
                {navMenu === 2 && (
                  <SolutionMenu changeNavMenu={changeNavMenu} />
                )}
                {navMenu === 3 && <CompanyMenu changeNavMenu={changeNavMenu} />}
                {navMenu === 4 && (
                  <CoustmerMenu changeNavMenu={changeNavMenu} />
                )}
                {navMenu === 5 && (
                  <ResourceMenu changeNavMenu={changeNavMenu} />
                )}
              </div>
            </section>
          </>
        ) : (
          <div className="w-full flex mx-[16px] mt-[24px] justify-between items-center bg-[#13111E] rounded-[60px] p-[12px]">
            <Link href="/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e12b969f5b2e3cb9845a7587987edd0c8237c7f64216c73c0c8987dad50b0e1?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
                alt="Company Logo"
                className="object-contain z-0 shrink-0 self-stretch my-auto w-[108px] h-[24px]"
              />
            </Link>
            <div className="flex gap-[8px] items-center">
              <Link href="/contact">
                <HoverBorderGradientDemo
                  content="Try Demo"
                  className="self-stretch  py-[11px] my-auto text-[16px] leading-[20px] font-semibold font-urbanist text-white bg-indigo-500 rounded-[50px] px-[30px] h-[46px] "
                />
              </Link>
              <div>
                <img
                  loading="lazy"
                  src="/images/navbar/open.svg"
                  alt=""
                  onClick={() => setShowNav(true)}
                />
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;

export const MobileNavheader = ({ title, changeNavMenu, link }) => {
  return (
    <>
      <div className="flex items-center gap-[12px]">
        <div
          className="h-[36px] w-[36px] flex justify-center items-center bg-white rounded-[50px] border"
          onClick={() => changeNavMenu(0)}
        >
          <img loading="lazy" src="/images/navbar/menu_left.svg" alt="" />
        </div>
        <h4 className="font-sora font-semibold text-[16px] leading-[22px] uppercase">
          {title}
        </h4>
      </div>
      <div className="mt-[15px] mb-[20px] py-[15px] border-y">
        <div className=" mb-[12px]">
          <Link href={link} className="flex gap-[10px] items-center">
            <h5>The #1 data Security Platform</h5>
            <img loading="lazy" src="/images/navbar/arrow_right.svg" alt="" />
          </Link>
        </div>
        <p className="font-urbanist font-[500] text-[12px] leading-[18px] text-[#808080]">
          Lightbeam is building a data security platform that delivers the ease,
          agility, and robust protections that security teams.
        </p>
      </div>
    </>
  );
};
