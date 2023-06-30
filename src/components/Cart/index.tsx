import { CartContent, CartEmpty, CartTitle, Container } from "./styles";

type Props = {
    show: boolean;
};

const Cart = ({ show }: Props) => {
    return (
        <Container active={show}>
            <CartTitle>Cart</CartTitle>
            <CartContent>
                <CartEmpty>Your cart is empty.</CartEmpty>
            </CartContent>
        </Container>
    );
};

export default Cart;
