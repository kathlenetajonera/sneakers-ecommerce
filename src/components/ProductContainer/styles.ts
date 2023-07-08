import { styled } from "styled-components";
import { device } from "../../utils/device";

export const Container = styled.div`
    max-width: 1090px;
    margin: 90px auto;

    .buttons {
        margin-top: 40px;
        justify-content: flex-start;

        @media ${device.mobile} {
            margin-top: 32px;
            flex-direction: column;
        }
    }

    .add-to-cart {
        margin-left: 20px;
        box-shadow: 0 15px 15px 0 ${(props) => props.theme.colors.lightOrange};

        @media ${device.mobile} {
            margin: 18px 0 0;
        }

        svg path {
            fill: #fff;
        }
    }

    @media ${device.tablet} {
        margin-top: 0;

        .product-wrapper {
            flex-direction: column;
        }
    }
`;

export const Wrapper = styled.div`
    flex: 1;

    &:last-child {
        margin-left: 120px;

        @media ${device.tablet} {
            margin: 0;
        }
    }

    @media ${device.mobile} {
        .price-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

export const Company = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme.colors.orange};
    margin-bottom: 20px;
    text-transform: uppercase;
`;

export const ProductName = styled.h1`
    font-size: 42px;

    @media ${device.mobile} {
        font-size: 32px;
    }
`;

export const ProductDescription = styled.p`
    color: ${(props) => props.theme.colors.darkGrayishBlue};
    line-height: 1.8;
    margin: 32px 0;

    @media ${device.tablet} {
        margin-top: 16px;
    }
`;

export const Price = styled.h2`
    font-size: 28px;
    display: flex;
    align-items: center;
`;

export const Discount = styled.span`
    font-size: 18px;
    background-color: ${(props) => props.theme.colors.lightOrange};
    color: ${(props) => props.theme.colors.orange};
    font-weight: 700;
    padding: 4px 8px;
    border-radius: 6px;
    margin-left: 12px;
`;

export const OriginalPrice = styled.p`
    font-size: 18px;
    color: ${(props) => props.theme.colors.grayishBlue};
    font-weight: 700;
    text-decoration: line-through;
    margin-top: 10px;

    @media ${device.mobile} {
        font-size: 16px;
        margin-top: 0;
    }
`;
