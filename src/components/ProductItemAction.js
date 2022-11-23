import React from "react";
import PropTypes from "prop-types";
import CartButton from "./CartButton";

function ProductItemAction({ id, addToCart, isProductAdded }){
    return (
        <>
            <CartButton id={id} addToCart={addToCart} isProductAdded={isProductAdded} />
        </>
    )
}

ProductItemAction.propTypes = {
    id: PropTypes.string.isRequired,
    // addToCart: PropTypes.func.isRequired,
    isProductAdded: PropTypes.bool
}

export default ProductItemAction;