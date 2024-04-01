import { ILoginResponse } from "../types/auth";
import httpClient from "./httpClient";

export const loginWithToken = async(token:string):Promise<ILoginResponse>=>{
  return  (  await httpClient.get("/auth/me",{headers:{
    Authorization:`Bearer ${token}`
  }})).data;
}