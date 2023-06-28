import { LinkWrapper, StyledLink } from "./styles";

type Props = {
    key: string;
    label: string;
};

const NavItem = ({ label }: Props) => {
    return (
        <LinkWrapper>
            <StyledLink href="#">{label}</StyledLink>
        </LinkWrapper>
    );
};

export default NavItem;
