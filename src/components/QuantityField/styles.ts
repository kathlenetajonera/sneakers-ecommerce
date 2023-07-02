import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.lightGrayishBlue};
    height: 64px;
    border-radius: 8px;
    max-width: 160px;
`;

export const IconWrapper = styled.span`
    display: flex;
    align-items: center;
    padding: 16px;
    transition: opacity 0.3s ease;
    cursor: pointer;

    &:hover {
        opacity: 0.6;
    }
`;

export const StyledInput = styled.input`
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    flex: 1;
`;
