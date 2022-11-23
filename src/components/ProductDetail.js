import React from "react";
import PropTypes from "prop-types";
import ProductItemAction from "./ProductItemAction";

function ProductDetail({ product_img, product_name, product_price, product_desc, product_ctg, addToCart, isProductAdded }){
    return (

        <>
        <div className="detail-page">
           

           <img className="detail-page__image" src={product_img} alt={product_name} />

                    

            <div className="specification">

                <h1 className="detail-page__name">{product_name}</h1>
                <p className="detail-page__price">Product Price : {product_price}</p>
                <p className="detail-page__ctg">Category : {product_ctg}</p>

                <ProductItemAction addToCart={addToCart} isProductAdded = {isProductAdded}  />

            </div>
           </div>

           <div className="detail-page-addition">
                <p className="detail-page__text">Product Description :</p>
                <p className="detail-page__desc"> {product_desc}</p>

           </div>

           </>
        
    )
}

ProductDetail.propTypes = {
    product_img: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired,
    product_desc: PropTypes.string.isRequired,
    product_ctg: PropTypes.string
}

export default ProductDetail;