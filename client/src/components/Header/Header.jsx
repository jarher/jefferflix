import styled from "styled-components";
import Banner from "../Banner/Banner.jsx";

import {
  color_black, color_gray_lighter, color_primary,
} from "../UI/variables.js";
import ButtonStyle from "../Button/Button.jsx";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color_black};
  border-bottom:1px solid ${color_primary};
  padding: 4%;
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 2% 3%;
    display: flex;
    justify-content: space-between;
  }
`;

const ButtonHeader = styled(ButtonStyle)`
  display: none;
  background-color: transparent;
  border: 1px solid ${color_gray_lighter};
  @media (min-width: 768px) {
    display: block;
  }
`;

const Header = () => <HeaderStyle>
  <Banner />
  <ButtonHeader>
    <a href="url">Nuevo Video</a>
  </ButtonHeader>
</HeaderStyle>;

export default Header;
