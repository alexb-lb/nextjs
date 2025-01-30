import React from "react";
import {
  fetchCaseStudies,
  fetchDataFromStrapi,
  fetchImageData,
  fetchPageData,
} from "../utils/helpers/initStrapi.helper";
import { getSeoMetaData } from "../utils/helpers/server.helpers";
import { fetchNavigation } from "og_strapi_client";
import LandingPage from "../components/Home/main";
const page_slug = "home";

const fetchData = async () => {
  const data = await fetchPageData("pages", page_slug);
  const platformData = await fetchDataFromStrapi("pages", {
    filters: {
      slug: "platform",
    },
    populate: {
      sections: {
        populate: "*",
      },
    },
  });
  const imageData = await fetchImageData("pages", {
    filters: {
      slug: page_slug,
    },
    populate: {
      sections: {
        populate: ["cards.image", 'images'],
      },
    },
  });
  const blogsData = await fetchDataFromStrapi("blogs", {
    populate: "*",
  });
  const GetInTouchData = await fetchDataFromStrapi("get-in-touches", {
    populate: "*",
  });
  const navigation = await fetchNavigation(["header", "footer"]);
  const caseStudy = await fetchCaseStudies();

  return {
    data,
    navigation,
    caseStudy,
    imageData,
    blogsData,
    platformData,
    GetInTouchData,
  };
};

async function HomePage() {
  const {
    data,
    navigation,
    caseStudy,
    imageData,
    blogsData,
    platformData,
    GetInTouchData,
  } = await fetchData();

  return (
    <LandingPage
      strapiData={data?.data?.data && data?.data?.data[0]?.attributes}
      platformData={
        platformData?.data?.data && platformData?.data?.data[0]?.attributes
      }
      navigation={navigation}
      caseStudy={caseStudy}
      imageData={imageData?.data?.data && imageData?.data?.data[0]?.attributes}
      blogsData={blogsData?.data?.data}
      GetInTouchData={GetInTouchData?.data?.data?.[0]?.attributes}
    />
  );
}

export default HomePage;
export const dynamic = "force-dynamic";

export async function generateMetadata() {
  const response = await fetchDataFromStrapi("pages", {
    filters: {
      slug: {
        $eq: page_slug,
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
