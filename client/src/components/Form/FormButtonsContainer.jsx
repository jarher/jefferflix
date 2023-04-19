import styled from "styled-components";

const FormButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width:768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default FormButtonsContainer;
