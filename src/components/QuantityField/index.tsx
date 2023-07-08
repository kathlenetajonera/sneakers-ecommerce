import { Dispatch, SetStateAction } from "react";
import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import { Container, IconWrapper, StyledInput } from "./styles";

type Props = {
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
};

const QuantityField = ({ quantity, setQuantity }: Props) => {
    const handleAdd = () => setQuantity((q) => q + 1);

    const handleSubtract = () => {
        if (quantity === 1) return;
        setQuantity((q) => q - 1);
    };

    const handleChange = (e: any) => {
        const val = e.target.value.replace(/\D/g, "");
        setQuantity(parseFloat(val) || 1);
    };

    return (
        <Container>
            <IconWrapper onClick={handleSubtract}>
                <img src={minusIcon} alt="subtract" />
            </IconWrapper>
            <StyledInput type="text" value={quantity} onChange={handleChange} />
            <IconWrapper onClick={handleAdd}>
                <img src={plusIcon} alt="add" />
            </IconWrapper>
        </Container>
    );
};

export default QuantityField;
