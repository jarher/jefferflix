import styled from "styled-components";
import Banner from "../Banner/Banner";
import {
  body_normal,
  color_black,
  color_gray_lighter,
  color_primary,
} from "../UI/variables.js";
import ButtonStyle from "../Button/Button.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FooterContext } from "../../Context/FooterContext.js";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${color_black};
  border-top: 1px solid ${color_primary};
`;

const ButtonFooter = styled(ButtonStyle)`
  border-radius: 0;
  font-size: ${body_normal};
  background-color: ${color_primary};
  width: 100%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  @media (min-width:1024px){
    display: none;
  }
`;

const BannerContainer = styled.div`
  padding: 5%;
  @media (min-width: 768px) {
    padding: 1% 0 3%;
  }
`;

const Author = styled.div`
  color: ${color_gray_lighter};
  margin-top: 5%;
  text-align: center;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Footer = () => {
  const {banner} = useContext(FooterContext);
  return (
    <FooterStyle>
      {banner && (
        <BannerContainer>
          <Banner />
          <Author>Sitio hecho por Jeffer Rojas</Author>
        </BannerContainer>
      )}
      {!banner && (
        <ButtonFooter>
          <Link to="/newVideo">Nuevo Video</Link>
        </ButtonFooter>
      )}
    </FooterStyle>
  );
};

export default Footer;
