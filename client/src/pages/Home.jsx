import styled from "styled-components";
import Carousel from "../components/Carousel/Carousel/Carousel.jsx";
import { Layer } from "../components/Layer/Layer.jsx";
import React, { useContext, useEffect, useState } from "react";
import ButtonStyle from "../components/Button/Button.jsx";
import {
  body_smaller,
  color_black,
  color_gray_lighter,
  font_weight_300,
  font_weight_600,
} from "../components/UI/variables.js";
import { MultipleItems } from "../components/Carousel/Slider/Slider.jsx";
import Video from "../components/Video/Video.jsx";
import {
  getVideoList,
  deleteVideo,
  getCategories,
  getUser,
} from "../Api/Api.js";
import { DataContext } from "../Context/DataContext.js";
import { FooterContext } from "../Context/FooterContext.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useWindowSize } from "react-use";

export const HomeStyled = styled(Layer)``;

const CarouselWrapper = styled.div`
  min-height: 60vh;
  padding-top: 2%;
  box-sizing: border-box;
  margin-top: 12vh;
  @media (min-width: 425px) {
    padding-top: 1%;
    margin-top: 5vh;
  }
`;
const CategoryButton = styled(ButtonStyle)`
  background-color: ${(props) => props.catColor};
  font-size: ${body_smaller};
  font-weight: ${font_weight_600};
  font-family: "Roboto-Light", sans-serif;
  color: ${color_gray_lighter};
  padding: 2%;
  margin-left: 2%;
  align-self: flex-start;
  @media (min-width: 425px) {
    margin-top: 2%;
    margin-left: 1%;
    padding: 1%;
  }
`;
const SubtitleCategory = styled.h3`
  color: ${color_gray_lighter};
  font-size: ${body_smaller};
  font-weight: ${font_weight_300};
  font-family: "Roboto-Light", sans-serif;
  margin-left: 2%;
  @media (min-width: 768px) {
    margin: 1%;
  }
`;
const ModalWrapper = styled.div`
  background-color: ${color_black};
  position: fixed;
  left: 0;
  right: 0;
  top: 11vh;
  margin: auto;
  width: 50%;
  z-index: 999;
  padding: 5%;
  background: black;
  border-radius: 0 0 20px 20px;
`;
const ModalText = styled.p`
  color: ${color_gray_lighter};
  text-align: center;
`;
const ModalButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalButton = styled(ButtonStyle)``;

const Home = () => {
  const {
    set_Video_Context,
    videoId,
    set_videoID,
    modalMessage,
    set_Modal_Message,
    toastifySettings,
    ToastifyComponent,
  } = useContext(DataContext);

  const { bannerVisibility } = useContext(FooterContext);

  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [userVideos, setUserVideos] = useState([]);
  const [userSession, setUserSession] = useState({});

  const { width } = useWindowSize();

  const getVideoData = async () => {
    try {
      const res = await getVideoList("/videoList");
      if (res.status === 200) {
        const Session = JSON.parse(localStorage.getItem("userSession"));
        if (Session) {
          const { useremail } = Session;
          const user = users.filter((user) => user.useremail === useremail)[0];
          console.log(useremail, user);
          // const userVid = res.data.filter(
          //   (video) => video.user === user.username
          // );
          // setUserVideos(userVid);
          // set_videoID(userVid[0].id);
          // setUserSession(Session);
          // set_Video_Context(res.data);
        }
        
      }
    } catch {
      toast.error("Error de conexión al servidor", toastifySettings);
    }
  };

  const getCategoryData = async () => {
    const res = await getCategories("/categories");
    if (res.status === 200 && res.data.length > 0) {
      const user = users.filter(
        (user) => user.useremail === userSession.userEmail
      );
      const userCat = res.data.filter((cat) => cat.user === user.username);
      const cat = userCat.map((cat) => cat.title).sort();
      const catList = cat.map((element) => {
        return userCat.filter((cat) => cat.title === element)[0];
      });

      setCategories(catList);
    }
  };

  const getUsers = async () => {
    try {
      const res = await getUser("/user");
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch {
      toast.error("Error de conexión al servidor", toastifySettings);
    }
  };

  const delete_video = async () => {
    const res = await deleteVideo(`/videoList/${videoId}`);
    if (res.status === 200) {
      toast.success("Vídeo Eliminado", toastifySettings);
      getVideoData();
    }
    if (res.status === 404) {
      toast.error("Ocurrió un error", toastifySettings);
    }
    set_Modal_Message("");
  };

  function ModalMessage({ message }) {
    return (
      <ModalWrapper>
        <ModalText>{message}</ModalText>
        <ModalButtonsWrapper>
          <ModalButton onClick={delete_video}>Aceptar</ModalButton>
          <ModalButton onClick={() => set_Modal_Message("")}>
            Rechazar
          </ModalButton>
        </ModalButtonsWrapper>
      </ModalWrapper>
    );
  }

  const categoryInVideo = userVideos.map((video) => video.category);

  useEffect(() => {
    getUsers();
    getCategoryData();
    getVideoData();
  }, []);

  useEffect(() => {
    if (width >= 768) {
      bannerVisibility(true);
    } else {
      bannerVisibility(false);
    }
  });

  return (
    <HomeStyled>
      <>
        <ToastifyComponent />
        {modalMessage && <ModalMessage message={modalMessage} />}
        {userVideos.length > 0 && (
          <>
            <Video
              video={userVideos.filter((video) => video.id === videoId)[0]}
            />
            <CarouselWrapper>
              {categories.map((category) => (
                <Carousel key={category.id}>
                  {categoryInVideo.includes(category.title) && (
                    <>
                      <CategoryButton catColor={category.color}>
                        {category.title}
                      </CategoryButton>
                      <SubtitleCategory>{category.desc}</SubtitleCategory>
                    </>
                  )}
                  <MultipleItems
                    elements={userVideos.filter(
                      (video) => video.category === category.title
                    )}
                    color={category.color}
                  />
                </Carousel>
              ))}
            </CarouselWrapper>
          </>
        )}
      </>
    </HomeStyled>
  );
};

export default Home;
