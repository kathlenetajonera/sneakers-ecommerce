import { styled } from "styled-components";
import FlexWrapper from "../../layout/FlexWrapper";
import { device } from "../../utils/device";

export const NavContainer = styled(FlexWrapper)`
    height: 120px;
    border-bottom: 2px solid ${(props) => props.theme.colors.lightGrayishBlue};

    @media ${device.tablet} {
        height: 80px;
    }

    @media ${device.mobile} {
        height: 75px;
    }

    .flex-wrapper,
    .menu {
        height: 100%;
    }

    .menu {
        margin-left: 60px;
    }

    .cart {
        margin-right: 45px;
        cursor: pointer;

        @media ${device.tablet} {
            margin-right: 24px;
            transform: scale(1.2);
        }

        &:hover,
        &.active {
            svg path {
                fill: ${(props) => props.theme.colors.black};
            }
        }
    }

    .relative {
        position: relative;
    }
`;

export const MenuWrapper = styled.div`
    height: 100%;

    @media ${device.tablet} {
        position: fixed;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        width: 65%;
        max-width: 400px;
        height: 100%;
        background-color: ${(props) => props.theme.colors.white};
        z-index: 5;
        transition: transform 0.3s ease-out;

        &.mobile-active {
            transform: translateX(0);
        }

        .menu {
            flex-direction: column;
            align-items: flex-start;
            height: auto;
            margin: 100px 0 0 25px;
        }
    }
`;

export const Overlay = styled.div`
    @media ${device.tablet} {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.6);
        height: 100%;
        z-index: 2;
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;

        &.mobile-active {
            pointer-events: all;
            opacity: 1;
        }
    }
`;

export const AvatarWrapper = styled.span`
    width: 50px;
    height: 50px;
    border: 2px solid transparent;
    border-radius: 50%;
    transition: border-color 0.3s ease;
    cursor: pointer;

    @media ${device.mobile} {
        width: 35px;
        height: 35px;
    }

    &:hover {
        border-color: ${(props) => props.theme.colors.orange};
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }
`;
