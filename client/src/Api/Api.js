import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getVideoList = async(url) => {
    return await api.get(url);
}

export const createVideo = async(url, getData) => {
    return await api.post(url, { id: uuidv4(), ...getData });
}

export const deleteVideo = async(url) => {
  return await api.delete(url);
}

export const getCategories = async(url) => {
  return await api.get(url);
  
}

export const createCategory = async(url, getData) => {
    return await api.post(url, { id: uuidv4(), ...getData });
}
