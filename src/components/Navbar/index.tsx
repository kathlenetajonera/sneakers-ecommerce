import { Dispatch, SetStateAction, useState } from "react";
import { CartItems } from "../../App";
import FlexWrapper from "../../layout/FlexWrapper";
import Logo from "../Logo";
import NavItem from "../NavItem";
import CartIcon from "../CartIcon";
import Cart from "../Cart";
import { AvatarWrapper, NavContainer } from "./styles";
import avatar from "../../assets/image-avatar.png";
import menu from "./data";

type Props = {
    cartItems: CartItems;
    setCartItems: Dispatch<SetStateAction<CartItems>>;
};

const Navbar = ({ cartItems, setCartItems }: Props) => {
    const [showCart, setShowCart] = useState(false);

    return (
        <NavContainer>
            <FlexWrapper className="flex-wrapper">
                <Logo />

                <FlexWrapper className="menu">
                    {menu.map((item) => (
                        <NavItem key={item.key} label={item.label} />
                    ))}
                </FlexWrapper>
            </FlexWrapper>

            <FlexWrapper
                className="flex-wrapper relative"
                onMouseLeave={() => setShowCart(false)}
            >
                <CartIcon
                    className={`cart ${showCart ? "active" : ""}`}
                    onMouseEnter={() => setShowCart(true)}
                />
                <Cart
                    show={showCart}
                    items={cartItems}
                    setItems={setCartItems}
                />

                <AvatarWrapper>
                    <img src={avatar} alt="profile" />
                </AvatarWrapper>
            </FlexWrapper>
        </NavContainer>
    );
};

export default Navbar;
