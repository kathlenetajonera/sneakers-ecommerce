import { ReactNode } from "react";
import { ButtonIcon, StyledButton } from "./styles";
import Spinner from "../Spinner";

type Props = {
    label: string;
    icon?: ReactNode;
    isLoading?: boolean;
    handleClick?: () => void;
    [x: string]: any;
};

const Button = ({ label, icon, isLoading, handleClick, ...rest }: Props) => {
    return (
        <StyledButton onClick={handleClick} {...rest}>
            {isLoading ? (
                <Spinner />
            ) : (
                <>
                    {icon && <ButtonIcon>{icon}</ButtonIcon>}
                    {label}
                </>
            )}
        </StyledButton>
    );
};

export default Button;
