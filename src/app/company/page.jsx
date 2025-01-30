import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchImageData,
  fetchPageData,
} from "../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";
import { getNewsPopulate, getSeoMetaData } from "@/utils/helpers/server.helpers";

async function CompanyPage() {
  const data = await fetchPageData("pages", "company");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  const imageData = await fetchImageData("pages", {
    filters: {
      slug: "company",
    },
    populate: {
      sections: {
        populate: ["cards.image", 'images'],
      },
    },
  });
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });
  const latestNews = await fetchDataFromStrapi("news-rooms", {
    filters: {
      news_room_tags: {
        slug: {
          $eq: "new",
        },
      },
    },
    pagination: {
      limit: 4,
    },
    populate: getNewsPopulate(),
  });
  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={caseStudy}
      imageData={imageData?.data?.data[0]?.attributes}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
      latestNews={latestNews?.data?.data}
    />
  );
}
export const dynamic = "force-dynamic";
export default CompanyPage;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "company",
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
