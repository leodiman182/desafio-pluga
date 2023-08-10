import axios from "axios";
import URL from "./url";

async function fetchAPI() {
  const res = await axios.get(URL);
  return res.data;
}

export default fetchAPI;
