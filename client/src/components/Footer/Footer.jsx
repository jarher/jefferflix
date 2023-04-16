import styled from "styled-components";
import Banner from "../Banner/Banner";
import { body_normal, color_black, color_primary } from "../UI/variables.js";
import ButtonStyle from "../Button/Button.jsx";
import {Link} from "react-router-dom";

const FooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${color_black};
  border-top: 1px solid ${color_primary};
  height: 10vh;
`;

const BannerFooter = styled(Banner)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 3% auto;
  display: none;
`;

const ButtonFooter = styled(ButtonStyle)`
  border-radius: 0;
  font-size: ${body_normal};
  background-color: ${color_primary};
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <BannerFooter />
      <ButtonFooter>
        <Link to="url">Nuevo Video</Link>
      </ButtonFooter>
    </FooterStyle>
  );
};

export default Footer;
