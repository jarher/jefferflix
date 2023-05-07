import styled from "styled-components";
import Form from "../components/Form/Form.jsx";
import { body_small } from "../components/UI/variables.js";
import { Link } from "react-router-dom";
import FormTitle from "../components/Form/FormTitle.jsx";
import FormButton from "../components/Form/FormButton.jsx";
import FormButtonsContainer from "../components/Form/FormButtonsContainer.jsx";
import ButtonsSubmit from "../components/Form/ButtonsSubmit.jsx";
import { useState, useContext, useEffect } from "react";
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
import { FooterContext } from "../Context/FooterContext.js";
import { createVideo, getCategories } from "../Api/Api.js";
import { DataContext } from "../Context/DataContext.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const NewVideo = () => {
  const { bannerVisibility } = useContext(FooterContext);
  const { toastifySettings, ToastifyComponent } = useContext(DataContext);

  const [title, setTitle] = useState({ value: "", valid: null });
  const [videoLink, setVideoLink] = useState({ value: "", valid: null });
  const [backgroundVideo, setBackgroundVideo] = useState({
    value: "",
    valid: null,
  });
  const [categorySelected, setCategorySelected] = useState({
    value: "",
    valid: null,
  });
  const [description, setDescription] = useState({ value: "", valid: null });
  const [user, setUser] = useState({ value: "", valid: null });

  const [categories, setCategories] = useState([]);

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
      state: categorySelected,
      labelText: "Seleccione una Categoría",
      placeholder: null,
      onChangeFunc(value) {
        setCategorySelected({ value: value, valid: validateSelect(value) });
      },
      errorMessage: "Seleccione una categoría",
      options: categories,
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
      errorMessage:
        "No se acepta contenido vacío, ni caracteres especiales excepto los alfanuméricos, barra baja(_) y guión (-)",
      options: null,
    },
  ];

  const getCategoryData = async () => {
    try {
      const res = await getCategories("/categories");
      if (res.status === 200 && res.data.length > 0) {
        setCategories(
          res.data.map((category) => {
            return { id: category.id, value: category.title };
          })
        );
      }
    } catch {
      toast.error("Error de conexión al servidor", toastifySettings);
    }
  };

  const SendData = async (values) => {
    try {
      const res = await createVideo("/videoList", values);
      if (res.status === 201) {
        toast.success("Vídeo Creado satisfactoriamente", toastifySettings);
      }
    } catch {
      toast.error(
        "Ocurrió un error, inténtelo de nuevo más tarde",
        toastifySettings
      );
    }
  };

  useEffect(() => {
    bannerVisibility(true);
    getCategoryData();
  }, []);

  const cleanForm = () => {
    setTitle({ value: "", valid: null });
    setVideoLink({ value: "", valid: null });
    setBackgroundVideo({ value: "", valid: null });
    setCategorySelected({ value: "", valid: null });
    setDescription({ value: "", valid: null });
    setUser({ value: "", valid: null });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    SendData({
      title: title.value,
      videoLink: videoLink.value,
      videoImg: backgroundVideo.value,
      category: categorySelected.value,
      desc: description.value,
      user: user.value,
    });

    cleanForm();
  };

  return (
    <NewVideoContainer>
      <>
        <ToastifyComponent />
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
                options={categories}
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
      </>
    </NewVideoContainer>
  );
};

export default NewVideo;
