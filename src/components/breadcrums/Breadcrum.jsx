import React from "react";
import "./Breadcrum.css"


function Breadcrum(props) {
    const {product} = props

    return (
        <div className="breadcrum">
            HOME <img src="/images/arrow-breadcum.png" alt="" /> SHOP <img src="/images/arrow-breadcum.png" alt="" /> {product.category} <img src="/images/arrow-breadcum.png" alt="" /> {product.name}
        </div>
    );
}

export default Breadcrum;