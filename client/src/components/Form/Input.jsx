import styled from "styled-components";
import {
  color_gray_750,
  body_smaller,
  body_small,
  color_gray_300,
  body_medium,
  color_error_dark,
  color_primary,
} from "../UI/variables.js";
import { useState } from "react";

export const InputWrapper = styled.div`
  position: relative;
  background-color: ${color_gray_750};
  padding: 4% 1%;
  border-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${(props) => {
    if (props.error) {
      return color_error_dark;
    }
    if (props.focus) {
      return color_primary;
    }
  }};
  transition: all 0.2s ease-in-out;

  @media (min-width: 768px) {
    padding: 2% 1%;
  }
`;

const InputStyle = styled.input`
  background-color: transparent;
  color: ${color_gray_300};
  padding-top: 2%;
  width: 100%;
  height:${(props) => (props.type === "color" ? "6vh" : "auto")};
  &:not(:placeholder-shown) + label,
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
  @media (min-width:768px){
    height:${(props) => (props.type === "color" ? "8vh" : "auto")}
  }
  
`;

export const Label = styled.label`
  position: absolute;
  font-size: ${body_small};
  color: ${color_gray_300};
  font-family: "Roboto-Light", sans-serif;
  left: 5px;
  top: ${(props) => (props.htmlFor === "Color" ? "5px" : "16px")};
  transition: all 0.2s ease-in-out;
  @media (min-width: 768px) {
    font-size: ${body_medium};
    top: ${(props) => (props.htmlFor === "Color" ? "5px" : "20px")};
  }
`;

const Input = ({
  type,
  labelText,
  value,
  placeholder,
  error,
  onChangeFunc,
}) => {
  const [focus, setFocus] = useState(false);

  return (
    <InputWrapper error={error} focus={focus}>
      <InputStyle
        type={type}
        id={labelText}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChangeFunc(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        required
      />
      <Label htmlFor={labelText}>{labelText}</Label>
    </InputWrapper>
  );
};

export default Input;
