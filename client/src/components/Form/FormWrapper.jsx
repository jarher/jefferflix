import styled from "styled-components";
import Input from "./Input.jsx";
import Error from "./ErrorMessage.jsx";
import Textarea from "./Textarea/Textarea.jsx";
import SelectComp from "./Select/Select.jsx";

const FormWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

const FormWrapper = ({error, errorMessage, element }) => {
  return (
    <FormWrapperStyle>
      {element.formElement === "input" && (
        <Input error={error} element={element} />
      )}
      {element.formElement === "select" && (
        <SelectComp error={error} element={element} />
      )}
      {element.formElement === "textarea" && (
        <Textarea error={error} element={element} />
      )}
      {error && <Error message={errorMessage} />}
    </FormWrapperStyle>
  );
};

export default FormWrapper;
