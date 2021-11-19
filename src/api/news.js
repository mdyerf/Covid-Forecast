import axios from "axios";

const BASE_URL =
  "http://newsapi.org/v2/everything?apiKey=50cf0370a08948dc9f5f8e98be4e23a4";
const KEYWORD = "covid";

export async function getNews(sortBy, from, page) {
  try {
    const res = await axios.get(
      `${BASE_URL}&q=${KEYWORD}&from=${from}&sortBy=${sortBy}&page=${page}`
    );
    return res.data.articles;
  } catch (err) {
    return console.log(err);
  }
}
