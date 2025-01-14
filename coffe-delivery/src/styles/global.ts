import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${props => props.theme.colors.background};
        color: ${(props) => props.theme.colors['base-text']};
        -webkit-font-smoothing: antialiased;


    }

    h1, h2, h3, h4, h5, h6 {
        font-family: "Baloo 2", serif;
        line-height: 130%;
    }

    p, button, span {
        font-family: "Roboto", serif;
        line-height: 130%;
    }

    button {
        border: none;
        cursor: pointer;
    }
`