import { AxiosError } from "axios";
import Axios from "axios";

export const getAuthAxios = (token: string) => {
  const authAxios = Axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      const ErrorType = error as AxiosError;
      const axiosError = ErrorType.response?.status;
      if (axiosError === 401) {
        alert("토큰이 유효하지 않습니다. 로그인을 해주세요");
        window.location.href = "/";
        return;
      }
    }
  );
  return authAxios;
};
