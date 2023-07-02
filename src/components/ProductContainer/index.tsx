import FlexWrapper from "../../layout/FlexWrapper";
import Button from "../Button";
import CartIcon from "../CartIcon";
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

const ProductContainer = () => {
    return (
        <Container>
            <FlexWrapper>
                <Wrapper>image</Wrapper>

                <Wrapper>
                    <Company>SNEAKER COMPANY</Company>
                    <ProductName>Fall Limited Edition Sneakers</ProductName>
                    <ProductDescription>
                        These low-profile sneakers are your perfect casual wear
                        companion. Featuring a durable rubber outer sole,
                        they'll withstand everything the weather can offer.
                    </ProductDescription>

                    <Price>
                        $125.00 <Discount>50%</Discount>
                    </Price>
                    <OriginalPrice>$250.00</OriginalPrice>

                    <FlexWrapper className="buttons">
                        <QuantityField />

                        <Button
                            label="Add to cart"
                            icon={<CartIcon />}
                            className="add-to-cart"
                        />
                    </FlexWrapper>
                </Wrapper>
            </FlexWrapper>
        </Container>
    );
};

export default ProductContainer;
