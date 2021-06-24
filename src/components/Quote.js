import styled from "styled-components/macro";
import {useEffect} from "react";
import Sphere from "./Sphere.js"

export default function Quote( {quoteObject, color} ) {

    useEffect(() => {
        document.getElementById("text").style.background = color;
    },);

    return (
            <Sphere>
                <QuoteText id="text">{quoteObject.text}</QuoteText>
                <QuoteAuthor id="author">{quoteObject.author}</QuoteAuthor>
            </Sphere>
    )
}


const QuoteText = styled.p`
  padding: 30px 80px;
  max-width: 450px;
  border-radius: 50%;
`
const QuoteAuthor = styled.p`
  background-color: transparent;
  padding: 10px 5px;
  border-radius: 50%;
`
