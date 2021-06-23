import styled from "styled-components/macro";
import {useEffect} from "react";

export default function Quote( {quote, author, color} ) {

    useEffect(() => {
        document.getElementById("text").style.background = color;
    },);

    return (
            <Sphere>
                <QuoteText id="text">{quote}</QuoteText>
                <QuoteAuthor id="author">{author}</QuoteAuthor>
            </Sphere>
    )
}

const Sphere = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 80px;
  margin: 10px;
  background-color: var(--secondary-color);
  border-radius: 50%;
`

const QuoteText = styled.p`
  background-color: var(--primary-color);
  border: 0;
  outline: none;
  padding: 30px 80px;
  max-width: 450px;
  border-radius: 50%;
`

const QuoteAuthor = styled.p`
  background-color: transparent;
  border: 0;
  outline: none;
  padding: 10px 5px;
  border-radius: 50%;
`

