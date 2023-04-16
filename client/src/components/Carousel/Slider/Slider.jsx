import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const SliderContainer = styled.div`
    margin: 5%;
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
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <img src="/img/VideoCard.png" alt="videocard" />
          </div>
          <div>
            <img src="/img/VideoCard2.png" alt="videocard" />
          </div>
          <div>
            <img src="/img/VideoCard.png" alt="videocard" />
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </SliderContainer>
    );
  }
}


