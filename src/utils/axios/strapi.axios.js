import axios from "axios";

const BASE_URL = process.env.STRAPI_DOMAIN;
const strapiToken = process.env.STRAPI_ACCESS_TOKEN;

const strapiAxios = axios.create({
  baseURL: BASE_URL,
});

strapiAxios.interceptors.request.use((request) => {
  request.headers.Authorization = "Bearer " + strapiToken;
  return request;
});

export default strapiAxios;
