import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { CoffeeContainer, CoffeeContent, CoffeeImg, CoffeeInfo, Control, ShoppinCartButton, Tags } from "./styles";

type Props = {
    coffee: {
        id: string
        title: string
        description: string
        tags: string[]
        price: number
        image: string
    }
}



export function CoffeeListCard( { coffee }: Props){
    const Theme = useTheme()
    return (
                
                <CoffeeContent>
                    <CoffeeContainer>
                            <header>
                                <CoffeeImg src={coffee.image} alt={coffee.title} />
                            </header>
                            <Tags>
                                {coffee.tags.map((tag) => (
                                    <span>{tag}</span>
                                ))}
                            </Tags>
                            
                        <CoffeeInfo>
                            <h3>{coffee.title}</h3>
                            <span>{coffee.description}</span>
                        </CoffeeInfo>
                        <Control>
                            <p>R$ <span>{coffee.price.toFixed(2).replace('.', ',')}</span></p>
                            <div>
                                <button><Minus size={14} color={Theme.colors.purple}/></button>
                                <span>1</span>
                                <button><Plus size={14} color={Theme.colors.purple}/></button>
                            </div>
                            <ShoppinCartButton>
                                    <ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple-dark'] }} />
                            </ShoppinCartButton>
                        </Control>
                    </CoffeeContainer>
                </CoffeeContent>
                
    )
}