import { styled } from "styled-components";

export const Container = styled.div<{ $active: boolean }>`
    position: absolute;
    right: -70px;
    bottom: 20px;
    width: 360px;
    box-shadow: 0px 6px 16px 0px rgba(182, 188, 200, 0.4);
    border-radius: 12px;
    background-color: ${(props) => props.theme.colors.white};
    transition: 0.3s ease;

    ${(props) =>
        props.$active
            ? `
                transform: translateY(100%);
                opacity: 1;
            `
            : `
                transform: translateY(105%);
                opacity: 0;
            `}

    @media screen and (max-width: 1366px) {
        right: 0;
    }
`;

export const CartTitle = styled.p`
    font-weight: 700;
    margin: 0;
    padding: 24px;
    border-bottom: 2px solid ${(props) => props.theme.colors.lightGrayishBlue};
`;

export const CartContent = styled.div`
    padding: 24px;

    .item {
        padding-bottom: 24px;
    }
`;

export const CartEmpty = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 140px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.darkGrayishBlue};
    margin: -24px 0 0;
`;

export const ItemThumbnail = styled.div`
    max-width: 50px;

    img {
        max-width: 100%;
        object-fit: cover;
        border-radius: 4px;
    }
`;

export const ItemDetails = styled.div`
    margin: 0 16px;
`;

export const ItemText = styled.p`
    color: ${(props) => props.theme.colors.darkGrayishBlue};

    &:first-child {
        margin-bottom: 8px;
    }

    .total {
        color: ${(props) => props.theme.colors.black};
        font-weight: 700;
    }
`;

export const ItemDelete = styled.div`
    cursor: pointer;

    &:hover {
        svg path {
            fill: ${(props) => props.theme.colors.darkGrayishBlue};
        }
    }
`;
