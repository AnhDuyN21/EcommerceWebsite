import React, {useContext} from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "../components/breadcrums/Breadcrum";
import ProductDisplay from "../components/productDisplay/DisplayProduct.jsx";
import DescriptionBox from "../components/descriptionBox/DescriptionBox.jsx";
import RelatedProducts from "../components/relatedProducts/RelatedProducts.jsx";

function Product() {
    const { all_products } = useContext(ShopContext)
    const { productId } = useParams()
    const product = all_products.find(product => product.id === Number(productId))
    
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox/>
            <RelatedProducts/>
        </div>
    );
}

export default Product;