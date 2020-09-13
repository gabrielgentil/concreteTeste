import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        background: var(--primary);
    }
    *, button, input {
        background: none;
        box-shadow: none;
        font-family: Raleway;
    }
    ul {
        list-style: none
    }

    :root {
        --primary: #fff;
        --button: #ac53f2;
    }

`;
