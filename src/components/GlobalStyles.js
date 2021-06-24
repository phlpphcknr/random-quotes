import { createGlobalStyle } from 'styled-components/macro';

let GlobalStyle = createGlobalStyle`

* {
  font-size:24px;
  font-family: "Arial";
  border: 0;
}

html, body, #root {
   margin: 0;
   padding: 0;
   background-color: var(--primary-color);
   
   --primary-color: #F1D145;
   --secondary-color: #CDCDCD;
   --tertiary-color: #F1D145;
 }
 
 p {
   margin: 0px;
   padding: 0px;
 }
`;

export default GlobalStyle;