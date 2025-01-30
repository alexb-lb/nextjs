import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchPageData,
} from "../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";
import {
  getBlogsPopulate,
  getSeoMetaData,
} from "@/utils/helpers/server.helpers";

async function BlogsPage() {
  const data = await fetchPageData("pages", "resource-blogs");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  const blogsData = await fetchDataFromStrapi("blogs", {
    populate: getBlogsPopulate(),
  });
  const blogsCategoryList = await fetchDataFromStrapi("blog-categories");
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });

  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={caseStudy}
      blogsData={blogsData?.data?.data}
      blogsCategoryList={blogsCategoryList?.data?.data}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default BlogsPage;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "resource-blogs",
      },
    },
    populate: {
      seo: {
        populate: "*",
      },
    },
  });
  const seo = response?.data?.data && response?.data?.data[0]?.attributes?.seo;
  const seoData = seo && seo[0];
  return getSeoMetaData(seoData);
}
