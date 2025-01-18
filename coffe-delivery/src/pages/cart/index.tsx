import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useTheme } from "styled-components";
import { QuantityInput } from "../../components/Form/QuantityInput";
import { AddressAndPayment, AddressInto, CartContainer, FormPayment, Inputs, Payments, PaymentsContainer } from "./styles";

export function Cart() {
    const theme = useTheme();

    return (
        <CartContainer>
            
            <AddressAndPayment>
            <h5>Complete seu pedido</h5>
                <div>
                    <FormPayment id="order">
                        <label htmlFor="address">
                            <AddressInto>
                                <MapPinLine weight="light" size={22} color={theme.colors["yellow-dark"]} />
                                <div>
                                    <p >Endereço de Entrega</p>
                                    <span>Informe o endereço onde deseja receber seu pedido</span>
                                </div>
                            </AddressInto>

                            <Inputs>
                                <div>
                                    <input id="cep" type="number" placeholder="CEP" />
                                </div>

                                <div>
                                    <input id="street" type="text" placeholder="Rua" />
                                </div>

                                <div>
                                    <input id="number" type="number" placeholder="Número" />
                                    <input id="complement" type="text" placeholder="Complemento" />
                                </div>

                                <div>
                                    <input id="neighborhood" type="text" placeholder="Bairro" />
                                    <input id="city" type="text" placeholder="Cidade" />
                                    <input id="state" type="text" placeholder="UF" />
                                </div>
                            </Inputs>
                        </label>
                        {/* PAGAMENTO */}
                        <div>
                            <div>
                                <CurrencyDollar weight="regular" size={22} color={theme.colors.purple} />
                                <div>
                                    <p>Pagamento</p>
                                    <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                                </div>
                            </div>
                            <div>
                                <label>
                                    <CreditCard weight="regular" color={theme.colors.purple} />
                                    <span>CARTÃO DE CRÉDITO</span>
                                </label>

                                <label>
                                    <Bank weight="regular" color={theme.colors.purple} />
                                    <span>CARTÃO DE DÉBITO</span>
                                </label>

                                <label>
                                    <Money weight="regular" color={theme.colors.purple} />
                                    <span>DINHEIRO</span>
                                </label>
                            </div>
                        </div>
                    </FormPayment>
                </div>  
            </AddressAndPayment>
            {/* CAFES SELECIONADOS */}
            
            <Payments>
                <h5>Cafés selecionados</h5>
                <PaymentsContainer>
                    {/* CAFE */}
                    <div>
                        <img src="images/coffees/americano.png" alt="Americano Coffee" />
                        <div>
                            <span>Expresso Tradicional</span>
                            <QuantityInput />
                        </div>
                    </div>

                    {/* PRECO TOTAL */}
                    <div>
                        <div>
                            <p>Total de itens</p>
                            <span>R$ 29,70</span>
                        </div>
                        <div>
                            <p>Entrega</p>
                            <span>R$ 3,50</span>
                        </div>
                        <div>
                            <p>Total</p>
                            <span>R$ 33,20</span>
                        </div>

                        <button type="submit" form="order">Confirmar pedido</button>
                    </div>
                </PaymentsContainer>
                
            </Payments>
        </CartContainer>
    );
}
