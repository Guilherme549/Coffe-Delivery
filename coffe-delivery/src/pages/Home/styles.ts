import styled from "styled-components";
import { mixins } from "../../styles/mixins";



export const HomeContainer = styled.div`
    margin: 6.25rem 0;


`

export const TitleIntoCoffee = styled.h1`
    ${mixins.fonts.titleL}
    color: ${props => props.theme.colors["base-subtitle"]};
`
export const CoffeeCard = styled.div`
    max-width: 1160px;
        margin: 54px auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-row-gap: 40px;
        grid-column-gap: 32px;
`


