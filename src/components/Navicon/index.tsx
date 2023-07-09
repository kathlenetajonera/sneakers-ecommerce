import { NavBurger, NavIcon } from "./styles";

type Props = {
    show: boolean;
    onClick: () => void;
};

const Navicon = ({ show, onClick }: Props) => {
    return (
        <NavIcon className={show ? "active" : ""} onClick={onClick}>
            <NavBurger />
            <NavBurger />
            <NavBurger />
        </NavIcon>
    );
};

export default Navicon;
