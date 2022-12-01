import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDeleteOutline } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import { Helmet } from 'react-helmet';

function CartPage({ cartItems, onAddHandler, onRemoveHandler, onClearItemHandler, onClearCartHandler }) {

    return (
        <div className="cart-page">
            <Helmet>
                <title>Herbal.in - Keranjang</title>
            </Helmet>
            <h1 className="cart-page-text">Keranjang anda</h1>

            {
                cartItems.length === 0 ? <div>Anda tidak memiliki pesanan</div> : 
            
            <>
                <button className="clear-all-button" onClick={() => onClearCartHandler()}>Clear All</button>

                {cartItems.map((cartItem) => (
                    <div key={cartItem.id} className="cart-item">
                        <img className="cart-item__img" src={cartItem.product_img} alt={cartItem.product_name} />

                        <div className="cart-item-spec">
                            <p>{cartItem.product_name}</p>
                            <p>{cartItem.product_ctg}</p>
                        

                        </div>

                        <div className="cart-item-button-group">
                    
                            <button onClick={() => onRemoveHandler(cartItem)}> - </button>
                                <p className="cart-item__qty">{cartItem.product_qty}</p>

                        
                            <button onClick={() => onAddHandler(cartItem)}> + </button>

                        </div>

                        <div className="total-price-per-item-text">
                            {cartItem.product_qty} x <CurrencyFormat value={cartItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} />
                        </div>

                        <div className="total-price-per-item">
                            <CurrencyFormat value={cartItem.product_qty * cartItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} /> 
                        </div>

                        <div className="remove-item">
                            <button onClick={() => onClearItemHandler(cartItem)}><MdOutlineDeleteOutline /></button>
                        </div>
                    </div>
                ))}

                <div className="total-price-all-items">
                    <p>
                        Total :   
                        <CurrencyFormat value={cartItems.reduce((prevItem, currentItem) => prevItem + currentItem.product_qty * currentItem.product_price, 0 )} displayType={'text'} thousandSeparator={true} prefix={'  Rp. '} />
                    </p>
                </div>
            </> 
            
            }

        </div>
    )
}

CartPage.propTypes = {
    cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddHandler: PropTypes.func.isRequired,
    onRemoveHandler: PropTypes.func.isRequired,
    onClearItemHandler: PropTypes.func.isRequired,
    onClearCartHandler: PropTypes.func.isRequired,
}

export default CartPage;
