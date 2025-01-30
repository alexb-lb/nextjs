import { init, fetchData, fetchNavigation } from "og_strapi_client";

const initializeStrapi = () => {
  const strapiUrl = process.env.NEXT_STRAPI_DOMAIN;
  const apiKey = process.env.NEXT_STRAPI_ACCESS_TOKEN;

  init({
    url: strapiUrl,
    apiKey,
    navigation: ["header", "footer"],
    singleTypes: ["header", "footer", "site-setting"],
  });
};

export const fetchDataFromStrapi = (url, params) => {
  initializeStrapi();
  return fetchData(url, params);
};

export const fetchPageData = (collection, slug) => {
  initializeStrapi();
  return fetchData(collection, {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      sections: {
        populate: "*",
      },
    },
  });
};

export const fetchImageData = (collection, params) => {
  initializeStrapi();
  return fetchData(collection, params);
};

export const fetchAllNavigation = () => {
  initializeStrapi();
  return fetchNavigation(["header", "footer"]);
};

// const data = await fetchPageData("case-study");
export const fetchCaseStudies = () => {
  initializeStrapi();
  return fetchData("case-studies", {
    populate: "*",
  });
};

export const fetchAllResources = async (resource_name) => {
  initializeStrapi();
  const data = await fetchData(resource_name, {
    populate: "*",
  });

  return data?.data?.data;
};

export function fetchSomeResource(resource_name, number) {
  initializeStrapi();
  return fetchData(resource_name, {
    pagination: {
      limit: number,
    },
  });
}

export function fetchResourcesByTagName(resource_name, tag_name) {
  initializeStrapi();
  return fetchData(resource_name, {
    filters: {
      category: {
        slug: {
          $eq: tag_name,
        },
      },
    },
  });
}

export async function fetchResourcesByCategoryName(
  resource_name,
  category_name
) {
  initializeStrapi();
  return fetchData(resource_name, {
    filters: {
      category: {
        slug: {
          $eq: category_name,
        },
      },
    },
  });
}

export const initializeStrapiClient = () => {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_DOMAIN;
  const apiKey = process.env.NEXT_PUBLIC_STRAPI_ACCESS_TOKEN;

  init({
    url: strapiUrl,
    apiKey,
    singleTypes: ["header", "footer", "site-setting"],
  });
};
