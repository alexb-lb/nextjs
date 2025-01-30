import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchPageData,
} from "../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";

async function Template2Page(props) {
  const { slug } = props;
  const data = await fetchPageData(
    "template-pages",
    slug || "data-subject-request"
  );
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes.sections}
      navigation={navigation}
      caseStudy={caseStudy}
    />
  );
}
export const dynamic = "force-dynamic";
export default Template2Page;
