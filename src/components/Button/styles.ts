import { styled } from "styled-components";

export const StyledButton = styled.button`
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    border: none;
    outline: none;
    padding: 20px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 16px;
    transition: opacity 0.3s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`;
