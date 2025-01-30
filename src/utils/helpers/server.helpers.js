export const getSeoMetaData = (seoData) => {
  const metaImage = seoData?.metaImage?.data?.attributes;
  const metaImageUrl = metaImage?.url || "default-image-url";
  const metaImageAlt = metaImage?.alternativeText || "Default Image Alt";

  const ogImage = metaImage?.formats?.medium?.url || metaImageUrl;
  const ogImageAlt = metaImageAlt;
  const twitterImage = metaImage?.formats?.small?.url || metaImageUrl;

  return {
    title: seoData?.metaTitle || "Default Title",
    description: seoData?.metaDescription || "Default Description",
    keywords: seoData?.keywords || "default,keywords",

    icons: {
      icon: "/favicon.ico",
    },

    // Canonical URL
    canonical: seoData?.canonicalURL || "https://lightbeam.ai",

    // Open Graph (OG) metadata
    openGraph: {
      title: seoData?.metaTitle,
      description: seoData?.metaDescription,
      url: seoData?.canonicalURL || "https://lightbeam.ai",
      type: "website",
      images: [
        {
          url: ogImage,
          alt: ogImageAlt,
          width: metaImage?.width || 1200,
          height: metaImage?.height || 630,
        },
      ],
      linkedin: {
        title: seoData?.metaTitle,
        description: seoData?.metaDescription,
        image: ogImage, // Same image as OG image
        imageAlt: ogImageAlt,
      },
    },

    // Twitter metadata
    twitter: {
      title: seoData?.metaTitle,
      description: seoData?.metaDescription,
      image: twitterImage,
      imageAlt: metaImageAlt,
    },

    // Structured data (JSON-LD)
    structuredData: seoData?.structuredData || {},

    // Meta robots
    robots: seoData?.metaRobots || "index, follow", // Default value

    // Meta social (Facebook and Twitter titles/descriptions)
    metaSocial: seoData?.metaSocial.map((social) => ({
      network: social.socialNetwork,
      title: social.title,
      description: social.description,
    })),
  };
};

export const getNewsPopulate = () => {
  return {
    author: {
      populate: "icon",
    },
    news_category: {
      populate: "*",
    },
    news_room_tags: {
      populate: "*",
    },
    backgroundImage: {
      populate: "*",
    },
    thumbnail: {
      populate: "*",
    },
  };
};

export const getBlogsPopulate = () => {
  return {
    author: {
      populate: "icon",
    },
    blog_category: {
      populate: "*",
    },
    blog_tags: {
      populate: "*",
    },
    backgroundImage: {
      populate: "*",
    },
    thumbnail: {
      populate: "*",
    },
  };
};

function findObjectByCustomPath(data, pathname) {
  if (data.custom_path === pathname) {
    return data;
  }

  // If the current item has children, search recursively
  if (data.children && data.children.length > 0) {
    for (let child of data.children) {
      const result = findObjectByPath(child, pathname);
      if (result) {
        return result;
      }
    }
  }

  // Return null if no match is found
  return null;
}

// Function to search both 'header' and 'footer'
export function getCustomMatchingObject(data, pathname) {
  // Check the header
  for (let item of data.header) {
    const result = (item, pathname);
    if (result) return result;
  }

  // Check the footer
  for (let item of data.footer) {
    const result = findObjectByCustomPath(item, pathname);
    if (result) return result;
  }

  // If no match is found, return null
  return null;
}
