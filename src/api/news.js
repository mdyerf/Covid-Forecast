import { get } from "./core";

export const getNews = (sortBy, from, page) =>
  get("covid", { sortBy, from, page });
