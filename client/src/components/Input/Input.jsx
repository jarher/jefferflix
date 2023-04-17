import styled from "styled-components";
import {
  color_error_medium,
  color_gray_750,
  body_smaller,
  body_small,
  color_gray_300,
  color_primary,
} from "../UI/variables.js";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

const InputWrapper = styled.div`
  position: relative;
  background-color: ${color_gray_750};
  padding: 4% 1%;
  border-radius: 4px;
`;

const InputStyle = styled.input`
  background-color: transparent;
  color: ${color_gray_300};
  outline: none;
  border: none;
  padding-top: 2%;

  &&:not(:placeholder-shown) + label,
  &:focus + label {
    font-size: ${body_smaller};
    top: 4px;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    visibility: hidden;
    color: #00000000;
  }
`;

const Label = styled.label`
  position: absolute;
  font-size: ${body_small};
  color: ${color_gray_300};
  font-family: "Roboto-Light", sans-serif;
  left: 5px;
  top:16px;
  transition: all 0.2s ease-in-out;
`;

const Textarea = styled.textarea`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${color_gray_300};
  font-family: "Roboto-Light", sans-serif;
  width: 100%;
  &::placeholder {
    color: ${color_gray_300};
  }
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
            <InputStyle type={type} placeholder={placeholder} />
            <Label>{labelText}</Label>
          </>
        )}
        {element === "textarea" && <Textarea placeholder={placeholder} />}
      </InputWrapper>
      <ErrorMessage>Error</ErrorMessage>
    </FormWrapper>
  );
};

export default Input;
