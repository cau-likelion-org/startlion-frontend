import axios from "axios";

export const getInterviewApi = async (name: string) => {
  return await axios
    .get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/interviews?part=${name}`)
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
