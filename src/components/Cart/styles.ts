import { styled } from "styled-components";
import { GLOBAL_COLORS } from "../../utils/variables";

export const Container = styled.div<{ active: boolean }>`
    position: absolute;
    right: -70px;
    bottom: 0;
    transform: translateY(90%);
    width: 360px;
    box-shadow: 0px 6px 16px 0px rgba(182, 188, 200, 0.4);
    border-radius: 12px;
    background-color: ${GLOBAL_COLORS.white};
    transition: 0.3s ease;

    ${(props) =>
        props.active
            ? ` 
                transform: translateY(90%); 
                opacity: 1;
            `
            : ` 
                transform: translateY(95%); 
                opacity: 0;
            `}
`;

export const CartTitle = styled.p`
    font-weight: 700;
    margin: 0;
    padding: 24px;
    border-bottom: 2px solid ${GLOBAL_COLORS.lightGrayishBlue};
`;

export const CartContent = styled.div`
    padding: 0 24px 20px;
`;

export const CartEmpty = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 140px;
    font-weight: 700;
    color: ${GLOBAL_COLORS.darkGrayishBlue};
    margin: 0;
`;
