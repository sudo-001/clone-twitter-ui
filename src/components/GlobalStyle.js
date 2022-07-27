import { createGlobalStyle } from 'styled-components';

const StyledGLobalStyle = createGlobalStyle`
    body {
        background-color: #121226;
    }

    * {
        color: white;
        font-family: ubuntu;
    }
`

function GlobalStyle() {

    return (
        <StyledGLobalStyle />
    )
}

export default GlobalStyle;