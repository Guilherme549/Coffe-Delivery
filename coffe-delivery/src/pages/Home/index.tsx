
import { CoffeeListCard } from "./components/CofffeeListCard";
import { Into } from "./components/IntoContainer";
import { CoffeeCard, HomeContainer, TitleIntoCoffee } from "./styles";
import { coffees } from '../../../data.json'

export function Home(){
    
    return (
        <HomeContainer>
            <Into />
            <TitleIntoCoffee>Nossos cafés </TitleIntoCoffee>

            <CoffeeCard>
                {coffees.map((coffee) => (
                    <CoffeeListCard key={coffee.id} coffee={coffee}/>
                ))}
            </CoffeeCard>
        </HomeContainer>
    )
}