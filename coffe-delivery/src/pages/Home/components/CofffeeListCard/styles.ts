import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CoffeeListContainer = styled.section`
    
    max-width: 1160px;
    margin: 54px auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;

`

export const CoffeeContent = styled.div`
    width: 16rem;
    height: 19.37rem;
    background: ${props => props.theme.colors["base-card"]};
    border-radius: 6px 36px;
`

export const CoffeeContainer = styled.article`
    display: flex;
    flex-direction: column;
    text-align: center;
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Tags = styled.div`
  margin-top: 12px;

  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    background-color: ${props => props.theme.colors["yellow-light"]};
    color: ${({ theme }) => theme.colors['yellow-dark']};
    text-transform: uppercase;
    ${mixins.fonts.tag}
  }
`

export const CoffeeInfo = styled.div`
    h3 {
        ${mixins.fonts.titleS}
        margin-top: 16px;
        color: ${props => props.theme.colors["base-title"]};
    }

    span {
        display: inline-flex;
        ${mixins.fonts.textS}
        color: ${props => props.theme.colors["base-label"]};
        margin-top: 8px;
        width: 216px;
        height: 36px;
    }
`
