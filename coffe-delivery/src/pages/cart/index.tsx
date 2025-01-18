import { MapPinLine } from "phosphor-react"
import { useTheme } from "styled-components"

export function Cart(){
    const Theme = useTheme()
    return (
        <div>
            <div>
                <h5>Complete seu pedido</h5>
                <h5>Cafés selecionados</h5>
            </div>
            <div>
                <form>
                    <label htmlFor="address">
                        <div>
                        <MapPinLine weight="light" size={22} color={Theme.colors["yellow-dark"]}/>
                        <p>Endereço de Entrega</p>
                        <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>

                        <div>
                            <div>
                                <input type="number" placeholder="CEP"/>
                            </div>

                            <div>
                                <input type="text" placeholder="Rua"/>
                            </div>

                            <div>
                                <input type="number" placeholder="Número"/>
                                <input type="text"placeholder="Complemento" />
                            </div>

                            <div>
                                <input type="text" placeholder="Bairro" />
                                <input type="text" placeholder="Cidade" />
                                <input type="text" placeholder="UF"/>
                            </div>
                        </div>
                    </label>
                </form>
            </div>
        </div>
    )
}