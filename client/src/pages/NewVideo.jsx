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
import { useState } from "react";
import Textarea from "../components/Textarea/Textarea.jsx";
import FormWrapper from "../components/Form/FormWrapper.jsx";
import Error from "../components/Form/ErrorMessage.jsx";
import Select from "../components/Select/Select.jsx";

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

const options = [
  { id: 1, value: "Escoja una categoría", default: true, isSelected: true },
  { id: 2, value: "Front End", default: false, isSelected: false },
  { id: 3, value: "Back End", default: false, isSelected: false },
];

const NewVideo = () => {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [backgroundVideo, setBackgroundVideo] = useState("");
  const [selected, setSelected] = useState("");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  return (
    <NewVideoContainer>
      <Form>
        <FormTitle>Nuevo Video</FormTitle>
        <FormWrapper>
          <Input
            type={"text"}
            labelText={"Título"}
            value={title}
            placeholder={"Título"}
            inputFunction={setTitle}
          />
          <Error message={"message"} />
        </FormWrapper>
        <FormWrapper>
          <Input
            type={"text"}
            labelText={"Link del vídeo"}
            value={videoLink}
            placeholder={"Link del vídeo"}
            inputFunction={setVideoLink}
          />
          <Error message={"message"} />
        </FormWrapper>
        <FormWrapper>
          <Input
            type={"text"}
            labelText={"Link de la imagen del vídeo"}
            value={backgroundVideo}
            placeholder={"Link de la imagen del vídeo"}
            inputFunction={setBackgroundVideo}
          />
          <Error message={"message"} />
        </FormWrapper>
        <FormWrapper>
          <Select Options={options} inputFunction={setSelected} selected={selected}/>
        </FormWrapper>
        <FormWrapper>
          <Textarea
          value={description}
            placeholder={"Descripción"}
            inputFunction={setDescription}
          />
          <Error message={"message"} />
        </FormWrapper>
        <FormWrapper>
          <Input
            type={"text"}
            labelText={"Usuario"}
            value={user}
            placeholder={"Usuario"}
            inputFunction={setUser}
          />
          <Error message={"message"} />
        </FormWrapper>
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
