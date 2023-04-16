import styled from "styled-components";
import {
  color_error_medium,
  color_gray_750,
  body_smaller,
  body_small,
  color_gray_300,
} from "../UI/variables.js";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

const InputWrapper = styled.div`
  background-color: ${color_gray_750};
  padding: 3% 1%;
  border-radius: 4px;
`;

const InputStyle = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
`;

const Label = styled.label`
  position: absolute;
  font-size: ${body_small};
  color: ${color_gray_300};
  font-family: "Roboto-Light", sans-serif;
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${color_gray_300};
  font-family: "Roboto-Light", sans-serif;
  width: 100%;
`;

const ErrorMessage = styled.span`
  color: ${color_error_medium};
  font-size: ${body_smaller};
  display: block;
  padding: 2% 0;
  font-family: "Roboto-Light", sans-serif;
`;

const Input = ({ element, labelText, type, placeholder }) => {
  return (
    <FormWrapper>
      <InputWrapper>
        {element === "input" && (
          <>
            <Label>Titulo</Label>
            <InputStyle />
          </>
        )}
        {element === "textarea" && <Textarea />}
      </InputWrapper>
      <ErrorMessage>Error</ErrorMessage>
    </FormWrapper>
  );
};

export default Input;
