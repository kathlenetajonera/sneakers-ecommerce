import { styled } from "styled-components";
import { GLOBAL_COLORS } from "../../utils/variables";

export const StyledButton = styled.button`
    background-color: ${GLOBAL_COLORS.orange};
    color: ${GLOBAL_COLORS.white};
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
