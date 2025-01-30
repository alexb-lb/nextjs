import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchImageData,
  fetchPageData,
} from "../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";
import { getSeoMetaData } from "@/utils/helpers/server.helpers";

async function SolutionPrivacy() {
  const navigation = await fetchNavigation(["header", "footer"]);
  const data = await fetchPageData("pages", "solution-privacy");
  const caseStudy = await fetchCaseStudies();
  const imageData = await fetchImageData("pages", {
    filters: {
      slug: "solution-privacy",
    },
    populate: {
      sections: {
        populate: ["cards.image", "cards.icon", 'images'],
      },
    },
  });
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });
  
  return (
    <LandingPage
      strapiData={data?.data?.data && data?.data?.data[0]?.attributes.sections}
      navigation={navigation}
      caseStudy={caseStudy}
      imageData={
        imageData?.data?.data && imageData?.data?.data[0]?.attributes.sections
      }
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default SolutionPrivacy;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "solution-privacy",
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
