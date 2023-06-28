import FlexWrapper from "../../layout/FlexWrapper";
import avatar from "../../assets/image-avatar.png";
import menu from "./data";
import Logo from "../Logo";
import NavItem from "../NavItem";
import CartIcon from "../CartIcon";
import { AvatarWrapper, NavContainer } from "./styles";

const Navbar = () => {
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

            <FlexWrapper className="flex-wrapper">
                <CartIcon className="cart" />
                <AvatarWrapper>
                    <img src={avatar} alt="profile" />
                </AvatarWrapper>
            </FlexWrapper>
        </NavContainer>
    );
};

export default Navbar;
