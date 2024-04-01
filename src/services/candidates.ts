import { ICandidate } from "../types/common";
import { AddCandidateDTo } from "../utils/schema";
import httpClient from "./httpClient";

export const createCandidate = async(data:AddCandidateDTo):Promise<ICandidate>=>{
  return  (  await httpClient.post("/candidates",data)).data;
}

export const getCandidates = async():Promise<ICandidate[]>=>{
  return (await httpClient.get("/candidates")).data;
}