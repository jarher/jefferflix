import styled from "styled-components";
import ButtonStyle from "../Button/Button";
import { body_normal, color_gray_700, color_gray_900, color_primary, color_white, font_weight_600 } from "../UI/variables";

const FormButton = styled(ButtonStyle)`
  font-family: "SourceSansPro", sans-serif;
  font-size: ${body_normal};
  font-weight: ${font_weight_600};
  background-color: ${(props) =>
    props.$clean ? color_gray_700 : color_primary};
  color: ${(props) => (props.$clean ? color_gray_900 : color_white)};
  width: 135px;
  @media (min-width: 768px) {
    width: 180px;
    padding: 2%;
  }
`;

export default FormButton;