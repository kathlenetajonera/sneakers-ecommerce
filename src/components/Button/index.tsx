import { ReactNode } from "react";
import { ButtonIcon, StyledButton } from "./styles";

type Props = {
    label: string;
    icon?: ReactNode;
    handleClick?: () => void;
    [x: string]: any;
};

const Button = ({ label, icon, handleClick, ...rest }: Props) => {
    return (
        <StyledButton onClick={handleClick} {...rest}>
            {icon && <ButtonIcon>{icon}</ButtonIcon>}
            {label}
        </StyledButton>
    );
};

export default Button;
