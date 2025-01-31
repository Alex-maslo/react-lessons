import axios from "axios";
import { IUser } from "../models/IUser.ts";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json" },
});

export const getAllUsers = async (): Promise<IUser[]> => {
  const { data } = await axiosInstance.get<IUser[]>("/users");
  return data;
};

axiosInstance.interceptors.request.use((request) => {
  console.log(request);
  return request;
});

axiosInstance.interceptors.response.use((response) => {
  console.log(response);
  return response;
});
