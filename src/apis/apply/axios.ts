import axios from "axios";
import { getAuthAxios } from "../utils/axios";

export const getMyApplyInfoApi = async (
  token: string,
  applicationId: number,
  page: number
) => {
  const authAxios = getAuthAxios(token);
  return await authAxios
    .get(`/application/${applicationId}/page${page}`)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return undefined;
      }
    });
};

//여기는 데이터 애들 다 들어가야된다. 그거는 조금 있다가 만들면서 생각해보기, 인터페이스로 다 들어가야될듯..?

export const postApplyPageApi = async (token: string) => {
  const authAxios = getAuthAxios(token);
  return await authAxios
    .post(`/application`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return undefined;
      }
    });
};

export const putFirstPageApi = async (token: string, applicationId: number) => {
  const authAxios = getAuthAxios(token);
  return await authAxios
    .put(`/application/${applicationId}/page1`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return undefined;
      }
    });
};

export const putSecondPageApi = async (
  token: string,
  applicationId: number
) => {
  const authAxios = getAuthAxios(token);
  return await authAxios
    .put(`/application/${applicationId}/page2`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return undefined;
      }
    });
};

export const putThirdPageApi = async (token: string, applicationId: number) => {
  const authAxios = getAuthAxios(token);
  return await authAxios
    .put(`/application/${applicationId}/page3`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return undefined;
      }
    });
};

export const putLastPageApi = async (token: string, applicationId: number) => {
  const authAxios = getAuthAxios(token);
  return await authAxios
    .put(`/application/${applicationId}/page4`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error);
        return undefined;
      }
    });
};

//마지막으로... 그 최종 제출 api가 여기에 있을 예정... 진짜 난리다 여기
