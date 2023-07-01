import { StyledButton } from "./styles";

type Props = {
    label: string;
    handleClick?: () => void;
};

const Button = ({ label, handleClick }: Props) => {
    return <StyledButton onClick={handleClick}>{label}</StyledButton>;
};

export default Button;
