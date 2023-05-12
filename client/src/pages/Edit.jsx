import styled from "styled-components";
import Form from "../components/Form/Form";
import FormTitle from "../components/Form/FormTitle";
import FormWrapper from "../components/Form/FormWrapper";
import FormButtonsContainer from "../components/Form/FormButtonsContainer";
import ButtonsSubmit from "../components/Form/ButtonsSubmit";
import FormButton from "../components/Form/FormButton";
import { useState } from "react";
import { Layer } from "../components/Layer/Layer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  validateColorEdit,
  validateTextareaEdit,
  validateTitleEdit,
  validateUserEdit,
} from "../ValidateForm/Validate.js";
import { getCategory, updateCategory } from "../Api/Api";
import { useContext } from "react";
import { DataContext } from "../Context/DataContext";
import { toast } from "react-toastify";

const EditStyle = styled(Layer)`
  padding: 5%;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const Edit = () => {
  const { toastifySettings, ToastifyComponent } = useContext(DataContext);

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

  const { id } = useParams();

  const formElements = [
    {
      formElement: "input",
      type: "text",
      state: catTitle,
      labelText: "Título",
      placeholder: "Título",
      onChangeFunc(input) {
        setCatTitle({ value: input, valid: validateTitleEdit(input) });
      },
      onBlurFunc(input) {
        return null
        // setCatTitle({ value: input, valid: validateTitleEdit(input) });
      },
      errorMessage: ["Ingrese el título del vídeo"],
      options: null,
    },
    {
      formElement: "input",
      type: "color",
      state: catColor,
      labelText: "Color",
      placeholder: null,
      onChangeFunc(input) {
        setCatColor({ value: input, valid: validateColorEdit(input) });
      },
      onBlurFunc(input) {
        return null;
        // setCatColor({ value: input, valid: validateColorEdit(input) });
      },
      errorMessage: ["Elija un color"],
      options: null,
    },
    {
      formElement: "textarea",
      type: null,
      state: catDescription,
      labelText: "Descripción",
      placeholder: "Descripción",
      onChangeFunc(input) {
        setcatDescription({ value: input, valid: validateTextareaEdit(input) });
      },
      onBlurFunc(input) {
        return null;
        // setcatDescription({ value: input, valid: validateTextareaEdit(input) });
      },
      errorMessage: ["Ingrese una descripción de la categoría"],
      options: null,
    },
    {
      formElement: "input",
      type: "text",
      state: catUser,
      labelText: "Usuario",
      placeholder: "Usuario",
      onChangeFunc(input) {
        setCatUser({ value: input, valid: validateUserEdit(input) });
      },
      onBlurFunc(input) {
        return null;
        // setCatUser({ value: input, valid: validateUserEdit(input) });
      },
      errorMessage: ["Ingrese el nombre de usuario"],
      options: null,
    },
  ];

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

  const getCategoryData = async () => {
    try {
      const res = await getCategory(`/categories/${id}`);

      if (res.status === 200) {
        const { title, color, desc, user } = res.data;
        setCatTitle({ value: title, valid: { index: null, value: null } });
        setCatColor({ value: color, valid: { index: null, value: null } });
        setcatDescription({ value: desc, valid: { index: null, value: null } });
        setCatUser({ value: user, valid: { index: null, value: null } });
      }
    } catch {
      toast.error("Error de conexión al servidor", toastifySettings);
    }
  };

  const sendData = async (id, values) => {
    try {
      const res = await updateCategory(`/categories/${id}`, values);
      if (res.status === 200) {
        toast.success("¡Categoría actualizada con éxito!", toastifySettings);
      }
    } catch {
      toast.error(
        "Ocurrió un error. Inténtalo de nuevo más tarde",
        toastifySettings
      );
    }
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    sendData(id, {
      title: catTitle.value,
      color: catColor.value,
      desc: catDescription.value,
      user: catUser.value,
    });
    cleanForm();
  };
  useEffect(() => {
    getCategoryData();
  }, []);

  return (
    <EditStyle>
      <>
        <ToastifyComponent />
        <Form onSubmit={formSubmit}>
          <FormTitle>Editar Categoría</FormTitle>
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
                Editar
              </FormButton>
              <FormButton $clean onClick={cleanForm}>
                Limpiar
              </FormButton>
            </ButtonsSubmit>
          </FormButtonsContainer>
        </Form>
      </>
    </EditStyle>
  );
};

export default Edit;
