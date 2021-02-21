import axios from "axios";
const KEY = "AIzaSyAHedw3gQb5_AMMyLQ0dLrDaUnW-s_bIQE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: { part: "snippet", type: "video", maxResults: 5, key: KEY },
});
