import { Dispatch, SetStateAction, useState } from "react";
import { CartItems } from "../../App";
import FlexWrapper from "../../layout/FlexWrapper";
import Navicon from "../Navicon";
import Logo from "../Logo";
import NavItem from "../NavItem";
import CartIcon from "../CartIcon";
import Cart from "../Cart";
import { AvatarWrapper, MenuWrapper, NavContainer, Overlay } from "./styles";
import avatar from "../../assets/image-avatar.png";
import menu from "./data";

type Props = {
    cartItems: CartItems;
    setCartItems: Dispatch<SetStateAction<CartItems>>;
};

const Navbar = ({ cartItems, setCartItems }: Props) => {
    const [showCart, setShowCart] = useState(false);
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
        <NavContainer>
            <FlexWrapper className="flex-wrapper">
                <Navicon
                    show={showMobileMenu}
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                />
                <Logo />

                <MenuWrapper className={showMobileMenu ? "mobile-active" : ""}>
                    <FlexWrapper className="menu">
                        {menu.map((item) => (
                            <NavItem key={item.key} label={item.label} />
                        ))}
                    </FlexWrapper>
                </MenuWrapper>

                <Overlay
                    className={showMobileMenu ? "mobile-active" : ""}
                    onClick={() => setShowMobileMenu(false)}
                />
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
