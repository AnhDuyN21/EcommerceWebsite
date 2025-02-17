import React from "react";
import "../popular/Popular.css"
import data_products from "../../assets/datas/data_products.js";
import Item from "../item/Item.jsx"

function Popular() {
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {data_products.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    );
}

export default Popular;