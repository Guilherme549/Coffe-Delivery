import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layoults/DefaultLayout"
import { Home } from "./pages/Home"

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route  path="/" element={<Home />} />
                <Route  path="/cart" />
                <Route path="/order-confirmed"/>
            </Route>
        </Routes>
    )
}