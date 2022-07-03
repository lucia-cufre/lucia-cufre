import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home"
import ProductsList from "../Pages/ProductsList"
/* import AddProduct from "../Pages/AddProduct" */


 const Router = () => {
    return(
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/listaProdutos" element={<ProductsList/>}/>

</Routes>
</BrowserRouter>
    )
}

export default Router