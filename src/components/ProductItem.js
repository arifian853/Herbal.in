import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProductItemAction from "./ProductItemAction";

function ProductItem({ id, product_img, product_name, product_price, product_desc, product_ctg, addToCart ,isProductAdded }){
    return (
        <div className="product-item">
             <div className="prod-item__image">
                <img src={product_img} alt="herbalin product" />
            </div>
            <p className="prod-item__ctg">{product_ctg}</p>
            <p className="prod-item__name"><Link to={`/products/${id}`}>{product_name}</Link>
            </p>
            <p className="prod-item__price">Price : Rp. {product_price}</p>
            <p className="prod-item__desc">{product_desc}</p>
            <ProductItemAction id={id} addToCart={addToCart} isProductAdded={isProductAdded} />

        </div>
    )
}

ProductItem.propTypes = {
    id: PropTypes.string.isRequired,
    product_name: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired,
    product_desc: PropTypes.string.isRequired,
    product_ctg: PropTypes.string.isRequired
}

export default ProductItem;