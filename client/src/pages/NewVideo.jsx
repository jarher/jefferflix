import styled from "styled-components";
import Form from "../components/Form/Form.jsx";
import { HomeStyled } from "./Home.jsx";
import Input from "../components/Input/Input.jsx";
import {
  color_gray_lighter,
  title_small,
  body_normal,
  body_small,
  color_gray_900,
  color_gray_700,
  color_white,
  color_primary,
  font_weight_600,
} from "../components/UI/variables.js";
import ButtonStyle from "../components/Button/Button.jsx";
import { Link } from "react-router-dom";

const NewVideoContainer = styled(HomeStyled)`
  padding: 5%;
`;
const FormTitle = styled.h1`
  font-family: "Roboto-regular", sans-serif;
  font-size: ${title_small};
  text-align: center;
  color: ${color_gray_lighter};
  margin: 5% 0 15%;
`;

const FormButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px
`;

const ButtonsSubmit = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ButtonSubmit = styled(ButtonStyle)`
  font-family: "SourceSansPro", sans-serif;
  font-size: ${body_normal};
  font-weight: ${font_weight_600};
  background-color: ${color_primary};
  color:${color_white};
  width: 135px;
`;

const ButtonClean = styled(ButtonSubmit)`
  background-color: ${color_gray_700};
  color: ${color_gray_900};
`;

const ButtonRedirect = styled(ButtonSubmit)`
  font-size: ${body_small};
  align-self: end;
`;

const NewVideo = () => {
  return (
    <NewVideoContainer>
      <Form>
        <FormTitle>Nuevo Video</FormTitle>
        <Input element={"input"} />
        <Input element={"input"} />
        <Input element={"textarea"} />
        <FormButtons>
          <ButtonsSubmit>
            <ButtonSubmit>Guardar</ButtonSubmit>
            <ButtonClean>Limpiar</ButtonClean>
          </ButtonsSubmit>
          <ButtonRedirect>
            <Link to="/newCategory">Nueva Categoría</Link>
          </ButtonRedirect>
        </FormButtons>
      </Form>
    </NewVideoContainer>
  );
};

export default NewVideo;
