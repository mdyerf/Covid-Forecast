import axios from "axios";

const BASE_URL =
  "https://newsapi.org/v2/everything?apiKey=50cf0370a08948dc9f5f8e98be4e23a4";

export async function get(searchTerm, params) {
  try {
    const res = await axios.get(
      `${BASE_URL}&q=${searchTerm}&from=${params.from}
      &sortBy=${params.sortBy}&page=${params.page}`
    );
    return res.data.articles;
  } catch (err) {
    return console.log(err);
  }
}
