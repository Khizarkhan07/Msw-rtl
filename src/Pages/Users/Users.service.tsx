import axios, { AxiosResponse } from "axios";

const REQUEST_HEADERS = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
};

const getRequest = (request: string): Promise<AxiosResponse<any>> => {
  return axios.get(request, {
    timeout: 90000,
    headers: REQUEST_HEADERS,
  });
};

export const getUsers = async () => {
  try {
    const resp = await getRequest("users");
    return {
      users: resp.data.users,
    };
  } catch (err) {
    throw new Error("Invalid API CALL");
  }
};
