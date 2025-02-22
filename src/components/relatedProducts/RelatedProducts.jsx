import React from "react";
import "./RelatedProducts.css"
import data_products from "../../assets/datas/data_products.js";
import Item from "../item/Item.jsx";

function RelatedProducts() {
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-item">
                {data_products.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;