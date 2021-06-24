import styled from "styled-components/macro";
import {useEffect} from "react";
import twitterLogo from "../images/Twitter-logo.png"

export default function TwitterButton( {color, quoteObject} ) {

    useEffect(() => {
        document.getElementById("tweet-quote").style.background = color;
    },);

    const twitterUrl = 'https://twitter.com/intent/tweet?text="' + quoteObject.text + '" by ' + quoteObject.author;


    return (<div>
            <ButtonSphere>
            <Link id="tweet-quote" href={twitterUrl} target="_blank" ><img src={twitterLogo} alt="Twitter Logo"/></Link>
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

const Link = styled.a`
  border: 0;
  outline: none;
  padding: 15px 50px;
  border-radius: 50%;
  img {
    width: 40px;
    }
`
