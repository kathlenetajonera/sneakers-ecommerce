import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CartItems } from "../../App";
import { formatAmount } from "../../utils";
import FlexWrapper from "../../layout/FlexWrapper";
import Button from "../Button";
import CartIcon from "../CartIcon";
import ImageGallery from "../ImageGallery";
import QuantityField from "../QuantityField";
import {
    Container,
    Wrapper,
    Company,
    ProductName,
    ProductDescription,
    Discount,
    OriginalPrice,
    Price,
} from "./styles";
import { DATA } from "./data";

type Props = {
    cartItems: CartItems;
    setCartItems: Dispatch<SetStateAction<CartItems>>;
};

const ProductContainer = ({ cartItems, setCartItems }: Props) => {
    const [product, setProduct] = useState(DATA);
    const [productQuantity, setProductQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const handleAddToCart = () => {
        setIsLoading(true);

        const existingIds = cartItems.map((item) => item.id);
        let updatedItems: CartItems = [];

        if (existingIds.includes(product.id)) {
            updatedItems = cartItems.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: productQuantity };
                }

                return item;
            });
        } else {
            updatedItems = [...cartItems, product];
        }

        setTimeout(() => {
            setCartItems(updatedItems);
            setIsLoading(false);
        }, 1500);
    };

    useEffect(() => {
        setProduct((prod) => ({
            ...prod,
            quantity: productQuantity,
        }));
    }, [productQuantity]);

    return (
        <Container>
            <FlexWrapper className="product-wrapper">
                <Wrapper>
                    <ImageGallery />
                </Wrapper>

                <Wrapper>
                    <Company>{product.company}</Company>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>
                        {product.description}
                    </ProductDescription>

                    <div className="price-wrapper">
                        <Price>
                            {formatAmount(product.discounted_price)}
                            <Discount>{product.discount_percent}%</Discount>
                        </Price>
                        <OriginalPrice>
                            {formatAmount(product.original_price)}
                        </OriginalPrice>
                    </div>

                    <FlexWrapper className="buttons">
                        <QuantityField
                            quantity={productQuantity}
                            setQuantity={setProductQuantity}
                        />

                        <Button
                            label="Add to cart"
                            icon={<CartIcon />}
                            className="add-to-cart"
                            handleClick={handleAddToCart}
                            isLoading={isLoading}
                        />
                    </FlexWrapper>
                </Wrapper>
            </FlexWrapper>
        </Container>
    );
};

export default ProductContainer;
