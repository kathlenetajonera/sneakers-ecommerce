import { createGlobalStyle } from "styled-components";

export default createGlobalStyle<{}>`
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Kumbh Sans', sans-serif;
    }
`;
