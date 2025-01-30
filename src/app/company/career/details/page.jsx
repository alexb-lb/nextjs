import React from "react";
import LandingPage from "./main";
import {
  fetchDataFromStrapi,
  fetchPageData,
} from "../../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";

async function CareerDetailPage(props) {
  const { slug } = props;
  const data = await fetchPageData("pages", "company-career");
  const navigation = await fetchNavigation(["header", "footer"]);
  const jobData = await fetchDataFromStrapi("careers", {
    filters: {
      slug: {
        $eq: slug,
      },
    },
  });

  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      navigation={navigation}
      jobData={jobData?.data?.data}
    />
  );
}
export const dynamic = "force-dynamic";
export default CareerDetailPage;
