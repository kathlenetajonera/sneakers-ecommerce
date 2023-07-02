import { styled } from "styled-components";

export const Container = styled.div`
    max-width: 1014px;
    margin: 90px auto;

    .buttons {
        margin-top: 40px;
    }

    .add-to-cart {
        margin-left: 20px;
        box-shadow: 0 15px 15px 0 ${(props) => props.theme.colors.lightOrange};

        svg path {
            fill: #fff;
        }
    }
`;

export const Wrapper = styled.div`
    flex: 1;
`;

export const Company = styled.p`
    font-weight: 700;
    font-size: 14px;
    color: ${(props) => props.theme.colors.orange};
    margin-bottom: 20px;
`;

export const ProductName = styled.h1`
    font-size: 42px;
`;

export const ProductDescription = styled.p`
    color: ${(props) => props.theme.colors.darkGrayishBlue};
    line-height: 1.8;
    margin: 32px 0;
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
`;
