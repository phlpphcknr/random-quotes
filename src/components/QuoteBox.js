import Wrapper from './Wrapper';
import BaseButton from './BaseButton'
import TwitterButton from './TwitterButton'
import Quote from "./Quote";
import {useEffect, useState} from "react";

export default function QuoteBox({color, changeColor}) {

    //const ;
    const [quoteObject, setQuoteObject] = useState({text: "", author: ""});

    useEffect(() => {
        getNewQuote()
    },[]);

    const getNewQuote = () => {

        fetch("https://type.fit/api/quotes")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                setQuoteObject(data[Math.round(Math.random()*data.length)]);
            })
            .catch((error) => console.error(error));
        changeColor();

    };

    return (
        <Wrapper>
            <BaseButton content={"Get New Quote"} getNewQuote={getNewQuote} color={color}/>
            <Quote quote={quoteObject.text}
            author={quoteObject.author}
            color={color}/>
            <TwitterButton color={color} quoteObject={quoteObject}/>
        </Wrapper>
    )
}
