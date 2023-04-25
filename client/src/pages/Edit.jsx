import styled from "styled-components";
import Form from "../components/Form/Form";
import FormTitle from "../components/Form/FormTitle";
import FormWrapper from "../components/Form/FormWrapper";
// import Input from "../components/Input/Input";
import Error from "../components/Form/ErrorMessage";
// import Textarea from "../components/Textarea/Textarea";
import FormButtonsContainer from "../components/Form/FormButtonsContainer";
import ButtonsSubmit from "../components/Form/ButtonsSubmit";
import FormButton from "../components/Form/FormButton";
import { useState } from "react";
import { Layer } from "../components/Layer/Layer";

const EditStyle = styled(Layer)`
  padding: 5%;
  @media (min-width: 768px) {
    align-items: center;
  }
`;

const Edit = () => {
  const [catTitle, setCatTitle] = useState("");
  const [catColor, setCatColor] = useState("#FFBA05");
  const [catDescription, setcatDescription] = useState("");
  const [catUser, setCatUser] = useState("");

  const cleanForm = () => {
    setCatTitle("");
    setCatColor("#FFBA05");
    setcatDescription("");
    setCatUser("");
  };
  return (
    <EditStyle>
      {/* <Form>
        <FormTitle>Editar Categoría</FormTitle>
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
            <FormButton>Editar</FormButton>
            <FormButton $clean onClick={cleanForm}>
              Limpiar
            </FormButton>
          </ButtonsSubmit>
        </FormButtonsContainer>
      </Form> */}
    </EditStyle>
  );
};

export default Edit;
