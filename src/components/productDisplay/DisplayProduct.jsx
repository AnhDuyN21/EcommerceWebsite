import React from "react";
import "./DisplayProduct.css"

const ProductDisplay = (props) => {
    const { product } = props
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star.png" alt="" />
                <img src="/images/star-dull.png" alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                    ${product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                    ${product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
            Việc đổi tên class sẽ ảnh hưởng đến cách mà bạn nhập (import) và sử dụng class đó trong các file khác. Nếu bạn đã đổi tên class ProductDisplay, bạn cần đảm bảo rằng tất cả các import và sử dụng class này đều được cập nhật theo tên mới.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category :</span>Women, T-shirts, Croptop</p>
            <p className="productdisplay-right-category"><span>Tags :</span>Modern, Lastest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;