import axios from "axios";

const BASE_URL = "https://api.covidactnow.org/v2/counties.json?county=IR&apiKey=08dbf7a304a64ca890f066ff8382e542";

export async function getStats(country, time) {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res.data;
  } catch (err) {
    return console.log(err);
  }
}
