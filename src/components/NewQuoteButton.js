import styled from "styled-components/macro";
import {useEffect} from "react";
import Sphere from "./Sphere.js"

export default function NewQuoteButton({getNewQuote, color}) {

    useEffect(() => {
        document.getElementById("new-quote").style.background = color;
    },);

    const getNewQuoteAndColorChange = () => {
        document.getElementById("new-quote").style.background = color;
        getNewQuote();
    };

    return (<div>
            <Sphere>
            <Button id="new-quote" onClick={getNewQuoteAndColorChange}>Get New Quote</Button>
            </Sphere>
            </div>
    )
}

const Button = styled.button`
  border: 0;
  padding: 30px 50px;
  border-radius: 50%;
`
