import styled from "styled-components";
import { color_gray_lighter, title_small } from "../UI/variables";

const FormTitle = styled.h1`
  font-family: "Roboto-regular", sans-serif;
  font-size: ${title_small};
  text-align: center;
  color: ${color_gray_lighter};
  margin: 5% 0 15%;
  @media (min-width: 768px) {
    margin: 0 0 5%;
  }
`;

export default FormTitle;