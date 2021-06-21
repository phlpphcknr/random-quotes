import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`

* {
  font-size:24px;
  font-family: "Arial";
}

html, body, #root {
   margin: 0;
   padding: 0;
   background-color: var(--primary-color);
   
   --primary-color: #F1D145;
   --secondary-color: #CDCDCD;
 }
 
 p {
   margin: 0px;
   padding: 0px;
 }
`;

export default GlobalStyle;