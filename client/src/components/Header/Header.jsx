import styled from "styled-components";
import Banner from "../Banner/Banner.jsx";
import {
  color_black,
  color_gray_lighter,
  color_primary,
} from "../UI/variables.js";
import ButtonStyle from "../Button/Button.jsx";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext.js";

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color_black};
  border-bottom: 1px solid ${color_primary};
  padding: 4%;
  box-sizing: border-box;
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  height: 11vh;
  @media (min-width: 768px) {
    padding: 1% 3%;
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

const Header = () => {
  const { userState } = useContext(DataContext);
  
  return (
    <HeaderStyle>
      <>
        <Banner />
        <ButtonHeader>
          {userState.isLogin ? (
            <Link to="/newVideo">Nuevo Video</Link>
          ) : userState.isRegister ? (
            <Link to="/Login">Iniciar Sesión</Link>
          ) : (
            <Link to="/register">Registrarse</Link>
          )}
        </ButtonHeader>
      </>
    </HeaderStyle>
  );
};

export default Header;
