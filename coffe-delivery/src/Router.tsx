import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layoults/DefaultLayout"
import { Home } from "./pages/Home"
import { Cart } from "./pages/cart"
import { Success } from "./pages/Success"

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route  path="/" element={<Home />} />
                <Route  path="/cart" element={<Cart />}/>
                <Route path="/success" element={<Success />}/>
            </Route>
        </Routes>
    )
}