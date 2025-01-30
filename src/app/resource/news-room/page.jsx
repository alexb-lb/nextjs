import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchPageData,
} from "../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";
import {
  getNewsPopulate,
  getSeoMetaData,
} from "@/utils/helpers/server.helpers";

async function NewsRoom() {
  const data = await fetchPageData("pages", "resource-newsroom");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  const newsData = await fetchDataFromStrapi("news-rooms", {
    populate: "*",
  });
  const newsCategoryList = await fetchDataFromStrapi("news-categories");
  const latestNews = await fetchDataFromStrapi("news-rooms", {
    filters: {
      news_room_tags: {
        slug: {
          $eq: "new",
        },
      },
    },
    pagination: {
      limit: 1,
    },
    populate: getNewsPopulate(),
  });

  const trendingNews = await fetchDataFromStrapi("news-rooms", {
    filters: {
      news_room_tags: {
        slug: {
          $eq: "trending",
        },
      },
    },
    pagination: {
      limit: 2,
    },
    populate: getNewsPopulate(),
  });
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });

  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={caseStudy}
      newsData={newsData?.data?.data}
      newsCategoryList={newsCategoryList?.data?.data}
      latestNews={latestNews?.data?.data}
      trendingNews={trendingNews?.data?.data}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default NewsRoom;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "resource-newsroom",
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
