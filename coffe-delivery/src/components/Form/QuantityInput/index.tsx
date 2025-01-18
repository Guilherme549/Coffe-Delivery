import { useTheme } from "styled-components"
import { Control, ShoppinCartButton } from "./styles"
import { Minus, Plus, Trash } from "phosphor-react"


export function QuantityInput(){
    const Theme = useTheme()
    return (
        <Control>
            <div>
                <button><Minus size={14} color={Theme.colors.purple}/></button>
                <span>1</span>
                <button><Plus size={14} color={Theme.colors.purple}/></button>
            </div>
            <ShoppinCartButton>
                <Trash size={16} color={Theme.colors.purple} weight="regular" />
                <span>REMOVER</span>
            </ShoppinCartButton>
        </Control>
    )
}