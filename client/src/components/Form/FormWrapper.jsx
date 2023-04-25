import styled from "styled-components";
import Input from "./Input.jsx";
import Error from "./ErrorMessage.jsx";
import Select from "./Select/Select.jsx";
import Textarea from "./Textarea/Textarea.jsx";

const FormWrapperStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5%;
`;

const FormWrapper = ({
  element,
  type,
  labelText,
  value,
  placeholder,
  error,
  errorMessage,
  onChangeFunc,
  options,
}) => (
  <FormWrapperStyle>
    {element === "input" && (
      <Input
        type={type}
        labelText={labelText}
        value={value}
        placeholder={placeholder}
        onChangeFunc={onChangeFunc}
        error={error}
      />
    )}
    {element === "select" && (
      <Select
        labelText={labelText}
        onChangeFunc={onChangeFunc}
        selected={value}
        options={options}
        error={error}
      />
      
    )}
    {element === "textarea" && (
      <Textarea
        value={value}
        placeholder={placeholder}
        onChangeFunc={onChangeFunc}
        error={error}
      />
    )}
    {error && <Error message={errorMessage} />}
  </FormWrapperStyle>
);

export default FormWrapper;
