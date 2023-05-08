import styled from "styled-components";
import { body_medium, color_gray_300 } from "../../UI/variables";
import { InputWrapper } from "../Input.jsx";
import { useState } from "react";

const TextareaStyle = styled.textarea`
  background-color: transparent;
  color: ${color_gray_300};
  font-family: "Roboto-Light", sans-serif;
  width: 100%;
  &::placeholder {
    color: ${color_gray_300};
  }
  @media (min-width: 768px) {
    &::placeholder {
      font-size: ${body_medium};
    }
  }
`;

const Textarea = ({error, element}) => {
  const [focus, setFocus] = useState(false);
  const {state, placeholder, onChangeFunc, onBlurFunc} = element;

  return (
    <InputWrapper error={error} focus={focus}>
      <TextareaStyle
        value={state.value}
        placeholder={placeholder}
        onChange={(e) => onChangeFunc(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={(e) => {
          setFocus(false);
          onBlurFunc(e.target.value);
        }}
      />
    </InputWrapper>
  );
};

export default Textarea;
