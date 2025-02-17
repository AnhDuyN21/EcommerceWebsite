import React from "react";
import "../offers/Offers.css"

function Offers() {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLER PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src="./images/exclusive-img.png" alt="" />

            </div>
        </div>
    );
}

export default Offers;