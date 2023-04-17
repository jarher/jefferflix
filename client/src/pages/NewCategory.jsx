import styled from "styled-components";
import NewVideo from "./NewVideo";
import { Form } from "react-router-dom";
import FormTitle from "../components/Form/FormTitle";
import Input from "../components/Input/Input";
import FormButtonsContainer from "../components/Form/FormButtonsContainer";
import ButtonsSubmit from "../components/Form/ButtonsSubmit";
import FormButton from "../components/Form/FormButton";
import { HomeStyled } from "./Home";

const NewCategoryContainer = styled(HomeStyled)`
  padding: 5%;
`;

const NewCategory = () => {
    return (
      <NewCategoryContainer>
        <Form>
          <FormTitle>Nueva Categoría</FormTitle>
          <Input
            element={"input"}
            labelText={"Título"}
            type="text"
            placeholder={"título"}
          />
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