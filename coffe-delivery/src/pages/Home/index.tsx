
import { CoffeeListCard } from "./components/CofffeeListCard";
import { Into } from "./components/IntoContainer";
import { HomeContainer, TitleIntoCoffee } from "./styles";


export function Home(){
    
    return (
        <HomeContainer>
            <Into />
            <TitleIntoCoffee>Nossos cafés </TitleIntoCoffee>
            <CoffeeListCard />
        </HomeContainer>
    )
}