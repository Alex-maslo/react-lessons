import { IUsersResponse } from "../models/IUsersResponse.ts";

const baseUrl = "https://dummyjson.com";

export const getUsers = async (page: string): Promise<IUsersResponse> => {
  const limit = 30;
  let skip = limit * +page - limit;
  const response = await fetch(`${baseUrl}/users?skip=${skip}`);
  return await response.json();
};
