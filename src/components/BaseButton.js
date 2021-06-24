import styled from "styled-components/macro";
import {useEffect} from "react";

export default function BaseButton( {content, getNewQuote, color} ) {

    useEffect(() => {
        document.getElementById("new-quote").style.background = color;
    },);

    const getNewQuoteAndColorChange = () => {
        document.getElementById("new-quote").style.background = color;
        getNewQuote();
    };

    return (<div>
            <ButtonSphere>
            <Button id="new-quote" onClick={getNewQuoteAndColorChange} >{content}</Button>
            </ButtonSphere>
            </div>
    )
}


const ButtonSphere = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 80px;
  margin: 10px;
  background-color: var(--secondary-color);
  border-radius: 50%;
`

const Button = styled.button`
  border: 0;
  outline: none;
  padding: 30px 50px;
  border-radius: 50%;
`
