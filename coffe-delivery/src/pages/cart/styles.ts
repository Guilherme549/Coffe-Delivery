import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const CartContainer = styled.main`
    
    display: flex;
    gap: 1.94rem;
    h5 {
        ${mixins.fonts.titleXS}
        margin-top: 6.25rem;
    }
`

export const AddressAndPayment = styled.div`
    width: 40rem;
    height: 36.93rem;
    border-radius: 6px;

`

export const FormPayment = styled.form`
    padding: 2.5rem;
    background-color: ${props => props.theme.colors["base-card"]};
    width: 40rem;
    height: 23.25rem;
    
    input {
        ${mixins.fonts.textS}
        border: none;
        border-radius: 4px;
        background-color: ${props => props.theme.colors["base-input"]};
        color: ${props => props.theme.colors["base-label"]};
        height: 2.68rem;

        margin-bottom: 1rem;
        margin-right: 16px;
        
        padding: 16px;
    }

    #cep {
        width: 12.5rem;
    }

    #street {
        width: 35rem;
    }

    #number {
        width: 12.5rem;
    }

    #complement {
        width: 21.75rem;
    }

    #neighborhood{
        width: 12.5rem;
    }

    #city{
        width: 17.25rem;
    }

    #state{
        width: 3.75rem;
    }

    div {
        
    }

`

export const Inputs = styled.div`
    div {
        display: flex;
    }
`

export const AddressInto = styled.div`
    gap: 5px;
    display: flex;
    margin-bottom: 2rem;
     p {
        ${mixins.fonts.textM}
    }
    span {
        ${mixins.fonts.textS}
    }
`

export const Payments = styled.div`
    width: 28rem;
    height: 31.12rem;
`

// Area de pagamento
export const PaymentsContainer = styled.div`
    border-radius: 6px 44px ;
    background-color: ${props => props.theme.colors["base-card"]};
`