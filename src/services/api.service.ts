import axios from "axios";
import { IUserWithTokens } from "../models/IUserWithTokens.ts";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/auth",
  headers: {},
});

type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};

export const login = async ({
  username,
  password,
  expiresInMins,
}: LoginData) => {
  const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>(
    "/login",
    {
      username,
      password,
      expiresInMins,
    },
  );
  console.log(userWithTokens);
  localStorage.setItem("user", JSON.stringify(userWithTokens));
};
