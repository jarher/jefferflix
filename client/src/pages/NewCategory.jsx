import styled from "styled-components";
import FormTitle from "../components/Form/FormTitle.jsx";
import Input from "../components/Input/Input.jsx";
import FormButtonsContainer from "../components/Form/FormButtonsContainer.jsx";
import ButtonsSubmit from "../components/Form/ButtonsSubmit.jsx";
import FormButton from "../components/Form/FormButton.jsx";
import { HomeStyled } from "./Home.jsx";
import Form from "../components/Form/Form.jsx";
import FormWrapper from "../components/Form/FormWrapper.jsx";
import Error from "../components/Form/ErrorMessage.jsx";
import { useState } from "react";
import Textarea from "../components/Textarea/Textarea.jsx";

const NewCategoryContainer = styled(HomeStyled)`
  padding: 5%;
`;

const NewCategory = () => {
  const [catTitle, setCatTitle] = useState("");
  const [catColor, setCatColor] = useState("#FFBA05");
  const [catDescription, setcatDescription] = useState("");
  const [catUser, setCatUser] = useState("");

    return (
      <NewCategoryContainer>
        <Form>
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
              <FormButton $clean>Limpiar</FormButton>
            </ButtonsSubmit>
          </FormButtonsContainer>
        </Form>
      </NewCategoryContainer>
    );
}

export default NewCategory;