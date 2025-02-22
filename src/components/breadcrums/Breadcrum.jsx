import React from "react";
import "./Breadcrum.css"


function Breadcrum(props) {
    const {product} = props

    return (
        <div className="breadcrum">
            HOME <img src="/images/greater-than.png" alt="" /> SHOP <img src="/images/greater-than.png" alt="" /> {product.category} <img src="/images/greater-than.png" alt="" /> {product.name}
        </div>
    );
}

export default Breadcrum;