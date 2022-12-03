import React from "react";
import CheckoutButton from "../components/CheckoutButton";



function CheckoutPage({ cartItems }){
    return (
        <div className="checkout-page">
            <h1>Checkout</h1>
                <p>Silahkan lakukan pembayaran ...</p>
        {cartItems.map((cartItem) => (

        
        <div>
                
                
                <div>
                    <p>Nama :{cartItem.product_name}</p>
                    <p>Qty : {cartItem.product_qty}</p>
                    <p>Price : {cartItem.product_price}</p>
                    <p>Qty x Price: {cartItem.product_qty * cartItem.product_price}</p>

                </div>

                    
          
        </div>
        ))}

        <p>Total yang harus dibayar : {cartItems.reduce((prevItem, currentItem) => prevItem + currentItem.product_qty * currentItem.product_price, 0 )}</p>
      

        <div className="paypal-button-container">
            <CheckoutButton cartItems={cartItems} />
        </div>
        </div>
    
    )
}


export default CheckoutPage;





