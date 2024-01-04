import axios from "axios";

export const getMypageApi = async (token: string) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return await axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/me`)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        const result = error.response?.data?.detail;
        return result;
      }
    });
};
