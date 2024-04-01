import axios from "axios";
import toast from "react-hot-toast";

const getCookie = (name: string) => {
  const cookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
};
const ApiClient = () => {
  const instance = axios.create();
  instance.interceptors.request.use(async (request) => {
    const accessToken = getCookie("alhr");
    if (accessToken) {
      request.headers.Authorization = `Bearer ${accessToken}`;
    }
    request.baseURL = import.meta.env.VITE_API_URL+'/api';
    return request;
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const responseMessage = error.response.data.message??error.response.data.error;
      const message = responseMessage || error.message;
      toast.error(message)
      return Promise.reject(error);
    },
  );
  return instance;
};

export default ApiClient();
