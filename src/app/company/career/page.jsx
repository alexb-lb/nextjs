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

async function CareerPage() {
  const data = await fetchPageData("pages", "company-career");
  const imagesData = await fetchImageData("pages", {
    filters: {
      slug: "company-career",
    },
    populate: {
      sections: {
        populate: {
          cards: {
            populate: ["image", "*"],
          },
          image: {
            populate: "*",
          },
          images: {
            populate: ["image", "*"],
          },
        },
      },
    },
  });
  const navigation = await fetchNavigation(["header", "footer"]);

  const fetchAllJobs = await fetchDataFromStrapi("careers", {
    populate: "*",
  });

  const GetInTouchData = await fetchDataFromStrapi("get-in-touches", {
    populate: "*",
  });

  const caseStudy = await fetchCaseStudies();
  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes}
      imagesData={imagesData?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={caseStudy}
      allJobs={fetchAllJobs?.data?.data}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default CareerPage;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "company-career",
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
