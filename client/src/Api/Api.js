import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const api = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
});
//crud videos
export const getVideoList = async (url) => {
  return await api.get(url);
};

export const createVideo = async (url, data) => {
  return await api.post(url, { id: uuidv4(), ...data });
};
export const deleteVideo = async (url) => {
  return await api.delete(url);
};
//crud categories
export const getCategories = async (url) => {
  return await api.get(url);
};

export const getCategory = async (url) => {
  return await api.get(url);
};

export const createCategory = async (url, data) => {
  return await api.post(url, { id: uuidv4(), ...data });
};

export const updateCategory = async (url, data) => {
  return await api.put(url, data);
};

export const deleteCategory = async (url) => {
  return await api.delete(url);
};
// crud user
export const createUser = async (url, data) => {
  return await api.post(url, { id: uuidv4(), ...data });
};
export const getUser = async (url) => {
  return await api.get(url);
};
// export const getAllUsers = async(url) => {
//   return await api.get(url);
// }
export const updateUser = async (url, data) => {
  return await api.put(url, data);
};
export const deleteUser = async (url) => {
  return await api.delete(url);
};
