import {Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { HeaderInto, IntoContainer, IntoContent, ItensInto } from "./styles";
import { useTheme } from 'styled-components'


export function Into(){
    const theme = useTheme()
    return(
        <IntoContainer>
            <IntoContent>
                <HeaderInto>
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                </HeaderInto>
                <ItensInto>
                    <div>
                        <ShoppingCart size={32} weight="fill" color={theme.colors.background} style={{ backgroundColor: theme.colors['yellow-dark'] }}/>
                        <span>Compra simples e segura</span>
                    </div>
                    <div>
                        <Package size={32} weight="fill" color={theme.colors.background} style={{ backgroundColor: theme.colors['base-text'] }}/>
                        <span>Embalagem mantém o café intacto</span>
                        
                    </div>
                    <div>
                        <Timer size={32} weight="fill" color={theme.colors.background} style={{ backgroundColor: theme.colors['yellow'] }}/>
                        <span>Entrega rápida e rastreada</span>
                    </div>
                    <div>
                        <Coffee size={32} weight="fill" color={theme.colors.background} style={{ backgroundColor: theme.colors['purple'] }}/>
                        <span>O café chega fresquinho até você</span>
                    </div>
                </ItensInto>
            </IntoContent>    
            <div>
                <img src="./images/hero.svg" alt="" />
            </div>  

            <img src="./images/hero-bg.svg" alt="" id="hero-bg" />

        </IntoContainer>
    )
}