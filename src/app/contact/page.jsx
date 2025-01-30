import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchPageData,
} from "../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";
import { getSeoMetaData } from "@/utils/helpers/server.helpers";

async function ContactPage() {
  const data = await fetchPageData("pages", "contact");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });
  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={caseStudy}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default ContactPage;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "contact",
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
