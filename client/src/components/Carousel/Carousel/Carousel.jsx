import styled from "styled-components";

const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 2% 2%;
  @media (min-width: 425px) {
    margin-top: 5%;
  }
  @media (min-width: 600px) {
    margin:1%;
  }
`;

export default Carousel;
