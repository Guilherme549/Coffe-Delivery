import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Aside = styled.aside`
    display: flex;
    gap: 12px;

    div {
        display: flex;
        align-items: center;
        gap: 4px;

        background-color: ${props => props.theme.colors['purple-light']};
        
        svg {
            color: ${props => props.theme.colors.purple};
        }

        span {
            color: ${props => props.theme.colors["purple-dark"]};
            font-size: 14px;
            font-weight: regular;
        }
        padding: 10px 9px;
        border-radius: 6px;
    }

    a {
        display: flex;
        align-items: center;
        background-color: ${props => props.theme.colors["yellow-light"]};
        color: ${props => props.theme.colors['yellow-dark']};

        padding: 8px;
        border-radius: 6px;

        position: relative;
    }
`