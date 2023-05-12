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
import { createVideo, getCategories, getUser } from "../Api/Api.js";
import { DataContext } from "../Context/DataContext.js";
import { useNavigate } from "react-router-dom";
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
  const {
    toastifySettings,
    ToastifyComponent,
    video_List_Context,
    filterUser,
  } = useContext(DataContext);

  const [title, setTitle] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [videoLink, setVideoLink] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [backgroundVideo, setBackgroundVideo] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [categorySelected, setCategorySelected] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [description, setDescription] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [user, setUser] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [userSession, setUserSession] = useState({});
  const [users, setUsers] = useState([]);
  const [isSending, setIsSending] = useState(false);

  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  const formElements = [
    {
      formElement: "input",
      type: "text",
      state: title,
      labelText: "Título",
      placeholder: "Título",
      onChangeFunc(input) {
        setTitle({
          value: input,
          valid: validateTitle(input, video_List_Context),
        });
      },
      onBlurFunc(input) {
        setTitle({
          value: input,
          valid: validateTitle(input, video_List_Context),
        });
      },
      errorMessage: [
        "Ingrese el título del vídeo",
        "Título del vídeo existente. Introduzca otro diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: videoLink,
      labelText: "Link del vídeo",
      placeholder: "Link del vídeo",
      onChangeFunc(input) {
        setVideoLink({
          value: input,
          valid: validateVideoLink(input, video_List_Context),
        });
      },
      onBlurFunc(input) {
        setVideoLink({
          value: input,
          valid: validateVideoLink(input, video_List_Context),
        });
      },
      errorMessage: [
        "Introduzca la Url del vídeo",
        "Url Inválida",
        "Url existente. Ingrese otra Url diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: backgroundVideo,
      labelText: "Link de la imagen del vídeo",
      placeholder: "Link de la imagen del vídeo",
      onChangeFunc(input) {
        setBackgroundVideo({
          value: input,
          valid: validateImgUrl(input, video_List_Context),
        });
      },
      onBlurFunc(input) {
        setBackgroundVideo({
          value: input,
          valid: validateImgUrl(input, video_List_Context),
        });
      },
      errorMessage: [
        "Introduzca la Url de la imagen del vídeo",
        "Url Inválida",
        "Url existente. Ingrese otra Url diferente",
      ],
      options: null,
    },
    {
      formElement: "select",
      type: null,
      state: categorySelected,
      labelText: "Seleccione una Categoría",
      placeholder: null,
      onChangeFunc(input) {
        setCategorySelected({
          value: input,
          valid: validateSelect(input),
        });
      },
      onBlurFunc(input) {
        setCategorySelected({
          value: input,
          valid: validateSelect(input),
        });
      },
      errorMessage: ["Por favor seleccione una categoría"],
      options: categories,
    },
    {
      formElement: "textarea",
      type: null,
      state: description,
      labelText: null,
      placeholder: "Descripción",
      onChangeFunc(input) {
        setDescription({
          value: input,
          valid: validateTextarea(input, video_List_Context),
        });
      },
      onBlurFunc(input) {
        setDescription({
          value: input,
          valid: validateTextarea(input, video_List_Context),
        });
      },
      errorMessage: [
        "Ingrese una descripción del vídeo",
        "Descripción existente. Introduzca otra diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: user,
      labelText: "Usuario",
      placeholder: "Usuario",
      onChangeFunc(input) {
        setUser({
          value: input,
          valid: validateUser(input, video_List_Context, users, userSession),
        });
      },
      onBlurFunc(input) {
        setUser({
          value: input,
          valid: validateUser(input, users, userSession),
        });
      },
      errorMessage: [
        "Introduzca un nombre de usuario",
        "No se acepta contenido vacío, ni caracteres especiales excepto los alfanuméricos, barra baja(_) y guión (-)",
        "Nombre de usuario incompatible. Por favor ingrese el nombre correcto",
      ],
      options: null,
    },
  ];

  const getUsers = async () => {
    try {
      const res = await getUser("/user");
      if (res.status === 200) {
        setUsers(res.data);
      }
    } catch {
      toast.error("Error de conexión al servidor", toastifySettings);
    }
  };

  // const filterUser = () =>
  //   users.filter((user) => user.useremail === userSession.userEmail)[0];

  const getCategoryData = async () => {
    try {
      const res = await getCategories("/categories");
      if (res.status === 200 && res.data.length > 0) {
        const selectUser = filterUser(users, userSession);
        const catUser = res.data.filter(
          (data) => data.user === selectUser.username
        );
        setCategories(
          catUser.map((category) => {
            return { id: category.id, value: category.title };
          })
        );
      } else {
        toast.error("Error, recurso no encontrado");
      }
    } catch {
      toast.error(
        "No existe categoría para el vídeo. Por favor crea una",
        toastifySettings
      );
    }
  };

  const SendData = async (values) => {
    try {
      const res = await createVideo("/videoList", values);
      if (res.status === 201) {
        toast.success("Vídeo Creado satisfactoriamente", toastifySettings);
        setIsSending(true);
      }
    } catch {
      toast.error(
        "Ocurrió un error, inténtelo de nuevo más tarde",
        toastifySettings
      );
    }
  };

  const cleanForm = () => {
    setTitle({
      value: "",
      valid: { index: null, value: null },
    });
    setVideoLink({
      value: "",
      valid: { index: null, value: null },
    });
    setBackgroundVideo({
      value: "",
      valid: { index: null, value: null },
    });
    setCategorySelected({
      value: "",
      valid: { index: null, value: null },
    });
    setDescription({
      value: "",
      valid: { index: null, value: null },
    });
    setUser({
      value: "",
      valid: { index: null, value: null },
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const selectUser = filterUser();
    if (selectUser.username === user.value) {
      SendData({
        title: title.value,
        videoLink: videoLink.value,
        videoImg: backgroundVideo.value,
        category: categorySelected.value,
        desc: description.value,
        user: user.value,
      });
    } else {
      toast.error("Usuario incorrecto. Por favor inténtelo de nuevo");
    }

    cleanForm();
  };

  useEffect(() => {
    bannerVisibility(true);
    getCategoryData();
    getUsers();
    setUserSession(JSON.parse(localStorage.getItem("userSession")));
  }, []);

  useEffect(() => {
    if (isSending) {
      setTimeout(() => navigate("/"), 5000);
    }
  }, [isSending]);

  return (
    <NewVideoContainer>
      <>
        <ToastifyComponent />
        <Form onSubmit={formSubmit}>
          <FormTitle>Nuevo Video</FormTitle>
          {formElements.map((element, i) => {
            const error = element.state.valid.value;
            return (
              <FormWrapper
                error={error}
                errorMessage={
                  error ? element.errorMessage[element.state.valid.index] : ""
                }
                element={element}
                key={i}
              />
            );
          })}
          <FormButtonsContainer>
            <ButtonsSubmit>
              <FormButton
                disabled={
                  title.valid.value === true ||
                  videoLink.valid.value === true ||
                  backgroundVideo.valid.value === true ||
                  categorySelected.valid.value === true ||
                  description.valid.value === true ||
                  user.valid.value === true
                }
              >
                Guardar
              </FormButton>
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
