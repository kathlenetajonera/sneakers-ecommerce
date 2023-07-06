import { styled } from "styled-components";

export const Container = styled.div``;

export const ActiveImage = styled.div`
    margin-bottom: 30px;
    cursor: pointer;

    img {
        border-radius: 16px;
    }
`;

export const ImageThumbnails = styled.div``;

export const Thumbnail = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 12px;
    transition: border-color 0.3s ease;
    cursor: pointer;

    &::after {
        content: "";
        background-color: ${(props) => props.theme.colors.white};
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0.8;
        border-radius: 10px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    &:not(:last-child) {
        margin-right: 30px;
    }

    &.active {
        border-color: ${(props) => props.theme.colors.orange};

        &::after {
            opacity: 0.7;
        }
    }

    &:hover {
        &::after {
            opacity: 0.5;
        }
    }

    img {
        border-radius: 10px;
        transition: opacity 0.3s ease;
    }
`;
