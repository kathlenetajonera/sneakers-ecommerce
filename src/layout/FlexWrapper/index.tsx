import { ReactNode } from "react";
import { Wrapper } from "./styles";

type Props = {
    children: ReactNode;
    [x: string]: any;
};

const FlexWrapper = ({ children, ...rest }: Props) => {
    return <Wrapper {...rest}>{children}</Wrapper>;
};

export default FlexWrapper;
