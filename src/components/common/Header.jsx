"use client";
import React, { useEffect, useState } from "react";
import NavItem from "./NavItem";

import Button from "./Button";
import Link from "next/link";

import PlatformMenu from "./HeaderHoverContent/mobile/PlatformMenu";
import SolutionMenu from "./HeaderHoverContent/mobile/SolutionMenu";
import CompanyMenu from "./HeaderHoverContent/mobile/CompanyMenu";
import CoustmerMenu from "./HeaderHoverContent/mobile/CoustmerMenu";
import ResourceMenu from "./HeaderHoverContent/mobile/ResourceMenu";
import {
  fetchBlogDetails,
  fetchEbookDetails,
  fetchNewsDetails,
  fetchWhitePaperDetails,
  formatBlogs,
  formatNews,
} from "@/utils/helpers/dataFormating.helper";
import { initializeStrapiClient } from "@/utils/helpers/initStrapi.helper";
import { caseStudyModel } from "@/utils/models";

const Header = ({ navigation }) => {
  const [caseStudyClient, setStudyClient] = useState(null);
  const [showNav, setShowNav] = useState(false);
  const [navMenu, setNavMenu] = useState(0);

  // fetch caseStudy from client component using strapi
  useEffect(() => {
    (async function () {
      initializeStrapiClient();
      const response = await caseStudyModel.getDocuments({
        populate: {
          logo: {
            populate: "*",
          },
        },
      });

      setStudyClient(response.data?.data);
    })();
  }, []);

  const changeNavMenu = (step) => {
    setNavMenu(step);
  };
  const handleCloseNavbar = () => {
    setShowNav(false);
    setNavMenu(0);
  };

  const [formattedNavigation, setFormattedNavigation] = useState([]);

  useEffect(() => {
    const fN = navigation?.filter((ele) => ele?.menuAttached);
    setFormattedNavigation(fN);
  }, [navigation?.length]);

  const [news, setNews] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [ebook, setEbook] = useState([]);
  const [whitePaper, setWhitePaper] = useState([]);

  function filterData(blogsData = [], key = "") {
    const blogs = blogsData?.filter((blog) => {
      const tags = blog?.tags?.map((ele) => ele.title);
      return tags?.includes(key);
    });
    return blogs;
  }

  useEffect(() => {
    (async function () {
      const responseNews = await fetchNewsDetails();
      const responseBlogs = await fetchBlogDetails();
      const responseEbooks = await fetchEbookDetails();
      const responseWhitePapers = await fetchWhitePaperDetails();
      setNews(filterData(formatNews(responseNews?.data), "Navigation"));
      setBlogs(filterData(formatBlogs(responseBlogs?.data), "Navigation"));
      setEbook(responseEbooks);
      setWhitePaper(responseWhitePapers);
    })();
  }, []);

  return (
    <>
      <header className=" z-[9999] hidden lg:flex items-center justify-between gap-[150px] p-2.5 w-full bg-[#13111E]   shadow-[2px_4px_14px_rgba(0,0,0,0.05)] text-primary_white">
        <Link href="/">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e12b969f5b2e3cb9845a7587987edd0c8237c7f64216c73c0c8987dad50b0e1?placeholderIfAbsent=true&apiKey=94e29386ea8f4d58bd339db870b3bbe8"
            alt="Company Logo"
            className="object-contain z-0 shrink-0 self-stretch my-auto aspect-[5.13] w-[205px]"
          />
        </Link>
        <nav className="flex z-[99999999999999] flex-wrap gap-8 justify-center items-center self-stretch my-auto text-base whitespace-nowrap bg-blend-difference min-w-[240px] max-md:max-w-full">
          <NavItem
            navigation={formattedNavigation}
            caseStudy={caseStudyClient}
            whatsNew={news}
            blogs={blogs}
            ebook={ebook}
            whitePaper={whitePaper}
          />
        </nav>
        <Link href="/contact">
          <Button
            label="Request Demo"
            className="self-stretch font-urbanist  py-5 my-auto text-xl font-semibold leading-none bg-indigo-500 rounded-[50px] w-[183px] "
          />
        </Link>
      </header>
      <header className="flex lg:hidden w-full relative">
        {showNav ? (
          <>
            <section className="w-full h-screen fixed top-0 left-0 z-[9999] bg-primary_white overflow-y-scroll">
              {/* mobile navbar  */}
              <div className="w-full  flex justify-between items-center bg-[#13111E]  p-[12px]">
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
                    <Button
                      label="Request Demo"
                      className="font-urbanist  max-sm:text-[14px] my-auto text-xl font-semibold leading-none bg-indigo-500 rounded-[50px] w-[183px] text-white h-[46px] max-sm:w-[140px]"
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
              <div className=" mt-[47px] px-5 font-sora font-semibold text-[16px] leading-[22px] ">
                {navMenu === 0 && (
                  <>
                    {formattedNavigation?.map((item, ind) => (
                      <div
                        key={ind}
                        className="w-full flex justify-between items-center mt-[35px]"
                        onClick={() => changeNavMenu(ind + 1)}
                      >
                        <h5 className="uppercase">{item.name}</h5>
                        <img
                          loading="lazy"
                          src="/images/navbar/menu_right.svg"
                          alt=""
                        />
                      </div>
                    ))}
                  </>
                )}
                {navMenu === 1 && (
                  <PlatformMenu
                    changeNavMenu={changeNavMenu}
                    navData={formattedNavigation[0]}
                    whatsNew={news}
                    blogs={blogs}
                  />
                )}
                {navMenu === 2 && (
                  <SolutionMenu
                    changeNavMenu={changeNavMenu}
                    navData={formattedNavigation[1]}
                  />
                )}
                {navMenu === 3 && (
                  <CompanyMenu
                    changeNavMenu={changeNavMenu}
                    navData={formattedNavigation[2]}
                  />
                )}
                {navMenu === 4 && (
                  <CoustmerMenu
                    changeNavMenu={changeNavMenu}
                    caseStudy={caseStudyClient}
                    navData={formattedNavigation[3]}
                  />
                )}
                {navMenu === 5 && (
                  <ResourceMenu
                    changeNavMenu={changeNavMenu}
                    navData={formattedNavigation[4]}
                    whatsNew={news}
                    blogs={blogs}
                    ebook={ebook}
                    whitePaper={whitePaper}
                  />
                )}
              </div>
            </section>
          </>
        ) : (
          <div className="w-full fixed top-0 left-0 z-50 flex  justify-between items-center bg-[#13111E] r p-[12px]">
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
                <Button
                  label="Request Demo"
                  className=" font-urbanist  max-sm:text-[14px] my-auto text-xl font-semibold leading-none bg-indigo-500 rounded-[50px] w-[183px] text-white h-[46px] max-sm:w-[140px]"
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
        <p className="mt-3 text-sm font-medium font-urbanist leading-[22px] text-[#808080]">
          LightBeam.ai converges data security, privacy, and governance,
          enabling businesses to secure their data,
          <br />
          remediate access risks, and comply with regulations with a single
          sensitive data platform
        </p>
      </div>
    </>
  );
};
