import React from "react";
import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

function ProductList({products, addToCart, isProductAdded }){
    return (
        <div className="product-list">
            { products.map((product) => (
                <ProductItem key={product.id} id={product.id} addToCart={addToCart} isProductAdded={isProductAdded} { ... product}  />
            ))}
        </div>
    )
}

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    // addToCart: PropTypes.func.isRequired,
    isProductAdded: PropTypes.bool,
}

export default ProductList;