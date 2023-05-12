import styled from "styled-components";
import FormTitle from "../components/Form/FormTitle.jsx";
import FormButtonsContainer from "../components/Form/FormButtonsContainer.jsx";
import ButtonsSubmit from "../components/Form/ButtonsSubmit.jsx";
import FormButton from "../components/Form/FormButton.jsx";
import Form from "../components/Form/Form.jsx";
import FormWrapper from "../components/Form/FormWrapper.jsx";
import CategoryList from "../components/CategoryList/CategoryList.jsx";
import { Layer } from "../components/Layer/Layer.jsx";
import {
  validateColor,
  validateTextareaCat,
  validateTitleCat,
  validateUserCat,
} from "../ValidateForm/Validate.js";
import { useState, useContext, useEffect } from "react";
import { FooterContext } from "../Context/FooterContext.js";
import { createCategory, getCategories, getUser } from "../Api/Api.js";
import { DataContext } from "../Context/DataContext.js";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const NewCategoryContainer = styled(Layer)`
  padding: 5%;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const NewCategory = () => {
  const { bannerVisibility } = useContext(FooterContext);
  const { toastifySettings, ToastifyComponent, toastMessage, filterUser } =
    useContext(DataContext);

  const [catTitle, setCatTitle] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [catColor, setCatColor] = useState({
    value: "#ffba05",
    valid: { index: null, value: null },
  });
  const [catDescription, setcatDescription] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [catUser, setCatUser] = useState({
    value: "",
    valid: { index: null, value: null },
  });
  const [categoryList, setCategoryList] = useState([]);
  const [userSession, setUserSession] = useState({});
  const [users, setUsers] = useState([]);

  const formElements = [
    {
      formElement: "input",
      type: "text",
      state: catTitle,
      labelText: "Título",
      placeholder: "Título",
      onChangeFunc(input) {
        setCatTitle({
          value: input,
          valid: validateTitleCat(input, categoryList),
        });
      },
      onBlurFunc(input) {
        setCatTitle({
          value: input,
          valid: validateTitleCat(input, categoryList),
        });
      },
      errorMessage: [
        "Ingrese el título de la categoría",
        "Nombre de categoría existente. Introduzca otro diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "color",
      state: catColor,
      labelText: "Color",
      placeholder: null,
      onChangeFunc(input) {
        setCatColor({
          value: input,
          valid: validateColor(input, categoryList),
        });
      },
      onBlurFunc(input) {
        setCatColor({
          value: input,
          valid: validateColor(input, categoryList),
        });
      },
      errorMessage: ["Elija un color diferente para la categoría"],
      options: null,
    },
    {
      formElement: "textarea",
      type: null,
      state: catDescription,
      labelText: "Descripción",
      placeholder: "Descripción",
      onChangeFunc(input) {
        setcatDescription({
          value: input,
          valid: validateTextareaCat(input, categoryList),
        });
      },
      onBlurFunc(input) {
        setcatDescription({
          value: input,
          valid: validateTextareaCat(input, categoryList),
        });
      },
      errorMessage: [
        "Ingrese una descripción de la categoría",
        "Descripción existente. Escriba otra diferente",
      ],
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: catUser,
      labelText: "Usuario",
      placeholder: "Usuario",
      onChangeFunc(input) {
        setCatUser({
          value: input,
          valid: validateUserCat(input, users, userSession),
        });
      },
      onBlurFunc(input) {
        setCatUser({
          value: input,
          valid: validateUserCat(input, users, userSession),
        });
      },
      errorMessage: [
        "Ingrese el nombre de usuario",
        "No se acepta contenido vacío, ni caracteres especiales excepto los alfanuméricos, barra baja(_) y guión (-)",
        "Nombre de usuario incorrecto."
      ],
      options: null,
    },
  ];

  const sendData = async (values) => {
    try {
      const res = await createCategory("/categories", values);
      if (res.status === 201) {
        toast.success("Categoría Creada satisfactoriamente", toastifySettings);
        getCategoryData();
      }
    } catch {
      toast.error(
        "Ocurrió un error, inténtelo de nuevo más tarde",
        toastifySettings
      );
    }
  };

  const cleanForm = () => {
    setCatTitle({
      value: "",
      valid: { index: null, value: null },
    });
    setCatColor({
      value: "#FFBA05",
      valid: { index: null, value: null },
    });
    setcatDescription({
      value: "",
      valid: { index: null, value: null },
    });
    setCatUser({
      value: "",
      valid: { index: null, value: null },
    });
  };

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

  const getCategoryData = async () => {
    const res = await getCategories("/categories");
    if (res.status === 200 && res.data.length > 0) {
      const selectUser = filterUser(users, userSession);
      const catUser = res.data.filter(
        (data) => data.user === selectUser.username
      );
      setCategoryList(catUser);
    } else {
      setCategoryList([]);
    }
  };

  useEffect(() => {
    bannerVisibility(true);
    getCategoryData();
    getUsers();
    setUserSession(JSON.parse(localStorage.getItem("userSession")));
  }, []);

  useEffect(() => {
    if (toastMessage.success === true) {
      toast.success(toastMessage.value, toastifySettings);
    }
    if (toastMessage.success === false) {
      toast.error(toastMessage.value, toastifySettings);
    }
    getCategoryData();
  }, [toastMessage]);

  const formSubmit = async (e) => {
    e.preventDefault();
    const selectUser = filterUser(users, userSession);
    console.log(selectUser);
    if (selectUser.username === catUser.value) {
      sendData({
        title: catTitle.value,
        color: catColor.value,
        desc: catDescription.value,
        user: catUser.value,
      });
    } else {
      toast.error("Usuario incorrecto. Por favor inténtelo de nuevo");
    }

    cleanForm();
  };
  return (
    <NewCategoryContainer>
      <>
        <ToastifyComponent />
        <Form onSubmit={formSubmit}>
          <FormTitle>Nueva Categoría</FormTitle>
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
                  catTitle.valid.value === true ||
                  catColor.valid.value === true ||
                  catDescription.valid.value === true ||
                  catUser.valid.value === true
                }
              >
                Guardar
              </FormButton>
              <FormButton $clean onClick={cleanForm}>
                Limpiar
              </FormButton>
            </ButtonsSubmit>
          </FormButtonsContainer>
        </Form>
        {categoryList.length > 0 && <CategoryList catList={categoryList} />}
      </>
    </NewCategoryContainer>
  );
};

export default NewCategory;
