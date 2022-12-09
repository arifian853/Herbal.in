import React from "react";
import PropTypes from "prop-types";
import GooglePayButton from "@google-pay/button-react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { ThemeContext } from "../context/ThemeContext";


function CheckoutPage({ cartItems, setCartItems }){
    const navigate = useNavigate();
    const total = cartItems.reduce((prevItem, currentItem) => prevItem + currentItem.product_qty * currentItem.product_price, 0 );
    const { theme } = React.useContext(ThemeContext);

    return (
        <div className="checkout-page" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Helmet>
                <title>Herbal.in - Checkout</title>
            </Helmet>
            <h1 className="checkout-page-text">Checkout</h1>
            <hr />

               
            <div className="checkout-order-data">
                
              <p>Pesanan Kamu</p>
                  
              <table>
                <thead>

                  <tr>

                        <th>Nama Produk</th>
                        <th>Jumlah</th>
                        <th>Harga</th>

                  </tr>

                </thead>


                <tbody>

                  {
                    cartItems.map((cartItem) => (

                    <tr key={cartItem.id}>
                      <td className="name">{cartItem.product_name}</td>
                      <td className="qty">{cartItem.product_qty}</td>
                      <td className="price"> <CurrencyFormat value={cartItem.product_qty * cartItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} /> </td>
                    </tr> ))
                      
                  }

                </tbody>


                <tfoot>
                  <tr>
                    <td colSpan="3" className="total">Total yang harus dibayar adalah : <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'  Rp. '} /></td>
                  </tr>

                </tfoot>


              </table>
            </div>
        
       
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
  
              onPaymentAuthorized={paymentData => {    
                navigate('/order-received');
                setCartItems([]);
                  return { transactionState: 'SUCCESS'}
              }}

              
              existingPaymentMethodRequired='false'
              buttonColor="white"
              buttonType="pay"
              buttonLocale="id"
             
              
            />

        </div>
    )
}

CheckoutPage.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  setCartItems: PropTypes.func
}


export default CheckoutPage;





