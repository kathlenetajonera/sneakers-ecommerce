import {
    CartContent,
    CartEmpty,
    CartTitle,
    Container,
    ItemDelete,
    ItemDetails,
    ItemText,
    ItemThumbnail,
} from "./styles";
import image from "../../assets/image-product-1-thumbnail.jpg";
import DeleteIcon from "../DeleteIcon";
import FlexWrapper from "../../layout/FlexWrapper";
import Button from "../Button";

type Props = {
    show: boolean;
};

const Cart = ({ show }: Props) => {
    const cartItems = [];

    return (
        <Container $active={show}>
            <CartTitle>Cart</CartTitle>
            <CartContent>
                {cartItems.length > 0 ? (
                    <>
                        <div>
                            <FlexWrapper className="item">
                                <ItemThumbnail>
                                    <img src={image} alt="product" />
                                </ItemThumbnail>

                                <ItemDetails>
                                    <ItemText>
                                        Fall Limited Edition Sneakers
                                    </ItemText>
                                    <ItemText>
                                        $125.00 x 3{" "}
                                        <span className="total">$375.00</span>
                                    </ItemText>
                                </ItemDetails>

                                <ItemDelete>
                                    <DeleteIcon />
                                </ItemDelete>
                            </FlexWrapper>
                        </div>

                        <Button label="Checkout" />
                    </>
                ) : (
                    <CartEmpty>Your cart is empty.</CartEmpty>
                )}
            </CartContent>
        </Container>
    );
};

export default Cart;
