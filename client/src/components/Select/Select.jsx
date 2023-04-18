import styled from "styled-components";
import { color_gray_300, color_gray_750 } from "../UI/variables.js";
import Option from "./Option.jsx";

const SelectStyle = styled.select`
  width: 100%;
  background-color: transparent;
  color: ${color_gray_300};
  position: relative;
  background-color: ${color_gray_750};
  padding: 3% 0;
`;

const Select = ({ Options, inputFunction }) => {
  return (
    <SelectStyle
      onChange={(e) => inputFunction(e.target.value)}
    >
      {Options.map((option) => <Option
            value={option.value}
            key={option.id}
            disabled={option.default}
            selected={option.isSelected}
          >
            {option.value}
          </Option>)}
    </SelectStyle>
  );
};

export default Select;
