import { useState } from "react";
import FlexWrapper from "../../layout/FlexWrapper";
import Logo from "../Logo";
import NavItem from "../NavItem";
import CartIcon from "../CartIcon";
import Cart from "../Cart";
import { AvatarWrapper, NavContainer } from "./styles";
import avatar from "../../assets/image-avatar.png";
import menu from "./data";

const Navbar = () => {
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

            <FlexWrapper className="flex-wrapper relative">
                <CartIcon
                    className={`cart ${showCart ? "active" : ""}`}
                    onClick={() => setShowCart(!showCart)}
                />
                <Cart show={showCart} />

                <AvatarWrapper>
                    <img src={avatar} alt="profile" />
                </AvatarWrapper>
            </FlexWrapper>
        </NavContainer>
    );
};

export default Navbar;
