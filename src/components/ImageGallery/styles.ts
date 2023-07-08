import { styled } from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
    @media ${device.tablet} {
        .thumbnails {
            display: none;
        }
    }
`;

export const ActiveImage = styled.div`
    margin-bottom: 30px;
    cursor: pointer;

    @media ${device.tablet} {
        position: relative;
        width: 100vw;
        left: 50%;
        transform: translateX(-50%);
        height: 480px;
    }

    @media ${device.mobile} {
        height: 330px;
    }

    img {
        border-radius: 16px;
        width: 100%;
        height: 100%;
        max-height: 100%;

        @media ${device.tablet} {
            border-radius: 0;
        }
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
