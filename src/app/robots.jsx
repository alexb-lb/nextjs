export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://strapi.lightbeam.ai/api/sitemap/index.xml",
  };
}
