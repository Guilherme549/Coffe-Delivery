import styled from "styled-components";
import { mixins } from "../../../styles/mixins";

export const Control = styled.div`
  width: 72px;
  height: 32px;
  display: flex;
  p {
    ${mixins.fonts.textS}
    span {
      ${mixins.fonts.titleM}
    }
  }

  div {
    gap: 3px;
    height: 100%;
    ${mixins.fonts.textM}
    font-size: 20px;
    display: flex;
    padding: 1px;
    
    background-color: ${props => props.theme.colors["base-button"]};
    border-radius: 6px;
    margin: 0px 10px 0px 0px;

    button {
      background-color: ${props => props.theme.colors["base-button"]};
      margin: 0 3px;
    }

  }

`

export const ShoppinCartButton = styled.button`
    background-color: ${props => props.theme.colors["base-button"]};
    gap: 3px;
    padding: 3px;
    display: flex;
    height: 100%;
    border-radius: 6px;

    svg {
        margin-top: 5px;
    }

    span {
        ${mixins.fonts.buttonM}
        color: ${props => props.theme.colors["base-text"]};
        margin-top: 4px;
        margin-right: 5px;
        text-align: center;
        justify-content: center;
    }
`