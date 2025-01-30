import { getBlogsPopulate, getNewsPopulate } from "./server.helpers";
import { fetchData } from "./strapi.helper";

export const getSectionData = (dataArr = [], sectionName) => {
  return dataArr.filter((item) => item.__component === sectionName);
};

const formatBlog = (blog) => {
  return {
    title: blog?.attributes?.title,
    description: blog?.attributes?.description,
    image: blog?.attributes?.backgroundImage?.data?.attributes?.url,
    thumbnail:
      blog?.attributes?.thumbnail?.data?.attributes?.url ||
      blog?.attributes?.backgroundImage?.data?.attributes?.url,
    category: {
      title: blog?.attributes?.blog_category?.data?.attributes?.title,
      slug: blog?.attributes?.blog_category?.data?.attributes?.slug,
    },
    author: {
      name: blog?.attributes?.author?.data?.attributes?.name,
      image:
        blog?.attributes?.author?.data?.attributes?.icon?.data?.attributes?.url,
    },
    tags: blog?.attributes?.blog_tags?.data?.map((ele) => ({
      title: ele?.attributes?.title,
    })),
    createdAt: blog?.attributes?.createdAt,
    slug: blog?.attributes?.slug,
    content: blog?.attributes?.content,
  };
};

export const formatBlogs = (list = []) => {
  if (Array.isArray(list)) {
    return list.map((ele) => formatBlog(ele));
  }
  return formatBlog(list);
};

// Fetch resources by category name
export async function fetchResourcesByCategoryNameClient(
  resource_name,
  category_name
) {
  return fetchData(resource_name, {
    filters: {
      blog_category: {
        title: {
          $eq: category_name,
        },
      },
    },
  });
}

export async function fetchResourcesByTagNameClient(
  resource_name,
  category_name
) {
  return fetchData(resource_name, {
    filters: {
      news_room_tags: {
        title: {
          $eq: category_name,
        },
      },
    },
  });
}

export async function fetchNewsDetails() {
  return fetchData(
    "news-rooms",
    {
      paginations: {
        limit: 1,
      },
    },
    getNewsPopulate()
  );
}

export async function fetchBlogDetails() {
  return fetchData(
    "blogs",
    {
      paginations: {
        limit: 1,
      },
    },
    getBlogsPopulate()
  );
}

export async function fetchWhitePaperDetails() {
  return fetchData(
    "white-papers",
    {
      paginations: {
        limit: 1,
      },
    },
    getNewsPopulate()
  );
}

export async function fetchEbookDetails() {
  return fetchData(
    "e-books",
    {
      paginations: {
        limit: 1,
      },
    },
    getNewsPopulate()
  );
}

export async function fetchNewsByCategoryNameClient(
  resource_name,
  category_name
) {
  return fetchData(
    resource_name,
    {
      filters: {
        news_category: {
          title: {
            $eq: category_name,
          },
        },
      },
    },
    getNewsPopulate()
  );
}

const formatNew = (blog) => {
  return {
    title: blog?.attributes?.title,
    description: blog?.attributes?.description,
    image: blog?.attributes?.backgroundImage?.data?.attributes?.url,
    thumbnail:
      blog?.attributes?.thumbnail?.data?.attributes?.url ||
      blog?.attributes?.backgroundImage?.data?.attributes?.url,
    category: {
      title: blog?.attributes?.news_category?.data?.attributes?.title,
      slug: blog?.attributes?.news_category?.data?.attributes?.slug,
    },
    author: {
      name: blog?.attributes?.author?.data?.attributes?.name,
      image:
        blog?.attributes?.author?.data?.attributes?.icon?.data?.attributes?.url,
    },
    tags: blog?.attributes?.news_room_tags?.data?.map((ele) => ({
      title: ele?.attributes?.title,
    })),
    createdAt: blog?.attributes?.publisedAt
      ? blog?.attributes?.publisedAt
      : blog?.attributes?.createdAt,
    slug: blog?.attributes?.slug,
    content: blog?.attributes?.content,
    url: blog?.attributes?.url,
  };
};

export const formatNews = (list = []) => {
  if (Array.isArray(list)) {
    return list.map((ele) => formatNew(ele));
  }
  return formatNew(list);
};
