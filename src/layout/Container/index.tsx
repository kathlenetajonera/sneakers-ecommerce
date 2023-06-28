import { ReactNode } from "react";
import { StyledContainer } from "./styles";

type Props = {
    children: ReactNode;
};

const Container = ({ children }: Props) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
