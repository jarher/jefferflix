import styled from "styled-components";
import { color_gray_300 } from "../UI/variables";


const OptionStyle = styled.option`
  background-color: transparent;
  color: ${color_gray_300};
`;

const Option = ({ value, disabled, selected }) => (
  <OptionStyle value={value.toLowerCase()} disabled={disabled} selected={selected}>
    {value}
  </OptionStyle>
);

export default Option;