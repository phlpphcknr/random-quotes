import styled from "styled-components/macro";
import {useEffect} from "react";
import twitterLogo from "../images/Twitter-logo.png"
import Sphere from "./Sphere.js"

export default function ShareLink({color, quoteObject}) {

    useEffect(() => {
        document.getElementById("tweet-quote").style.background = color;
    },);

    const twitterUrl = 'https://twitter.com/intent/tweet?text="' + quoteObject.text + '" by ' + quoteObject.author;

    return (<div>
            <Sphere>
            <Link id="tweet-quote" href={twitterUrl} target="_blank" ><img src={twitterLogo} alt="Twitter Logo"/></Link>
            </Sphere>
            </div>
    )
}

const Link = styled.a`
  padding: 15px 50px;
  border-radius: 50%;
  img {
    width: 40px;
    }
`
