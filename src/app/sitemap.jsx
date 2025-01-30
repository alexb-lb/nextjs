import { fetchAllNavigation } from "@/utils/helpers/initStrapi.helper";

const extractCustomPaths = (data) => {
  const result = [];

  const traverse = (items) => {
    items.forEach((item) => {
      if (item.custom_path) {
        result.push({
          url: item.custom_path,
          changeFrequency: "monthly", // Adjust as needed
          priority: "1", // Adjust as needed
        });
      }
      if (item.children && item.children.length > 0) {
        traverse(item.children); // Recursively traverse child items
      }
    });
  };

  // Traverse both header and footer sections
  // if (data.footer) traverse(data.footer);
  if (data.header) traverse(data.header);

  return result;
};

export default async function sitemap() {
  const navigationHeader = await fetchAllNavigation();
  const extractedPaths = extractCustomPaths(navigationHeader);

  return extractedPaths;
}
