import axios from "axios";
import { IUserWithTokens } from "../models/IUserWithTokens.ts";
import { IProduct } from "../models/IProduct.ts";
import { IProductsResponseModelType } from "../models/IProductsResponseModelType.ts";
import { ITokenPair } from "../models/ITokenPair.ts";

type LoginData = {
  username: string;
  password: string;
  expiresInMins: number;
};

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com/auth",
  headers: {},
});

const retriveLocalStorage = <T>(key: string) => {
  const object = localStorage.getItem(key) || "";
  if (!object) {
    return {} as T;
  }
  const parse = JSON.parse(object).accessToken;
  return parse as T;
};

axiosInstance.interceptors.request.use((requestObject) => {
  if (requestObject.method?.toLocaleUpperCase() === "GET") {
    requestObject.headers.Authorization =
      "Bearer " + retriveLocalStorage("user");
  }

  return requestObject;
});

export const login = async ({
  username,
  password,
  expiresInMins,
}: LoginData): Promise<IUserWithTokens> => {
  const { data: userWithTokens } = await axiosInstance.post<IUserWithTokens>(
    "/login",
    {
      username,
      password,
      expiresInMins,
    },
  );
  localStorage.setItem("user", JSON.stringify(userWithTokens));
  console.log(userWithTokens);
  return userWithTokens;
};

export const loadAuthProducts = async (): Promise<IProduct[]> => {
  const { data } =
    await axiosInstance.get<IProductsResponseModelType>("/products");
  return data.products;
};

export const refresh = async () => {
  const iUserWithTokens = retriveLocalStorage<IUserWithTokens>("user");
  const {
    data: { accessToken, refreshToken },
  } = await axiosInstance.post<ITokenPair>("/refresh", {
    refreshToken: iUserWithTokens.refreshToken,
    expiresInMins: 1,
  });

  console.log(accessToken);
  console.log(refreshToken);
  iUserWithTokens.accessToken = accessToken;
  iUserWithTokens.refreshToken = refreshToken;
  localStorage.setItem("user", JSON.stringify(iUserWithTokens));
};
