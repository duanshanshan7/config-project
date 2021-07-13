import axios, { AxiosResponse } from "axios";

(axios.defaults.baseURL = process.env.REACT_APP_BASE_URL),
  (axios.defaults.timeout = 5000),
  (axios.defaults.timeoutErrorMessage = "请求超时，请重试！"),
  axios.interceptors.request.use(
    (config) => {
      // console.log("requestConfig:", config);
      return config;
    },
    (error) => {
      // console.log("requestError:", error);
      return Promise.reject(error);
    }
  );

axios.interceptors.response.use((response: AxiosResponse) => {
  if (response.status === 200) {
    return response;
  } else {
    if (response.status === 403) {
      window.location.href = `${window.location.origin}/login`;
    }
    return Promise.reject(`errorCode${response.status}`);
  }
});

export default axios;
