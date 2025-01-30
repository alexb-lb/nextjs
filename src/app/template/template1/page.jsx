import React from "react";
import LandingPage from "./main";
import {
  fetchDataFromStrapi,
  fetchImageData,
  fetchPageData,
} from "../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";

async function Template1Page(props) {
  const { slug } = props;
  const data = await fetchPageData("template-pages", slug);
  const imageData = await fetchImageData("template-pages", {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      sections: {
        populate: "tabs.image",
      },
    },
  });
  const navigation = await fetchNavigation(["header", "footer"]);
  const blogsData = await fetchDataFromStrapi("blogs", {
    populate: "*",
  });
  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes.sections}
      navigation={navigation}
      imageData={imageData?.data?.data[0]?.attributes.sections}
      blogsData={blogsData?.data?.data}
    />
  );
}
export const dynamic = "force-dynamic";
export default Template1Page;
