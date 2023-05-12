import { createContext } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const DataContext = createContext();

export function DataProvider({ children }) {

  const [video_List_Context, set_Video_List_Context] = useState([]);

  const [videoId, setVideoId] = useState("");

  const [modalMessage, setModalMessage] = useState("");

  const [toastMessage, setToastMessage] = useState({value:"", success:null});

  const [userState, setUserState] = useState({isLogin:null, isRegister:null});

  const set_videoID = (value) => setVideoId(value);

  const set_Modal_Message = (value) => setModalMessage(value);

  const set_Toast_Message = (value) => setToastMessage(value);

  const set_Video_Context = (value) => set_Video_List_Context(value);

  const set_User_State = (value) => setUserState(value);

  const filterUser = (users, userSession) => users.filter((user) => user.useremail === userSession.userEmail)[0];

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
        video_List_Context,
        set_Video_Context,
        videoId,
        set_videoID,
        modalMessage,
        set_Modal_Message,
        toastifySettings,
        ToastifyComponent,
        toastMessage,
        set_Toast_Message,
        userState,
        set_User_State,
        filterUser
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
