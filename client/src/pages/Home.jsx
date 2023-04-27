import styled from "styled-components";
import Carousel from "../components/Carousel/Carousel/Carousel.jsx";
import { Layer } from "../components/Layer/Layer.jsx";
import React, { useState } from "react";
import ButtonStyle from "../components/Button/Button.jsx";
import {
  body_small,
  body_smaller,
  color_gray_lighter,
  font_weight_300,
  font_weight_600,
} from "../components/UI/variables.js";
import { MultipleItems } from "../components/Carousel/Slider/Slider.jsx";
import Video from "../components/Video/Video.jsx";
import { useContext } from "react";
import { FooterContext } from "../Context/Context.js";
import { useEffect } from "react";

export const HomeStyled = styled(Layer)`
`;

const CarouselWrapper = styled.div`
  margin-top: 220px;
  min-height: 60vh;
  padding-top: 2%;
  box-sizing: border-box;
`;

const CategoryButton = styled(ButtonStyle)`
  background-color: ${(props) => props.catColor};
  font-size: ${body_small};
  font-weight: ${font_weight_600};
  font-family: "Roboto-Light", sans-serif;
  color: ${color_gray_lighter};
  padding: 2%;
  margin-left: 2%;
  align-self: flex-start;
  @media (min-width: 768px) {
    margin-top: 1%;
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
    margin: 2% 1% 1% 2%;
  }
`;

const Home = () => {
  const { bannerVisibility } = useContext(FooterContext);

  useEffect(() => {
    bannerVisibility(false);
  }, []);

  const [videoList, setVideoList] = useState([
    {
      id: 1,
      title:
        "IMPERIOS (Historia de China-5) El Último Imperio  -  Documentales",
      videoLink: "https://www.youtube.com/watch?v=6i8TRX3A3ow",
      videoImg:
        "https://i.ytimg.com/vi/6i8TRX3A3ow/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBfgCTo1zbEQUrqQ2yIoxuGA_6whA",
      category: "Historia",
      desc: "Historia de china",
      user: "Jeffer Rojas",
    },
    {
      id: 2,
      title: "Encuentran la isla oculta del diablo",
      videoLink: "https://www.youtube.com/s4OT2TPpbFI",
      videoImg:
        "https://i.ytimg.com/vi/s4OT2TPpbFI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXgpB950FHL7MN1QssapVQPkdnLA",
      category: "Misterios",
      desc: "Isla misteriosa",
      user: "Jeffer Rojas",
    },
    {
      id: 3,
      title: "ASIA (India)  -  Documentales",
      videoLink: "https://www.youtube.com/watch?v=sv-6ukY2O7Q",
      videoImg:
        "https://i.ytimg.com/vi/sv-6ukY2O7Q/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLC6lM8-0dgUaZ_1TqI7L3OUODDZtA",
      category: "Historia",
      desc: "Historia de la India",
      user: "Jeffer Rojas",
    },
  ]);

  const [categoriesList, setCategoriesList] = useState([
    {
      id: 100,
      title: "Historia",
      color: "red",
      desc: "Sucesos de la humanidad",
      user: "Jeffer Rojas",
    },
    {
      id: 101,
      title: "Misterios",
      color: "green",
      desc: "Acontecimientos extraños y sorprendentes",
      user: "Jeffer Rojas",
    },
  ]);

  const [videoId, setVideoId] = useState(1);

  return (
    <HomeStyled>
      <Video video={videoList.filter((video) => video.id === videoId)[0]} />
      <CarouselWrapper>
        {categoriesList.map((category) => (
          <Carousel key={category.id}>
            <CategoryButton catColor={category.color}>
              {category.title}
            </CategoryButton>
            <SubtitleCategory>{category.desc}</SubtitleCategory>
            <MultipleItems
              elements={videoList.filter(
                (video) => video.category === category.title
              )}
              color={category.color}
              setVideoId={setVideoId}
            />
          </Carousel>
        ))}
      </CarouselWrapper>
    </HomeStyled>
  );
};

export default Home;
