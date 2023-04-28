import styled from "styled-components";
import FormTitle from "../components/Form/FormTitle.jsx";
// import Input from "../components/Input/Input.jsx";
import FormButtonsContainer from "../components/Form/FormButtonsContainer.jsx";
import ButtonsSubmit from "../components/Form/ButtonsSubmit.jsx";
import FormButton from "../components/Form/FormButton.jsx";
import Form from "../components/Form/Form.jsx";
import FormWrapper from "../components/Form/FormWrapper.jsx";
import Error from "../components/Form/ErrorMessage.jsx";
import { useState } from "react";
import CategoryList from "../components/CategoryList/CategoryList.jsx";
import { Layer } from "../components/Layer/Layer.jsx";

export const NewCategoryContainer = styled(Layer)`
  padding: 5%;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const NewCategory = () => {
  const [catTitle, setCatTitle] = useState({value:"", valid:null});
  const [catColor, setCatColor] = useState("#FFBA05");
  const [catDescription, setcatDescription] = useState("");
  const [catUser, setCatUser] = useState("");

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
    }
  ];
  const cleanForm = () => {
    setCatTitle("");
    setCatColor("#FFBA05");
    setcatDescription("");
    setCatUser("");
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <NewCategoryContainer>
      {/* <Form onSubmit={formSubmit}>
        <FormTitle>Nueva Categoría</FormTitle>
        <FormWrapper>
          <Input
            type={"text"}
            labelText={"Título"}
            value={catTitle}
            placeholder={"Título"}
            inputFunction={setCatTitle}
          />
          <Error message={"message"} />
        </FormWrapper>
        <FormWrapper>
          <Input
            type={"color"}
            labelText={"Color"}
            value={catColor}
            placeholder={""}
            inputFunction={setCatColor}
          />
          <Error message={"message"} />
        </FormWrapper>
        <FormWrapper>
          <Textarea
            value={catDescription}
            placeholder={"Descripción"}
            inputFunction={setcatDescription}
          />
          <Error message={"message"} />
        </FormWrapper>
        <FormWrapper>
          <Input
            type={"text"}
            labelText={"Usuario"}
            value={catUser}
            placeholder={"Usuario"}
            inputFunction={setCatUser}
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
        </FormButtonsContainer>
      </Form> */}
      <CategoryList />
    </NewCategoryContainer>
  );
};

export default NewCategory;
