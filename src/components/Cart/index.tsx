import { Dispatch, SetStateAction } from "react";
import { CartItems } from "../../App";
import { formatAmount } from "../../utils";
import DeleteIcon from "../DeleteIcon";
import FlexWrapper from "../../layout/FlexWrapper";
import Button from "../Button";
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

type Props = {
    show: boolean;
    items: CartItems;
    setItems: Dispatch<SetStateAction<CartItems>>;
};

const Cart = ({ show, items, setItems }: Props) => {
    const calculateTotal = (amount: number, qty: number) =>
        formatAmount(amount * qty);

    const handleDelete = (id: number) => {
        setItems((prev) => [...prev.filter((item) => item.id !== id)]);
    };

    return (
        <Container $active={show}>
            <CartTitle>Cart</CartTitle>
            <CartContent>
                {items.length > 0 ? (
                    <>
                        <div>
                            {items.map((item) => (
                                <FlexWrapper className="item" key={item.id}>
                                    <ItemThumbnail>
                                        <img
                                            src={item.images[0].thumbnail}
                                            alt={item.name}
                                        />
                                    </ItemThumbnail>

                                    <ItemDetails>
                                        <ItemText>{item.name}</ItemText>
                                        <ItemText>
                                            {formatAmount(
                                                item.discounted_price
                                            )}{" "}
                                            x {item.quantity}{" "}
                                            <span className="total">
                                                {calculateTotal(
                                                    item.discounted_price,
                                                    item.quantity
                                                )}
                                            </span>
                                        </ItemText>
                                    </ItemDetails>

                                    <ItemDelete
                                        onClick={() => handleDelete(item.id)}
                                    >
                                        <DeleteIcon />
                                    </ItemDelete>
                                </FlexWrapper>
                            ))}
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
