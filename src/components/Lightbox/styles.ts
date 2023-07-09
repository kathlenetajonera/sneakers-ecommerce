import { styled } from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;

    opacity: 0;
    pointer-events: none;
    transition: 0.3s ease;

    &.active {
        opacity: 1;
        pointer-events: all;
    }

    .thumbnails {
        margin: 0 60px;

        @media screen and (max-height: 768px) {
            margin: 0;
        }

        @media ${device.desktopXs} {
            margin: 0;
        }
    }
`;

export const Wrapper = styled.div`
    max-width: 590px;
    margin: 0 auto;
    z-index: 2;

    @media screen and (max-height: 768px) {
        max-width: 480px;
    }

    @media screen and (max-height: 700px) {
        max-width: 400px;
    }

    @media ${device.mobile} {
        max-width: 80%;
    }
`;

export const CloseButton = styled.span`
    display: block;
    text-align: right;
    margin-bottom: 16px;
    cursor: pointer;

    &:hover {
        svg path {
            fill: ${(props) => props.theme.colors.orange};
        }
    }

    svg path {
        fill: ${(props) => props.theme.colors.white};
    }
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.theme.colors.black};
    opacity: 0.8;
    z-index: 1;
`;

export const ActiveImage = styled.div`
    position: relative;
    margin-bottom: 30px;

    img {
        border-radius: 16px;
    }
`;

export const Arrow = styled.span<{ $position: string }>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    position: absolute;
    top: 50%;
    left: ${(props) => (props.$position === "prev" ? "0" : "unset")};
    right: ${(props) => (props.$position === "next" ? "0" : "unset")};
    transform: translate(
        ${(props) => (props.$position === "prev" ? "-50%" : "50%")},
        -50%
    );

    @media ${device.mobile} {
        width: 35px;
        height: 35px;

        svg {
            transform: scale(0.7);
        }
    }

    &:hover {
        svg path {
            stroke: ${(props) => props.theme.colors.orange};
        }
    }
`;

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

        @media ${device.mobile} {
            margin-right: 16px;
        }
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
    }
`;
