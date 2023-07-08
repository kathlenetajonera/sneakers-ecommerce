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

    const handleAddToCart = () => {
        const existingIds = cartItems.map((item) => item.id);
        let updatedItems;

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

        setCartItems(updatedItems);
    };

    useEffect(() => {
        setProduct((prod) => ({
            ...prod,
            quantity: productQuantity,
        }));
    }, [productQuantity]);

    return (
        <Container>
            <FlexWrapper>
                <Wrapper>
                    <ImageGallery />
                </Wrapper>

                <Wrapper>
                    <Company>{product.company}</Company>
                    <ProductName>{product.name}</ProductName>
                    <ProductDescription>
                        {product.description}
                    </ProductDescription>

                    <Price>
                        {formatAmount(product.discounted_price)}
                        <Discount>{product.discount_percent}%</Discount>
                    </Price>
                    <OriginalPrice>
                        {formatAmount(product.original_price)}
                    </OriginalPrice>

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
                        />
                    </FlexWrapper>
                </Wrapper>
            </FlexWrapper>
        </Container>
    );
};

export default ProductContainer;
