import styled from "styled-components";
import {
  color_gray_750,
  body_smaller,
  body_small,
  color_gray_300,
} from "../UI/variables.js";

export const InputWrapper = styled.div`
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
  height: 3vh;

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

export const Label = styled.label`
  position: absolute;
  font-size: ${body_small};
  color: ${color_gray_300};
  font-family: "Roboto-Light", sans-serif;
  left: 5px;
  top: 16px;
  transition: all 0.2s ease-in-out;
`;

const Input = ({ type, labelText, value, placeholder, inputFunction }) => (
  <InputWrapper>
    <InputStyle
      type={type}
      id={labelText}
      value={value}
      placeholder={placeholder}
      onChange={(e) => inputFunction(e.target.value)}
    />
    <Label htmlFor={labelText}>{labelText}</Label>
  </InputWrapper>
);

export default Input;
