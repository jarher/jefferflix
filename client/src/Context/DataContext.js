import { createContext } from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [videoId, setVideoId] = useState("");

  const [modalMessage, setModalMessage] = useState("");

  const [toastMessage, setToastMessage] = useState({value:"", success:null});

  const set_videoID = (value) => setVideoId(value);

  const set_Modal_Message = (value) => setModalMessage(value);

  const set_Toast_Message = (value) => setToastMessage(value);

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

  const ToastifyComponent = () => (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
  return (
    <DataContext.Provider
      value={{
        videoId,
        set_videoID,
        modalMessage,
        set_Modal_Message,
        toastifySettings,
        ToastifyComponent,
        toastMessage,
        set_Toast_Message
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
