import styled from "styled-components";
import { color_black_200 } from "../UI/variables";

export const Layer = styled.div`
  background-color: ${color_black_200};
  min-height: calc(100vh - 10vh);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  /* @media (min-width: 768px) {
    min-height: 70vh;
  } */
`;