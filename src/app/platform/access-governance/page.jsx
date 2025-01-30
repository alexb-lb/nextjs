import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchImageData,
  fetchPageData,
} from "../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";


async function PlatformGovernanceAccess({ slug = '' }) {
  const data = await fetchPageData("pages", slug);
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();
  const imageData = await fetchImageData("pages", {
    filters: {
      slug: slug,
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
export default PlatformGovernanceAccess;

// export async function generateMetadata() {
//   const response = await fetchDataFromStrapi("pages", {
//     filters: {
//       slug: {
//         $eq: page_slug,
//       },
//     },
//     populate: {
//       seo: {
//         populate: "*",
//       },
//     },
//   });
//   const seo = response?.data?.data && response?.data?.data[0]?.attributes?.seo;
//   const seoData = seo && seo[0];
//   return getSeoMetaData(seoData);
// }
