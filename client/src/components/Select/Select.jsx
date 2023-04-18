import styled from "styled-components";
import { color_gray_300 } from "../UI/variables.js";
import Option from "./Option.jsx";

const SelectStyle = styled.select`
  width: 100%;
  background-color: transparent;
  color: ${color_gray_300};
  position: relative;
`;

const Select = ({ Options, inputFunction, selected }) => {
  return (
    <SelectStyle
      onChange={(e) => inputFunction(e.target.value)}
      value={selected}
    >
      {Options.map((option) => <Option
            value={option.value}
            key={option.id}
            disabled={option.default}
            selected
          >
            {option.value}
          </Option>)}
    </SelectStyle>
  );
};

export default Select;
