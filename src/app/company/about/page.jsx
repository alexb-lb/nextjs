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

async function CompanyAbout() {
  const data = await fetchPageData("pages", "company-about");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  const imageData = await fetchImageData("pages", {
    filters: {
      slug: "company-about",
    },
    populate: {
      sections: {
        populate: {
          cards: {
            populate: "image",
          },
          tabs: {
            populate: "image",
          },
          images:{
            populate: "*",
          }
        },
      },
    },
  });
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });
  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={caseStudy}
      imageData={imageData?.data?.data[0]?.attributes}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default CompanyAbout;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "company-about",
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
