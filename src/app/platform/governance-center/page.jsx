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

async function PlatformGovernance() {
  const data = await fetchPageData("pages", "platform-governance");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  const imageData = await fetchImageData("pages", {
    filters: {
      slug: "platform-governance",
    },
    populate: {
      sections: {
        populate: "cards.image",
      },
    },
  });
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });
  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      imageData={imageData?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={caseStudy}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default PlatformGovernance;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "platform-governance",
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
