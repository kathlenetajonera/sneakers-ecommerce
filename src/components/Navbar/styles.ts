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

        @media ${device.tablet} {
            display: none;
        }
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
