import React from "react";


import GooglePayButton from "@google-pay/button-react";

function CheckoutPage({ cartItems }){
    const total = cartItems.reduce((prevItem, currentItem) => prevItem + currentItem.product_qty * currentItem.product_price, 0 );
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

       <p>Total yang harus dibayar adalah : {total}</p>

        <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: `${total}`,
      currencyCode: 'IDR',
      countryCode: 'ID',
    },

    shippingAddressRequired: true,
    callbackIntents: ['PAYMENT_AUTHORIZATION'],
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}

  onPaymentAuthorized={paymentData => {
    console.log("Payment Authorised Success", paymentData);
    return { transactionState: 'SUCCESS'}
  }}

  existingPaymentMethodRequired='false'
  buttonColor="black"
  buttonType="Buy"
/>
            

        </div>
    
    )
}


export default CheckoutPage;





