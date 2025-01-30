import { InitCollection } from "og_strapi_client";

export const pageModel = new InitCollection({
  collectionName: "pages",
});

export const caseStudyModel = new InitCollection({
  collectionName: "case-studies",
});
export const eBookModel = new InitCollection({
  collectionName: "e-books",
});
export const whitePaperModel = new InitCollection({
  collectionName: "white-papers",
});
