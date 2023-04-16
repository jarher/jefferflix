import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Videocard from "../Videocard/Videocard";
import ButtonStyle from "../../Button/Button";
import {
  body_small,
  body_smaller,
  color_gray_lighter,
  font_weight_300,
  font_weight_600,
} from "../../UI/variables";

const SliderContainer = styled.div`
  margin: 5%;
`;

const CategoryButton = styled(ButtonStyle)`
  background-color: green;
  font-size: ${body_small};
  font-weight: ${font_weight_600};
  font-family: "Roboto-Light", sans-serif;
  margin-left: 2%;
  color: ${color_gray_lighter};
  padding:3%
`;
const SubtitleCategory = styled.h3`
  color: ${color_gray_lighter};
  font-size: ${body_smaller};
  font-weight: ${font_weight_300};
  margin: 3% 0 1% 2%;
  font-family: "Roboto-Light",sans-serif;;
`;

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <SliderContainer>
        <CategoryButton>Front End</CategoryButton>
        <SubtitleCategory>Formación frontend de alura latam</SubtitleCategory>
        <Slider {...settings}>
          <Videocard imgUrl={"/img/VideoCard.png"} alt={"videocard"} />
          <Videocard imgUrl={"/img/VideoCard2.png"} alt={"videocard"} />
          <Videocard imgUrl={"/img/VideoCard.png"} alt={"videocard"} />
          <Videocard imgUrl={"/img/VideoCard2.png"} alt={"videocard"} />
        </Slider>
      </SliderContainer>
    );
  }
}
