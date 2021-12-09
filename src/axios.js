import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/elbay-a3a34/us-central1/api",
});

export default instance;
