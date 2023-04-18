import styled from "styled-components";
import { body_smaller, color_error_medium } from "../UI/variables";

const ErrorMessage = styled.span`
  color: ${color_error_medium};
  font-size: ${body_smaller};
  display: block;
  padding: 2% 0;
  font-family: "Roboto-Light", sans-serif;
`;

const Error = ({ message }) => <ErrorMessage>{message}</ErrorMessage>;

export default Error;
