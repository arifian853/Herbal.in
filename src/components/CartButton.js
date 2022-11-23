import React from "react";
import PropTypes from "prop-types";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

function CartButton({ id, addToCart, isProductAdded }){
    return (
        <div className="add-to-cart">
           <button className="product-item__addToCart" onClick={() => addToCart(id)}>{isProductAdded === false ? 
           <div>
            <p><MdOutlineAddShoppingCart /> Add to Cart</p>
           
           </div> : <div>
            <p>Remove from Cart</p>
            <MdOutlineRemoveShoppingCart /> 
           </div>}
            
            
            </button>
        </div>

    )
}

CartButton.propTypes = {
    id: PropTypes.string.isRequired,
    // addToCart: PropTypes.func.isRequired,
    isProductAdded: PropTypes.bool
}

export default CartButton;