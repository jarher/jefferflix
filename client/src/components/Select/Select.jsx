import styled from "styled-components";
import { color_gray_300, color_gray_750} from "../UI/variables.js";
import Option from "./Option.jsx";

const SelectStyle = styled.select`
  width: 100%;
  background-color: transparent;
  color: ${color_gray_300};
  position: relative;
  background-color: ${color_gray_750};
  padding: 3% 0;
  margin-top: 2%;
`;

const LabelSelect = styled.label`
color: ${color_gray_300};
`;

const Select = ({ Options, inputFunction, selected }) => 
    <LabelSelect>
    Escoja una Categoría
      <SelectStyle onChange={(e) => inputFunction(e.target.value)} required value={selected}>
        {Options.map((option) => (
          <Option value={option.value} key={option.id}>
            {option.value}
          </Option>
        ))}
      </SelectStyle>
    </LabelSelect>;

export default Select;
