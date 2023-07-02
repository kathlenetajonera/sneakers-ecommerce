import minusIcon from "../../assets/icon-minus.svg";
import plusIcon from "../../assets/icon-plus.svg";
import { Container, IconWrapper, StyledInput } from "./styles";

const QuantityField = () => {
    return (
        <Container>
            <IconWrapper>
                <img src={minusIcon} alt="subtract" />
            </IconWrapper>
            <StyledInput type="text" value="0" />
            <IconWrapper>
                <img src={plusIcon} alt="add" />
            </IconWrapper>
        </Container>
    );
};

export default QuantityField;
