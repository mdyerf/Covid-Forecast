import axios from "axios";

const BASE_URL = "https://corona-api.com/countries";

export async function getStats(country, time) {
  try {
    const res = await axios.get(`${BASE_URL}/${country}`);
    return res.data.data;
  } catch (err) {
    return console.log(err);
  }
}

export async function getCountries() {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res.data.data.map(cnt => ({value: cnt.code, label: cnt.name}));
  } catch (err) {
    return console.log(err);
  }
}
