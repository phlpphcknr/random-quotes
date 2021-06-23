import styled from "styled-components/macro";
import {useEffect} from "react";

export default function TwitterButton( {content, color} ) {

    useEffect(() => {
        document.getElementById("tweet-quote").style.background = color;
    },);

    //https://twitter.com/intent/tweet?text=%22Whatever%20the%20mind%20of%20man%20can%20conceive%20and%20believe%2C%20it%20can%20achieve.%22%20Napoleon%20Hill

    return (<div>
            <ButtonSphere>
            <Link id="tweet-quote" href="http://twitter.com/intent/tweet?text=" target="_blank" >{content}</Link>
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
  padding: 30px 50px;
  border-radius: 50%;
`
