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
  position: relative;
  background-color: ${color_gray_750};
  padding: 4% 1%;
  border-radius: 4px;
`;

const InputStyle = styled.input`
  background-color: transparent;
  color: ${color_gray_300};
  padding-top: 2%;
  width: 100%;
  height: 5vh;

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
  top: 16px;
  transition: all 0.2s ease-in-out;
`;

const Select = styled.select`
  width: 100%;
  background-color: transparent;
  color: ${color_gray_300};
`;

const Option = styled.option`
  background-color: transparent;
  color: ${color_gray_300};
`;

const Textarea = styled.textarea`
  background-color: transparent;
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

const Input = (props) => {
  const {
    element,
    labelText,
    optionDefault,
    selectOptions,
    type,
    colorDefault,
    placeholder,
  } = props.element;
  return (
    <FormWrapper>
      <InputWrapper>
        {element === "input" && (
          <>
            {colorDefault ? (
              <InputStyle type={type} id={labelText} value={colorDefault} />
            ) : (
              <InputStyle
                type={type}
                id={{ labelText }}
                placeholder={placeholder}
              />
            )}
            <Label htmlFor={labelText}>{labelText}</Label>
          </>
        )}
        {element === "select" && (
          <Select>
            <Option disabled>
              {optionDefault}
            </Option>
            {selectOptions.map((option) => (
              <Option value={option.value} key={option.value}>
                {option.value}
              </Option>
            ))}
          </Select>
        )}
        {element === "textarea" && <Textarea placeholder={placeholder} />}
      </InputWrapper>
      <ErrorMessage>Error</ErrorMessage>
    </FormWrapper>
  );
};

export default Input;
