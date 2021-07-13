import { AxiosPromise } from "axios";
import commonAxios from "./commonAxios";

const commonParams = {
  time: +new Date(),
};

export const login = (data: ILoginParams): AxiosPromise => {
  return commonAxios({
    method: "POST",
    url: "/login",
    data: { ...commonParams, ...data },
  });
};

export const getUserInfo = (): AxiosPromise => {
  return commonAxios({
    url: "/userInfo",
  });
};
