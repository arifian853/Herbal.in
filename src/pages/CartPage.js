import React from "react";
import PropTypes from "prop-types";
import { MdOutlineDeleteOutline } from "react-icons/md";
import CurrencyFormat from "react-currency-format";


function CartPage({ cartItems, onAddHandler, onRemoveHandler, onClearItemHandler, onClearCartHandler }) {

    return (
        <div className="cart-page">
            <h1 className="cart-page-text">Cart Page</h1>

            {
                cartItems.length === 0 ? <div>No items here</div> : 
            
            <>
                
                {localStorage.setItem('cartItems', JSON.stringify(cartItems))}

                <table>
                    <tr>
                        <th>Products Image</th>
                        <th>Products Name</th>
                        <th>Products Qty</th>
                        <th>Qty x Price</th>
                        <th>Total Price Per Item</th>
                        <th></th>
                    </tr>
                        
                    {cartItems.map((cartItem) => (

                    <tr className="cart-item">
                        <td>
                            <img className="cart-item__img" src={cartItem.product_img} alt={cartItem.product_name} />
                        </td>

                        <td>
                            <div className="cart-item-spec">
                                <p>{cartItem.product_name}</p>
                                <p>{cartItem.product_ctg}</p>
                            </div>
                        </td>

                        <td>
                            <div className="cart-item-button-group">
                
                                <button onClick={() => onRemoveHandler(cartItem)}> - </button>
                                    <p className="cart-item__qty">{cartItem.product_qty}</p>

                                <button onClick={() => onAddHandler(cartItem)}> + </button>
                            
                                
                                {localStorage.setItem('cartItems', JSON.stringify(cartItems))}

                            </div>
                        </td>

                        <td>
                            <div className="total-price-per-item-text">
                                {cartItem.product_qty} x <CurrencyFormat value={cartItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} />
                            </div>
                        </td>

                        <td>
                            <div className="total-price-per-item">
                                <CurrencyFormat value={cartItem.product_qty * cartItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} /> 
                            </div>
                        </td>

                        <td>
                            <div className="remove-item">
                                <button onClick={() => onClearItemHandler(cartItem)}><MdOutlineDeleteOutline /></button>
                                
                                {localStorage.setItem('cartItems', JSON.stringify(cartItems))}
                            </div>
                        </td>
                    </tr>

                     
                    ))}

                    <tr className="cart-page-bottom">
                        <td>
                            <button className="clear-all-button" onClick={() => onClearCartHandler()}>Clear All</button>
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                           
                        <td>
                            <div className="total-price-all-items">
                                <p>
                                    Grand Total :   
                                    <CurrencyFormat value={cartItems.reduce((prevItem, currentItem) => prevItem + currentItem.product_qty * currentItem.product_price, 0 )} displayType={'text'} thousandSeparator={true} prefix={'  Rp. '} />
                                </p>
                            </div>

                        </td>

                        <td>
                            <button className="cart-page-buy-now">Buy Now</button>
                        </td>
                    </tr>

                </table>
                
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




