import styled from "styled-components";

const Carousel = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0 2% 2%;
  @media (min-width: 1024px) {
    margin:1%;
  }
`;

export default Carousel;
