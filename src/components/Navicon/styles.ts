import { styled } from "styled-components";
import { device } from "../../utils/device";

export const NavIcon = styled.div`
    display: none;

    @media ${device.tablet} {
        display: block;
        margin-right: 16px;
        z-index: 3;

        &.active {
            span {
                &:first-child {
                    transform: rotate(45deg);
                }

                &:nth-child(2) {
                    opacity: 0;
                }

                &:last-child {
                    transform: rotate(-45deg);
                }
            }
        }
    }
`;

export const NavBurger = styled.span`
    display: block;
    width: 18px;
    height: 3px;
    border-radius: 8px;
    background-color: ${(props) => props.theme.colors.darkGrayishBlue};
    transition: 0.3s ease;

    &:not(:last-child) {
        margin-bottom: 4px;
    }

    &:first-child {
        transform-origin: -1px 5px;
    }

    &:last-child {
        transform-origin: 2px -1px;
    }
`;
