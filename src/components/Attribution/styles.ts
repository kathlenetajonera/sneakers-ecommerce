import { styled } from "styled-components";

export const Container = styled.div`
    font-size: 12px;
    text-align: center;
    padding: 20px 10px;
    color: ${(props) => props.theme.colors.darkGrayishBlue};
    background-color: rgba(0, 0, 0, 0.03);

    a {
        color: ${(props) => props.theme.colors.darkGrayishBlue};
    }
`;
