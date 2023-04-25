import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Videocard from "../Videocard/Videocard.jsx";
import Video from "../../Video/Video.jsx";

const SliderContainer = styled.div`
  margin: 5%;
  @media (min-width: 768px) {
    margin: 1%;
  }
`;

export class SimpleSlider extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <SliderContainer>
        <Slider>
          <Video />
        </Slider>
      </SliderContainer>
    );
  }
}

export class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.elements.map((element) => (
            <Videocard
              imgUrl={element.videoImg}
              alt={element.desc}
              border={this.props.color}
              key={element.id}
              setVideoId={this.props.setVideoId}
              videoId={element.id}
            />
          ))}
        </Slider>
      </div>
    );
  }
}
