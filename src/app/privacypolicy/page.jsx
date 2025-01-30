import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchPageData,
} from "../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";
import { getSeoMetaData } from "@/utils/helpers/server.helpers";

async function PrivacyPage() {
  const data = await fetchPageData("pages", "contact");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();


  return (
    <LandingPage
      // strapiData={data?.data?.data[0]?.attributes}
      navigation={navigation}
      // caseStudy={caseStudy}
    />
  );
}
export const dynamic = "force-dynamic";
export default PrivacyPage;
