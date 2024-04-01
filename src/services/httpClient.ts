import axios from "axios";
const getCookie = (name: string) => {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
};
const ApiClient = () => {
  const instance = axios.create();
  instance.interceptors.request.use(async (request) => {
    const accessToken = getCookie("auth");
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    request.baseURL = import.meta.env.VITE_API_URL+'/api';
    return request;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      return Promise.reject(error);
    },
  );
  return instance;
};

export default ApiClient();
