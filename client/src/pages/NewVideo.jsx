import styled from "styled-components";
import Form from "../components/Form/Form.jsx";
import { HomeStyled } from "./Home.jsx";
import Input from "../components/Input/Input.jsx";
import { body_small } from "../components/UI/variables.js";
import { Link } from "react-router-dom";
import FormTitle from "../components/Form/FormTitle.jsx";
import FormButton from "../components/Form/FormButton.jsx";
import FormButtonsContainer from "../components/Form/FormButtonsContainer.jsx";
import ButtonsSubmit from "../components/Form/ButtonsSubmit.jsx";

const formInputs = [
  {
    element: "input",
    labelText: "Título",
    type: "text",
    placeholder: "título",
  },
  {
    element: "input",
    labelText: "Link del vídeo",
    type: "text",
    placeholder: "Link del vídeo",
  },
  {
    element: "input",
    labelText: "Link de la imagen del vídeo",
    type: "text",
    placeholder: "Link de la imagen del vídeo",
  },
  {
    element: "select",
    optionDefault: "Escoja una categoría",
    selectOptions: [{ value: "Front End" }, { value: "Back End" }],
  },
  {
    element: "textarea",
    placeholder: "Descripción",
  },
  {
    element: "input",
    labelText: "Usuario",
    type: "text",
    placeholder: "Usuario",
  },
];

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
        {formInputs.map((element, index) => (
          <Input element={element} key={index} />
        ))}

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
