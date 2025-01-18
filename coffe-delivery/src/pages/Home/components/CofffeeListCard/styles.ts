import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";


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
  gap: 12px;
  display: flex;
  align-items: center;
  align-self: center;
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

export const Control = styled.div`
  width: 208px;
  height: 38px;
  
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-left: 16px;
  
  p {
    ${mixins.fonts.textS}
    span {
      ${mixins.fonts.titleM}
    }
  }

  div {
    height: 100%;
    ${mixins.fonts.textM}
    font-size: 20px;
    display: flex;
    
    background-color: ${props => props.theme.colors["base-button"]};
    border-radius: 6px;
    margin: -1px 8px 0px 15px;

    button {
      background-color: ${props => props.theme.colors["base-button"]};
      margin: 0 3px;
    }

    span  {
      margin-top: 5px;
    }
  }

  


`
export const ShoppinCartButton = styled.button`
  background-color: ${props => props.theme.colors["purple-dark"]};
  height: 100%;
  width: 38px;
  border-radius: 6px;
`