import { styled } from "styled-components";

export const LinkWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-right: 35px;
    height: 100%;
    overflow: hidden;

    &::after {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        background-color: ${(props) => props.theme.colors.orange};

        position: absolute;
        left: 0;
        bottom: 0;
        transform: translateY(100%);
        transition: 0.3s ease;
    }

    &:hover {
        a {
            color: ${(props) => props.theme.colors.black};
        }

        &::after {
            transform: translateY(0);
        }
    }
`;

export const StyledLink = styled.a`
    display: flex;
    align-items: center;
    height: 100%;
    color: ${(props) => props.theme.colors.darkGrayishBlue};
    text-decoration: none;
    transition: color 0.3s ease;
`;
