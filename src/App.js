import GlobalStyle from './components/GlobalStyles';
import styled from 'styled-components/macro';
import QuoteBox from './components/QuoteBox'
import Wrapper from './components/Wrapper';

export default function App() {
  return (
    <Page>
        <GlobalStyle/>
        <Wrapper id="wrapper">
            <QuoteBox/>
        </Wrapper>
    </Page>
  );
}

const Page = styled.div`
  
  #wrapper {
    min-height: 100vh;
  }

`;

