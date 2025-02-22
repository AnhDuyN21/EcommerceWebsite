import React, {useContext} from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrums/Breadcrum";
import ProductDisplay from "../components/productDisplay/DisplayProduct.jsx";

function Product() {
    const { all_products } = useContext(ShopContext)
    const { productId } = useParams()
    const product = all_products.find(product => product.id === Number(productId))
    
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
        </div>
    );
}

export default Product;