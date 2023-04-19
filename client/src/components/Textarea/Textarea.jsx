import styled from "styled-components";
import { body_medium, color_gray_300 } from "../UI/variables";
import { InputWrapper } from "../Input/Input";

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

const Textarea = ({ value, placeholder, inputFunction }) => (
  <InputWrapper>
    <TextareaStyle
      value={value}
      placeholder={placeholder}
      onChange={(e) => inputFunction(e.target.value)}
    ></TextareaStyle>
  </InputWrapper>
);

export default Textarea;
