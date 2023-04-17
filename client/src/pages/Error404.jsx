import styled from "styled-components";
import { body_big, color_error_dark } from "../components/UI/variables.js";
import { HomeStyled } from "./Home.jsx";

const ErrorContainer = styled(HomeStyled)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.p`
  color: ${color_error_dark};
  font-size:${body_big};
`;

const Error404 = () => {
    return <ErrorContainer>
        <ErrorMessage>
            ¡Página no encontrada!
        </ErrorMessage>
    </ErrorContainer>
}

export default Error404;