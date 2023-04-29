import { createContext } from "react";
import { useState, useEffect } from "react";
import { getCategories, getVideoList } from "../Api/Api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [videoList, setVideoList] = useState([]);

  const [categoriesList, setCategoriesList] = useState([]);

  const [videoId, setVideoId] = useState("");

  useEffect(() => {
    const getVideoData = async () => {
      const res = await getVideoList("/videoList");
      if (res.status === 200 && res.data.length > 0) {
        setVideoId(res.data[0].id);
        setVideoList(res.data);
      }
    };
    const getCategoryData = async () => {
      const res = await getCategories("/categories");
      if (res.status === 200 && res.data.length > 0) {
        setCategoriesList(res.data);
      }
    };
    getCategoryData();
    getVideoData();
  }, []);

  function set_videoID(value) {
    setVideoId(value);
  }
  return (
    <DataContext.Provider
      value={{ videoList, categoriesList, videoId, set_videoID }}
    >
      {children}
    </DataContext.Provider>
  );
}
