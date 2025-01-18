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
    background-color: ${props => props.theme.colors["base-card"]};
    width: 40rem;
    height: 23.25rem;
    
    label {
        
    }

    input {
        
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