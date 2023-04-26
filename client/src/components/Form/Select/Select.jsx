import styled from "styled-components";
import {
  body_medium,
  body_smaller,
  color_gray_300,
  color_gray_750,
} from "../../UI/variables.js";
import Option from "./Option.jsx";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: ${color_gray_750};
  position: relative;
  border-radius: 4px;
`;

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          border: "none",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: color_gray_300,
          paddingLeft: "2%",
          marginTop: "5px",
          "&.Mui-focused": {
            color: color_gray_300,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          padding: 0,
          color: color_gray_300,
          paddingLeft: "2%",
          marginBottom:"2%",
          border:"none",
          "&.MuiSelect-outlined":{
            border:"none"
          }
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          backgroundColor: color_gray_750,
          margin: 0,
          "&.Mui-selected": {
            backgroundColor: color_gray_750,
          },
        },
      },
    },
  },
});

const SelectComp = ({ labelText, options, onChangeFunc, selected }) => {
  return (
    <SelectWrapper>
      <ThemeProvider theme={theme}>
        <FormControl fullWidth variant="standard">
          <InputLabel
            id="category"
          >
            {labelText}
          </InputLabel>
          <Select
            labelId="category"
            id="category"
            value={selected}
            label="category"
            onChange={(e) => onChangeFunc(e.target.value)}
          >
            {options.map((option) => (
              <MenuItem value={option.value} key={option.id}>
                {option.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </ThemeProvider>
    </SelectWrapper>
  );
};

export default SelectComp;
