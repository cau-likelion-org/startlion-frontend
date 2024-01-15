import axios from "axios";
import { getAuthAxios } from "../utils/axios";

export const getMypageApi = async (token: string) => {
  const authAxios = getAuthAxios(token);
  return await authAxios
    .get(`/api/users/me`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return undefined;
      }
    });

  // return await axiosInstance
  //   .get(`/api/users/me`)
  //   .then((response) => {
  //     return response.data;
  //   })
  //   .catch((error) => {
  //     if (axios.isAxiosError(error)) {
  //       console.log(error);
  //       return undefined;
  //     }
  //   });
};
