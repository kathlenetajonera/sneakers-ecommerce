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

    h1, h2, h3, p {
        margin: 0;
    }

    p, a, button {
        font-family: 'Kumbh Sans', sans-serif;
        color: ${(props) => props.theme.colors.black}
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }
`;
