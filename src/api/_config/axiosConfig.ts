import axios, { AxiosError } from "axios";
import { showMessage } from "../../utils/services/messageService";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:5173",
    "Access-Control-Allow-Credentials": "true",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    if (!error.response) {
      showMessage("error", "Network error — please check your connection.");
      return Promise.reject(error);
    }

    const status = error.response.status;
    const serverMsg =
      typeof error.response.data === "string"
        ? error.response.data
        : error.response.data?.message;

    switch (status) {
      case 400:
        showMessage("error", `Bad request (400). ${serverMsg ?? ""}`);
        break;
      case 401:
        showMessage("error", `Unauthorized (401). Please sign in.`);
        break;
      case 403:
        showMessage("error", `Forbidden (403). You don't have access.`);
        break;
      case 404:
        showMessage("error", `Not found (404). The resource doesn't exist.`);
        break;
      case 422:
        showMessage("error", `Validation error (422). ${serverMsg ?? ""}`);
        break;
      case 500:
        showMessage("error", `Server error (500). Try again later.`);
        break;
      default:
        showMessage("error", `Error ${status}. ${serverMsg ?? error.message}`);
        break;
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
