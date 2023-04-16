import styled from "styled-components";
import {  color_black_200 } from "../components/UI/variables";
import Video from "../components/Video/Video.jsx";
import Carousel from "../components/Carousel/Carousel/Carousel";
import SimpleSlider from "../components/Carousel/Slider/Slider";

const HomeStyled = styled.div`
  background-color: ${color_black_200};
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* @media (min-width: 768px) {
    min-height: 70vh;
  } */
`;



const Home = () => {
  return (
    <HomeStyled>
      <Video />
      <Carousel>
        <SimpleSlider />
      </Carousel>
      <Carousel>
        <SimpleSlider />
      </Carousel>
    </HomeStyled>
  );
};

export default Home;
