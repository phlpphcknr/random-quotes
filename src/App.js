//import GlobalStyle from './components/GlobalStyles';
import { createGlobalStyle } from 'styled-components/macro';
import styled from 'styled-components/macro';
import QuoteBox from './components/QuoteBox'
import Wrapper from './components/Wrapper';
import {useState} from "react";

export default function App() {

    const colors = [
        "#DE354C",
        "#007CC7",
        "#FFDF6C",
        "#9DC88D"];

    const [color, setColor] = useState(colors[0]);

    const changeColor = () => {
        if (colors.indexOf(color) < colors.length-1){
            setColor(colors[colors.indexOf(color)+1]);
            document.body.style.backgroundColor = colors[colors.indexOf(color)+1];
        } else {
            setColor(colors[0]);
            document.body.style.backgroundColor = colors[0];
        };
    }

    return (
    <Page>
        <GlobalStyle color={color}/>
        <Wrapper id="wrapper">
            <QuoteBox id="quote-box" color={color} changeColor={changeColor}/>
        </Wrapper>
    </Page>
  );
}

const Page = styled.div`
  
  #wrapper {
    min-height: 100vh;
  }
`;


const GlobalStyle = createGlobalStyle`

* {
  font-size:24px;
  font-family: "Arial";
}

html, body, #root {
   margin: 0;
   padding: 0;
   background-color: "black";

   --primary-color: #F1D145;
   --secondary-color: #CDCDCD;
 }

 p {
   margin: 0px;
   padding: 0px;
 }
`;
