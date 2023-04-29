import styled from "styled-components";
import Carousel from "../components/Carousel/Carousel/Carousel.jsx";
import { Layer } from "../components/Layer/Layer.jsx";
import React, { useContext, useEffect } from "react";
import ButtonStyle from "../components/Button/Button.jsx";
import {
  body_smaller,
  color_gray_lighter,
  font_weight_300,
  font_weight_600,
} from "../components/UI/variables.js";
import { MultipleItems } from "../components/Carousel/Slider/Slider.jsx";
import Video from "../components/Video/Video.jsx";
import { FooterContext } from "../Context/FooterContext.js";
import { getCategories, getVideoList } from "../Api/Api.js";
import { DataContext } from "../Context/DataContext.js";

export const HomeStyled = styled(Layer)``;
const CarouselWrapper = styled.div`
  min-height: 60vh;
  padding-top: 2%;
  box-sizing: border-box;
  margin-top: 12vh;
  @media (min-width: 425px) {
    padding-top: 1%;
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
  const {videoList, categoriesList, videoId} = useContext(DataContext);

  useEffect(() => {
    bannerVisibility(false);
  });

  const categoryInVideo = videoList.map((video) => video.category);

  return (
    <HomeStyled>
      {videoList.length > 0 && (
        <>
          <Video video={videoList.filter((video) => video.id === videoId)[0]} />
          <CarouselWrapper>
            {categoriesList.map((category) => (
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
                  elements={videoList.filter(
                    (video) => video.category === category.title
                  )}
                  color={category.color}
                />
              </Carousel>
            ))}
          </CarouselWrapper>
        </>
      )}
    </HomeStyled>
  );
};

export default Home;
