import Wrapper from './Wrapper';
import BaseButton from './BaseButton'
import Quote from "./Quote";

export default function QuoteBox() {
    return (
        <Wrapper>
            <BaseButton content={"Get New Quote"}/>
            <Quote quote={"If you hear a voice within you say “you cannot paint,” then by all means paint and that voice will be silenced."}
            author={"Vincent Van Gogh"}/>
            <BaseButton content={"Twitter"}/>
        </Wrapper>
    )
}
