import { styled } from "styled-components";

export const Container = styled.div``;

export const ActiveImage = styled.div`
    margin-bottom: 30px;

    img {
        border-radius: 16px;
    }
`;

export const ImageThumbnails = styled.div``;

export const Thumbnail = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 12px;
    transition: border-color 0.3s ease;
    cursor: pointer;

    &:not(:last-child) {
        margin-right: 30px;
    }

    &.active {
        border-color: ${(props) => props.theme.colors.orange};

        img {
            opacity: 0.3;
        }
    }

    &:hover {
        img {
            opacity: 0.3;
        }
    }

    img {
        border-radius: 10px;
        transition: opacity 0.3s ease;
    }
`;
