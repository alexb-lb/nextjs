import React from "react";
import { headers } from "next/headers";
import qs from "query-string";
import { notFound } from "next/navigation";

import { componentsEnum, pathComponentMapper } from "../routeMapper";
import {
  fetchAllNavigation,
  fetchDataFromStrapi,
} from "../../utils/helpers/initStrapi.helper";
import PlatformPage from "../platform/page";
import PlatformPrivacy from "../platform/privacy-center/page";
import PlatformSecurity from "../platform/security/page";
import PlatformGovernance from "../platform/governance-center/page";
import SolutionPage from "../solution/page";
import SolutionSecurity from "../solution/security/page";
import SolutionGovernance from "../solution/governance/page";
import SolutionIntegration from "../solution/integration/page";
import CompanyPage from "../company/page";
import CompanyAbout from "../company/about/page";
import CareerPage from "../company/career/page";
import PartnershipPage from "../company/partnership/page";
import CustomerPage from "../customer/page";
import ResoucePage from "../resource/page";
import NewsRoom from "../resource/news-room/page";
import NewDetails from "../resource/news-details/page";
import BlogsPage from "../resource/blogs/page";
import SolutionPrivacy from "../solution/privacy/page";
import Template1Page from "../template/template1/page";
import Template2Page from "../template/template2/page";
import Template3Page from "../template/template3/page";
import CareerDetailPage from "../company/career/details/page";
import { fetchNavigation } from "og_strapi_client";
import { getSeoMetaData } from "@/utils/helpers/server.helpers";

import WhitePapers from "../resource/white-papers/page";
import EBooks from "../resource/_components/EBooks";

// Modify fetchData to accept context/params
const fetchData = async () => {
  const navigation = await fetchAllNavigation();
  return navigation;
};

// This is a server-side component
async function SlugPage() {
  const navigation = await fetchData();
  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const searchParams = headerList.get("x-current-search");

  // console.log("log", pathname);

  const matchingUrl = getMatchingObject(navigation, pathname);
  // console.log("matchingUrl", matchingUrl);
  // console.log("pathname", pathname);

  if (!matchingUrl) {
    const search = qs.parse(JSON.parse(searchParams));
    if (checkUrlPathPattern(pathname)) {
      return <CareerDetailPage slug={search.slug} />;
    }

    // check for the blog Internal Page
    const data = checkForBlogDetailPage(pathname);
    if (data) {
      return <NewDetails slug={data} type="blog" />;
    }

    const isNewsDetail = checkForNewsDetailPage(pathname);
    if (isNewsDetail) {
      return <NewDetails slug={isNewsDetail} type="news" />;
    }

    return notFound();
  }

  if (
    ["Template 1", "Template 2", "Template 3"].includes(
      matchingUrl.template_page
    )
  ) {
    if (matchingUrl.template_page === "Template 1")
      return <Template1Page slug={matchingUrl.slug} />;
    if (matchingUrl.template_page === "Template 2")
      return <Template2Page slug={matchingUrl.slug} />;
    if (matchingUrl.template_page === "Template 3")
      return <Template3Page {...matchingUrl} />;
  }

  const componentName = pathComponentMapper[matchingUrl.url];

  switch (componentName) {
    case componentsEnum.platform:
      return <PlatformPage />;
    case componentsEnum.platformPrivacy:
      return <PlatformPrivacy />;
    case componentsEnum.platformSecurity:
      return <PlatformSecurity />;
    case componentsEnum.platformGovernance:
      return <PlatformGovernance />;
    case componentsEnum.solution:
      return <SolutionPage />;
    case componentsEnum.solutionPrivacy:
      return <SolutionPrivacy />;
    case componentsEnum.solutionSecurity:
      return <SolutionSecurity />;
    case componentsEnum.solutionGovernance:
      return <SolutionGovernance />;
    case componentsEnum.solutionIntegration:
      return <SolutionIntegration />;
    case componentsEnum.company:
      return <CompanyPage />;
    case componentsEnum.companyAbout:
      return <CompanyAbout />;
    case componentsEnum.companyCareers:
      return <CareerPage />;
    case componentsEnum.companyPaternship:
      return <PartnershipPage />;
    case componentsEnum.customer:
      return <CustomerPage />;
    case componentsEnum.resource:
      return <ResoucePage />;
    case componentsEnum.newsRoom:
      return <NewsRoom />;
    case componentsEnum.blogs:
      return <BlogsPage />;
    case componentsEnum.whitePapers:
      return <WhitePapers />;
    case componentsEnum.eBooks:
      return <EBooks />;
  }
}

// This allows the page to be dynamically rendered
export default SlugPage;

function findObjectByPath(data, pathname) {
  if (data?.custom_path === pathname) {
    return data;
  }

  // If the current item has children, search recursively
  if (data?.children && data?.children?.length > 0) {
    for (let child of data.children) {
      const result = findObjectByPath(child, pathname);
      if (result) {
        return result;
      }
    }
  }

  // Return null if no match is found
  return null;
}

// Function to search both 'header' and 'footer'
function getMatchingObject(data, pathname) {
  // Check the header
  for (let item of data?.header) {
    const result = findObjectByPath(item, pathname);
    if (result) return result;
  }

  // Check the footer
  for (let item of data?.footer) {
    const result = findObjectByPath(item, pathname);
    if (result) return result;
  }

  // If no match is found, return null
  return null;
}

function checkUrlPathPattern(url) {
  // This pattern checks if the URL contains /company/career/detail, ignoring query parameters
  const urlPattern = /\/company\/career\/detail/;
  return urlPattern.test(url);
}

function checkForBlogDetailPage(url) {
  // Regular expression to match a blog URL structure
  const blogPattern = /\/blogs\/([^\/]+)/; // Matches '/blogs/' followed by any characters until the next '/'

  const match = url?.match(blogPattern);

  if (match && match[1]) {
    // Return the extracted slug
    return match[1]; // The slug is captured in the first group
  }

  // Return null if no match is found
  return null;
}

function checkForNewsDetailPage(url) {
  // Regular expression to match '/resources/news-detail/' followed by any characters until the next '/'
  const newsPattern = /\/resources\/news-detail\/([^\/]+)/;

  const match = url?.match(newsPattern);

  if (match && match[1]) {
    // Return the extracted slug
    return match[1];
  }

  return null;
}

export async function generateMetadata({ params }) {
  const navigation = await fetchNavigation(["header", "footer"]);
  const pathname = "/" + params.slug?.join("/");
  const matchingUrl = getCustomMatchingObject(navigation, pathname);
  if (!matchingUrl) return {};
  let collection;

  if (matchingUrl?.page_type === "Page") collection = "pages";
  if (matchingUrl?.page_type === "Template") collection = "template-pages";

  const response = await fetchDataFromStrapi(collection, {
    filters: {
      slug: {
        $eq: matchingUrl?.slug,
      },
    },
    populate: {
      seo: {
        populate: "*",
      },
    },
  });

  const seo = response?.data?.data && response?.data?.data[0]?.attributes?.seo;
  let seoData = seo && seo[0];

  if (!seoData) {
    seoData = seo;
  }

  return getSeoMetaData(seoData);
}

function findObjectByCustomPath(data, pathname) {
  if (data?.custom_path === pathname) {
    return data;
  }

  // If the current item has children, search recursively
  if (data?.children && data?.children?.length > 0) {
    for (let child of data.children) {
      const result = findObjectByPath(child, pathname);
      if (result) {
        return result;
      }
    }
  }

  // Return null if no match is found
  return null;
}

// Function to search both 'header' and 'footer'
function getCustomMatchingObject(data, pathname) {
  // Check the header
  for (let item of data?.header) {
    const result = findObjectByCustomPath(item, pathname);
    if (result) return result;
  }

  // Check the footer
  for (let item of data?.footer) {
    const result = findObjectByCustomPath(item, pathname);
    if (result) return result;
  }

  // If no match is found, return null
  return null;
}
