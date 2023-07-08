import { styled } from "styled-components";
import { device } from "../../utils/device";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.orange};
    color: ${(props) => props.theme.colors.white};
    width: 100%;
    max-width: 320px;
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

    @media ${device.mobile} {
        width: 100%;
        max-width: 100%;
    }
`;

export const ButtonIcon = styled.span`
    margin-right: 12px;
    transform: scale(0.9);
`;
