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

const NewVideoContainer = styled(HomeStyled)`
  padding: 5%;
  align-items: center;
`;

const ButtonRedirect = styled(FormButton)`
  font-size: ${body_small};
  align-self: end;
`;

const options = [
  { id: 1, value: "Front End"},
  { id: 2, value: "Back End"},
];

const NewVideo = () => {
  const [title, setTitle] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [backgroundVideo, setBackgroundVideo] = useState("");
  const [selected, setSelected] = useState("Front End");
  const [description, setDescription] = useState("");
  const [user, setUser] = useState("");

  const cleanForm = () => {
    setTitle("");
    setVideoLink("");
    setBackgroundVideo("");
    setSelected("Front End");
    setDescription("");
    setUser("");
  }

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <NewVideoContainer>
      <Form onSubmit={formSubmit}>
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
          <Select
            Options={options}
            inputFunction={setSelected}
            selected={selected}
          />
          <Error message={"message"} />
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
            <FormButton $clean onClick={cleanForm}>
              Limpiar
            </FormButton>
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
