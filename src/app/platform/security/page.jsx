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

async function PlatformSecurity() {
  const data = await fetchPageData("pages", "platform-security");
  const imageData = await fetchImageData("pages", {
    filters: {
      slug: "platform-security",
    },
    populate: {
      sections: {
        populate: {
          card: {
            populate: "image",
          },
          cards: {
            populate: "image",
          },
          tabs: {
            populate: "image",
          },
          images: {
            populate: "*"
          }
        },
      },
    },
  });
  const navigation = await fetchNavigation(["header", "footer"]);
  const CaseStudy = await fetchCaseStudies();
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });
  
  return (
    <LandingPage
      strapiData={data?.data?.data && data?.data?.data[0]?.attributes}
      navigation={navigation}
      caseStudy={CaseStudy}
      imageData={imageData?.data?.data[0]?.attributes}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}

export default PlatformSecurity;
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "platform-security",
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
