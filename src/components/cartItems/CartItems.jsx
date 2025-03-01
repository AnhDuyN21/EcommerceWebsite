import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./CartItems.css"

function CartItems() {
    const {all_products, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext)
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Tittle</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e) => {
                if(cartItems[e.id] > 0){
                    return (
                        <div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src= {e.image} alt="" className="carticon-product-icon"/>
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className="cartitems-remove-icon" src="./images/bin.png" onClick={() => {removeFromCart(e.id)}} alt="" />
                        </div>
                        <hr />
                        </div>
                    )
                }
                return null
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtatal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                        <button>PROCEED TO CHECK OUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have promocode, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
