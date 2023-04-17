import styled from "styled-components";
import Form from "../components/Form/Form.jsx";
import { HomeStyled } from "./Home.jsx";
import Input from "../components/Input/Input.jsx";
import {
  body_small,
} from "../components/UI/variables.js";
import { Link } from "react-router-dom";
import FormTitle from "../components/Form/FormTitle.jsx";
import FormButton from "../components/Form/FormButton.jsx";
import FormButtonsContainer from "../components/Form/FormButtonsContainer.jsx";
import ButtonsSubmit from "../components/Form/ButtonsSubmit.jsx";

const NewVideoContainer = styled(HomeStyled)`
  padding: 5%;
`;

const ButtonRedirect = styled(FormButton)`
  font-size: ${body_small};
  align-self: end;
`;

const NewVideo = () => {
  return (
    <NewVideoContainer>
      <Form>
        <FormTitle>Nuevo Video</FormTitle>
        <Input
          element={"input"}
          labelText={"Título"}
          type="text"
          placeholder={"título"}
        />
        <Input element={"textarea"} placeholder={"Descripción"} />
        <FormButtonsContainer>
          <ButtonsSubmit>
            <FormButton>Guardar</FormButton>
            <FormButton $clean>Limpiar</FormButton>
          </ButtonsSubmit>
          <ButtonRedirect>
            <Link to="/newCategory">Nueva Categoría</Link>
          </ButtonRedirect>
        </FormButtonsContainer>
      </Form>
    </NewVideoContainer>
  );
};

export default NewVideo;
