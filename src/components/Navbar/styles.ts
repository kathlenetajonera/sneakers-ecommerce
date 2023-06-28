import { styled } from "styled-components";
import FlexWrapper from "../../layout/FlexWrapper";
import { GLOBAL_COLORS } from "../../utils/variables";

export const NavContainer = styled(FlexWrapper)`
    height: 120px;
    border-bottom: 2px solid ${GLOBAL_COLORS.lightGrayishBlue};

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

        &:hover {
            svg path {
                fill: ${GLOBAL_COLORS.black};
            }
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

    &:hover {
        border-color: ${GLOBAL_COLORS.orange};
    }

    img {
        max-width: 100%;
        object-fit: cover;
    }
`;
