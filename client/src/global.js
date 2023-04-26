import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Roboto-Light;
  src: url("./fonts/Roboto-Light.ttf");
}
@font-face {
  font-family: Roboto-Regular;
  src: url("./fonts/Roboto-Regular.ttf");
}
@font-face {
  font-family: SourceSansPro;
  src: url("./fonts/SourceSansPro-SemiBold.ttf");
}
:root{
  --color-error-dark:#C62828;
  --color-error-medium:#E53935;
  --color-black:#000000;
  --color-gray-900:#00000099;
  --color-gray-800:#00000080;
  --color-gray-700: ##9E9E9E;
  --color-gray-300:#C2C2C2;
  --color-gray-200:#E5E5E5;
  --color-gray-lighter:#F5F5F5;
  --color-white:#FFFFFF;
  --color-primary:#2A7AE4;
  --title-big:60px;
  --title-medium:46px;
  --title-small:35px;
  --body-big:27px;
  --body-normal:21px;
  --body-medium:18px;
  --body-small:16px;
  --body-smaller:12px;
}
body {
  font-family: "Roboto-Light",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a{
  text-decoration: none;
}
button a {
  display: block;
  width: 100%;
  height: 100%;
  color: var(--color-white);
  display: flex;
  justify-content: center;
  align-items: center;
}
img{
  width: 100%;
  height: auto;
}
input, select, textarea{
  border: none;
  outline: none;
}

.slick-arrow{
  display: none!important;
}
.slick-active button{
  color: white!important;
}

`;

export default GlobalStyle;
