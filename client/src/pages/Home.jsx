import styled from "styled-components";
import {  color_black_200 } from "../components/UI/variables.js";
import Video from "../components/Video/Video.jsx";
import Carousel from "../components/Carousel/Carousel/Carousel.jsx";
import SimpleSlider from "../components/Carousel/Slider/Slider.jsx";
import { Layer } from "../components/Layer/Layer.jsx";

export const HomeStyled = styled(Layer)`
`;



const Home = () => {
  return (
    <HomeStyled>
      <Video />
      <Carousel>
        <SimpleSlider color={"red"} />
      </Carousel>
      <Carousel>
        <SimpleSlider color={"green"} />
      </Carousel>
      <Carousel>
        <SimpleSlider color={"blue"} />
      </Carousel>
    </HomeStyled>
  );
};

export default Home;
