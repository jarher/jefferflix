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
  validateTextarea,
  validateTitle,
  validateUser,
} from "../ValidateForm/Validate.js";
import { useState, useContext, useEffect } from "react";
import { FooterContext } from "../Context/FooterContext.js";
import { createCategory, getCategories } from "../Api/Api.js";
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
  const { toastifySettings, ToastifyComponent, toastMessage } =
    useContext(DataContext);

  const [catTitle, setCatTitle] = useState({ value: "", valid: null });
  const [catColor, setCatColor] = useState({ value: "#FFBA05", valid: null });
  const [catDescription, setcatDescription] = useState({
    value: "",
    valid: null,
  });
  const [catUser, setCatUser] = useState({ value: "", valid: null });
  const [categoryList, setCategoryList] = useState([]);

  const formElements = [
    {
      formElement: "input",
      type: "text",
      state: catTitle,
      labelText: "Título",
      placeholder: "Título",
      onChangeFunc(input) {
        setCatTitle({ value: input, valid: validateTitle(input) });
      },
      errorMessage: "Ingrese el título del vídeo",
      options: null,
    },
    {
      formElement: "input",
      type: "color",
      state: catColor,
      labelText: "Color",
      placeholder: null,
      onChangeFunc(input) {
        setCatColor({ value: input, valid: validateColor(input) });
      },
      errorMessage: "Elija el color",
      options: null,
    },
    {
      formElement: "textarea",
      type: null,
      state: catDescription,
      labelText: "Descripción",
      placeholder: "Descripción",
      onChangeFunc(input) {
        setcatDescription({ value: input, valid: validateTextarea(input) });
      },
      errorMessage: "Ingrese una descripción de la categoría",
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: catUser,
      labelText: "Usuario",
      placeholder: "Usuario",
      onChangeFunc(input) {
        setCatUser({ value: input, valid: validateUser(input) });
      },
      errorMessage: "Ingrese el nombre de usuario",
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
    setCatTitle({ value: "", valid: null });
    setCatColor({ value: "#FFBA05", valid: null });
    setcatDescription({ value: "", valid: null });
    setCatUser({ value: "", valid: null });
  };

  const getCategoryData = async () => {
    try {
      const res = await getCategories("/categories");
      if (res.status === 200 && res.data.length > 0) {
        setCategoryList(res.data);
      }
    } catch {
      toast.error("Error de conexión al servidor", toastifySettings);
    }
  };

  useEffect(() => {
    bannerVisibility(true);
    getCategoryData();
  }, []);

  useEffect(() => {
    if (toastMessage.success === true) {
      toast.success(toastMessage.value, toastifySettings);
    }
    if (toastMessage.success === false) {
      toast.error(toastMessage.value, toastifySettings);
    };
    getCategoryData();
  }, [toastMessage]);

  const formSubmit = async (e) => {
    e.preventDefault();
    sendData({
      title: catTitle.value,
      color: catColor.value,
      desc: catDescription.value,
      user: catUser.value,
    });
    cleanForm();
  };

  return (
    <NewCategoryContainer>
      <>
        <ToastifyComponent />
        <Form onSubmit={formSubmit}>
          <FormTitle>Nueva Categoría</FormTitle>
          {formElements.map((element, i) => {
            const {
              formElement,
              state,
              type,
              labelText,
              placeholder,
              onChangeFunc,
              options,
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
          </FormButtonsContainer>
        </Form>
        {categoryList.length > 0 && <CategoryList catList={categoryList} />}
      </>
    </NewCategoryContainer>
  );
};

export default NewCategory;
