import Wrapper from './Wrapper';
import NewQuoteButton from './NewQuoteButton'
import ShareLink from './ShareLink'
import Quote from "./Quote";
import {useEffect, useState} from "react";

export default function QuoteBox({color, changeColor}) {

    const [quoteObject, setQuoteObject] = useState({text: "", author: ""});

    useEffect(() => {
        getNewQuote()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
        <Wrapper id="quote-box" >
            <NewQuoteButton getNewQuote={getNewQuote} color={color}/>
            <Quote quoteObject={quoteObject} color={color}/>
            <ShareLink color={color} quoteObject={quoteObject}/>
        </Wrapper>
    )
}
