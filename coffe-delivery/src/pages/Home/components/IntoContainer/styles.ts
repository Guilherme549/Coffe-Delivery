import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const IntoContainer = styled.section`
    margin-bottom: 6rem;
    position: relative;
    display: flex;
    max-width: 72.5rem;
    max-height: 34rem;

    /* img#hero-bg {
      position: absolute;
      top: 0;
      left: 0;
      height: 600px;
      width: 100vw;
      object-fit: cover;
      z-index: -1;
  } */

`

export const IntoContent = styled.div`
    
`

export const HeaderInto = styled.div`
    max-width: 36.75rem;
    max-height: 12rem;
    
    h1 {
        color: ${props => props.theme.colors["base-title"]};
        margin-bottom: 16px;
        ${mixins.fonts.titleXL}
    }

    p {
        color: ${props => props.theme.colors["base-subtitle"]};
        ${mixins.fonts.textL}
    }
`

export const ItensInto = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap ;
    margin-top: 70px;
    div {
        display: flex;
        align-items: center;
        width: 18.35rem;
        height: 2rem;
        gap: 12px;

        svg {
            
            padding: 8px;
            border-radius: 50%;
            
        }

        span {
            ${mixins.fonts.textM}
        }

    }

    
`