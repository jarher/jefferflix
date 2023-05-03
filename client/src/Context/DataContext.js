import { createContext } from "react";
import { useState, useEffect } from "react";
import { getCategories } from "../Api/Api";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [videoId, setVideoId] = useState("");

  const [modalMessage, setModalMessage] = useState("");

  const set_videoID = (value) => setVideoId(value);

  const set_Modal_Message = (value) => setModalMessage(value);


  const toastifySettings = {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  };

  return (
    <DataContext.Provider
      value={{
        videoId,
        set_videoID,
        modalMessage,
        set_Modal_Message,
        toastifySettings,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
