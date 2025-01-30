import React from "react";
import LandingPage from "./main";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchImageData,
  fetchPageData,
} from "../../../utils/helpers/initStrapi.helper";
import { fetchNavigation } from "og_strapi_client";
import { formatBlogs, formatNews } from "@/utils/helpers/dataFormating.helper";
import {
  getBlogsPopulate,
  getNewsPopulate,
  getSeoMetaData,
} from "@/utils/helpers/server.helpers";

async function NewDetails(props) {
  const { slug, type } = props;
  const data = await fetchPageData("pages", "resource-news-detail");
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();

  let content;
  if (type === "blog") {
    content = await fetchDataFromStrapi("blogs", {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: getBlogsPopulate(),
    });
    content = formatBlogs(content?.data?.data || {});
  }

  if (type === "news") {
    content = await fetchDataFromStrapi("news-rooms", {
      filters: {
        slug: {
          $eq: slug,
        },
      },
      populate: getNewsPopulate(),
    });
    content = formatNews(content?.data?.data || {});
  }

  const blogsData = await fetchDataFromStrapi("blogs", {
    populate: "*",
  });

  const GetInTouchData = await fetchDataFromStrapi("get-in-touches",{
    populate: "*",
  });

  const imageData = await fetchImageData("pages", {
    filters: {
      slug: "news-rooms",
    },
    populate: {
      sections: {
        populate: ["cards.image", "cards.icon", 'images'],
      },
    },
  });

  return (
    <LandingPage
      strapiData={data?.data?.data[0]?.attributes.sections}
      imageData={imageData?.data?.data?.[0]?.attributes?.sections}
      navigation={navigation}
      caseStudy={caseStudy}
      content={content}
      blogsData={blogsData?.data?.data}
      type={type}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}
export const dynamic = "force-dynamic";
export default NewDetails;

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: "news-details",
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
