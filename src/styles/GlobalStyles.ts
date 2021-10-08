import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        ::-webkit-scrollbar {
            width: 12px;
            height: 100%;
            background-color: #181818;
            padding: 0px 4px;
        }

        ::-webkit-scrollbar-thumb {
            background-color: #aaa;
            border-radius: 32px;
            border: 2px solid transparent;
            background-clip: content-box;
        }
    }

    *, input, button {
        font-family: 'Roboto', sans-serif;
    }

    html, body, :root {
        width: 100%;
        height: 100%;
    }
`

export default GlobalStyles
