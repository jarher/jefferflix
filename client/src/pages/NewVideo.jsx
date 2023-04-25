import styled from "styled-components";
import Form from "../components/Form/Form.jsx";
import { body_small } from "../components/UI/variables.js";
import { Link } from "react-router-dom";
import FormTitle from "../components/Form/FormTitle.jsx";
import FormButton from "../components/Form/FormButton.jsx";
import FormButtonsContainer from "../components/Form/FormButtonsContainer.jsx";
import ButtonsSubmit from "../components/Form/ButtonsSubmit.jsx";
import { useState } from "react";
import FormWrapper from "../components/Form/FormWrapper.jsx";
import { Layer } from "../components/Layer/Layer.jsx";
import {
  validateSelect,
  validateImgUrl,
  validateTitle,
  validateVideoLink,
  validateTextarea,
  validateUser,
} from "../ValidateForm/Validate.js";
import { useContext } from "react";
import {FooterContext} from "../Context/Context.js";
import { useEffect } from "react";

const NewVideoContainer = styled(Layer)`
  padding: 5%;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const ButtonRedirect = styled(FormButton)`
  font-size: ${body_small};
  align-self: end;
  @media (min-width: 768px) {
    width: 180px;
    padding: 2%;
  }
`;

const options = [
  { id: 1, value: "Front End" },
  { id: 2, value: "Back End" },
];

const NewVideo = () => {
  const [title, setTitle] = useState({ value: "", valid: null });
  const [videoLink, setVideoLink] = useState({ value: "", valid: null });
  const [backgroundVideo, setBackgroundVideo] = useState({
    value: "",
    valid: null,
  });
  const [selected, setSelected] = useState({ value: "Back End", valid: null });
  const [description, setDescription] = useState({ value: "", valid: null });
  const [user, setUser] = useState({ value: "", valid: null });

  const formElements = [
    {
      formElement: "input",
      type: "text",
      state: title,
      labelText: "Título",
      placeholder: "Título",
      onChangeFunc(input) {
        setTitle({ value: input, valid: validateTitle(input) });
      },
      errorMessage: "Ingrese el título del vídeo",
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: videoLink,
      labelText: "Link del vídeo",
      placeholder: "Link del vídeo",
      onChangeFunc(input) {
        setVideoLink({ value: input, valid: validateVideoLink(input) });
      },
      errorMessage: "Url Inválida",
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: backgroundVideo,
      labelText: "Link de la imagen del vídeo",
      placeholder: "Link de la imagen del vídeo",
      onChangeFunc(input) {
        setBackgroundVideo({ value: input, valid: validateImgUrl(input) });
      },
      errorMessage: "Url Inválida",
      options: null,
    },
    {
      formElement: "select",
      type: null,
      state: selected,
      labelText: "Seleccione una Categoría",
      placeholder: null,
      onChangeFunc(value) {
        setSelected({ value: value, valid: validateSelect(value) });
      },
      errorMessage: "Seleccione una categoría",
      options: options,
    },
    {
      formElement: "textarea",
      type: null,
      state: description,
      labelText: null,
      placeholder: "Descripción",
      onChangeFunc(value) {
        setDescription({ value: value, valid: validateTextarea(value) });
      },
      errorMessage: "Ingrese una descripción del vídeo",
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: user,
      labelText: "Usuario",
      placeholder: "Usuario",
      onChangeFunc(input) {
        setUser({ value: input, valid: validateUser(input) });
      },
      errorMessage: "No se acepta contenido vacío, ni caracteres diferentes a los alfanuméricos, barra baja(_) y guión (-)",
      options: null,
    },
  ];

  const {bannerVisibility} = useContext(FooterContext);

  useEffect(() => {
      bannerVisibility(true);
  }, []);
  

  
  const cleanForm = () => {
    setTitle({ value: "", valid: null });
    setVideoLink({ value: "", valid: null });
    setBackgroundVideo({ value: "", valid: null });
    setSelected({ value: "Back End", valid: null });
    setDescription({ value: "", valid: null });
    setUser({ value: "", valid: null });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <NewVideoContainer>
      <Form onSubmit={formSubmit}>
        <FormTitle>Nuevo Video</FormTitle>
        {formElements.map((element, i) => {
          const {
            formElement,
            state,
            type,
            labelText,
            placeholder,
            onChangeFunc,
            options
          } = element;
         
          return (
            <FormWrapper
              element={formElement}
              type={type}
              labelText={labelText}
              value={state.value}
              placeholder={placeholder}
              error={state.valid === false}
              errorMessage={state.valid === false ? element.errorMessage : ""}
              onChangeFunc={onChangeFunc}
              options={options}
              key={i}
            />
          );
        })}
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
