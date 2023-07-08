import { styled } from "styled-components";
import { device } from "../../utils/device";

export const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;

    @media ${device.desktop} {
        margin: 0 50px;
    }

    @media ${device.tablet} {
        margin: 0 25px;
    }
`;
