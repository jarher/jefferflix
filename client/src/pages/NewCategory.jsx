import styled from "styled-components";
import NewVideo from "./NewVideo";
import { Form } from "react-router-dom";
import FormTitle from "../components/Form/FormTitle";
import Input from "../components/Input/Input";
import FormButtonsContainer from "../components/Form/FormButtonsContainer";
import ButtonsSubmit from "../components/Form/ButtonsSubmit";
import FormButton from "../components/Form/FormButton";
import { HomeStyled } from "./Home";

const formInputs = [
  {
    element: "input",
    labelText: "Título",
    type: "text",
    placeholder: "título",
  },
  {
    element: "input",
    labelText: "color",
    type: "color",
    colorDefault: "#FFBA05",
  },
  {
    element: "textarea",
    placeholder: "Descripción",
  },
  {
    element: "input",
    labelText: "Usuario",
    type: "text",
    placeholder: "Usuario",
  }
];

const NewCategoryContainer = styled(HomeStyled)`
  padding: 5%;
`;

const NewCategory = () => {
    return (
      <NewCategoryContainer>
        {/* <Form>
          <FormTitle>Nueva Categoría</FormTitle>
          {formInputs.map((element) => (
            <Input element={element} />
          ))}
          <FormButtonsContainer>
            <ButtonsSubmit>
              <FormButton>Guardar</FormButton>
              <FormButton $clean>Limpiar</FormButton>
            </ButtonsSubmit>
          </FormButtonsContainer>
        </Form> */}
      </NewCategoryContainer>
    );
}

export default NewCategory;