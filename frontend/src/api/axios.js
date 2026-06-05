import axios from "axios";

const api = axios.create({
  baseURL: "https://emotionmusic.onrender.com",
  withCredentials: true,
});

api.interceptors.response.use(

  (response) => response,

  (error) => {

    const status =
      error?.response?.status;

    if (
      status === 500 ||
      status === 503 ||
      status === 403 ||
      !error.response
    ) {

      window.location.href =
        "/error";
    }

    return Promise.reject(error);
  }
);

export default api;
