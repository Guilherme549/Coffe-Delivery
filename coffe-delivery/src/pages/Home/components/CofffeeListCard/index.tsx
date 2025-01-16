import { ShoppingCart } from "phosphor-react";
import { useTheme } from "styled-components";
import { CoffeeContainer, CoffeeContent, CoffeeImg, CoffeeInfo, CoffeeListContainer, Tags } from "./styles";


export function CoffeeListCard(){
    const Theme = useTheme()
    return (
        <CoffeeListContainer>
                
                <CoffeeContent>
                    <CoffeeContainer>
                            <header>
                                <CoffeeImg src="./images/coffees/expresso.png" alt="Imagem de um café expresso" />
                            </header>
                            <Tags>
                                <span>Tradicional</span>
                            </Tags>
                            
                        <CoffeeInfo>
                            <h3>Expresso Tradicional</h3>
                            <span>O tradicional café feito com água quente e grãos moídos</span>
                        </CoffeeInfo>
                        <footer>
                            <p>R$ <span>9,90</span></p>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button>
                                    <ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }} />
                                </button>
                            </div>
                        </footer>
                    </CoffeeContainer>
                </CoffeeContent>

                <div>
                    <div>
                        <header>
                            <img src="./images/coffees/expresso.png" alt="" />
                        </header>
                        <body>
                            <h4>Expresso Tradicional</h4>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </body>
                        <footer>
                            R$ <span>9,90</span>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button><ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }}/></button>
                            </div>
                        </footer>
                    </div>
                </div>


                <div>
                    <div>
                        <header>
                            <img src="./images/coffees/expresso.png" alt="" />
                        </header>
                        <body>
                            <h4>Expresso Tradicional</h4>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </body>
                        <footer>
                            R$ <span>9,90</span>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button><ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }}/></button>
                            </div>
                        </footer>
                    </div>
                </div>


                <div>
                    <div>
                        <header>
                            <img src="./images/coffees/expresso.png" alt="" />
                        </header>
                        <body>
                            <h4>Expresso Tradicional</h4>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </body>
                        <footer>
                            R$ <span>9,90</span>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button><ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }}/></button>
                            </div>
                        </footer>
                    </div>
                </div>

                <div>
                    <div>
                        <header>
                            <img src="./images/coffees/expresso.png" alt="" />
                        </header>
                        <body>
                            <h4>Expresso Tradicional</h4>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </body>
                        <footer>
                            R$ <span>9,90</span>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button><ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }}/></button>
                            </div>
                        </footer>
                    </div>
                </div>

                <div>
                    <div>
                        <header>
                            <img src="./images/coffees/expresso.png" alt="" />
                        </header>
                        <body>
                            <h4>Expresso Tradicional</h4>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </body>
                        <footer>
                            R$ <span>9,90</span>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button><ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }}/></button>
                            </div>
                        </footer>
                    </div>
                </div>

                <div>
                    <div>
                        <header>
                            <img src="./images/coffees/expresso.png" alt="" />
                        </header>
                        <body>
                            <h4>Expresso Tradicional</h4>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </body>
                        <footer>
                            R$ <span>9,90</span>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button><ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }}/></button>
                            </div>
                        </footer>
                    </div>
                </div>

                <div>
                    <div>
                        <header>
                            <img src="./images/coffees/expresso.png" alt="" />
                        </header>
                        <body>
                            <h4>Expresso Tradicional</h4>
                            <p>O tradicional café feito com água quente e grãos moídos</p>
                        </body>
                        <footer>
                            R$ <span>9,90</span>
                            <div>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <button><ShoppingCart size={22} color={Theme.colors.background} weight="fill" style={{ backgroundColor: Theme.colors['purple'] }}/></button>
                            </div>
                        </footer>
                    </div>
                    
                    
                </div>

                
            </CoffeeListContainer>
    )
}