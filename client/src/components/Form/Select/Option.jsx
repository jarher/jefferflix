import styled from "styled-components";
import { color_gray_300, color_gray_750 } from "../../UI/variables";

const OptionStyle = styled.option`
  background-color: ${color_gray_750};
  color: ${color_gray_300};
`;

const Option = ({ value }) => (
  <OptionStyle value={value.toLowerCase()}>{value}</OptionStyle>
);

export default Option;
