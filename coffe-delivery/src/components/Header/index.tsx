import { MapPin, ShoppingCart } from "phosphor-react";
import { Aside, HeaderContainer } from "./styles";
import { Link } from "react-router-dom";

export function Header(){
    return (
        <HeaderContainer>
            <Link to="/">
                <img src="/logo2.svg" alt="" />
            </Link>
            <Aside>
                <div>
                    <MapPin size={32} weight="fill"/>
                    <span>Porto Alegre, RS</span>
                </div>
                
                <Link to={"/cart"} title="Carrinho de compras">
                    <ShoppingCart size={32} weight="fill"/>
                </Link>
            </Aside>
        </HeaderContainer>
    )
}