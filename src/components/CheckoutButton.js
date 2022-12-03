import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


function CheckoutButton({cartItems}){
    const [hasPaid, setHasPaid] = React.useState(false);
    const [error, setError] = React.useState(null);



    function handleApprove(orderId){

        setHasPaid(true);


    };

    if(hasPaid){
        alert("Terima kasih telah berbelanja di Herbal.in");
    }

    if(error){
        alert(error);
    }

    return (
    <PayPalScriptProvider options={{ "client-id" : process.env.REACT_APP_CLIENT_ID_PAYPAL, "locale": "id_ID"}}>
        <PayPalButtons style={
            {
                layout: "horizontal",
                color: "gold",
                shape: "rect",
                tagline: false,
            }
        } 



  


    // onClick={(data, actions) => {
    //     const sudahPernahBeli = false;
    //     if(sudahPernahBeli){
    //         setError('Kamu sudah membeli produk tersebut.');
    //         return actions.reject()
    //     } else {
    //         return actions.resolve();
    //     }
    // }}


    createOrder={(data, actions) => {
      
        return actions.order.create({
                purchase_units: [
                    { 
                        amount: {
                           
                            value: cartItems.reduce((prevItem, currentItem) => prevItem + currentItem.product_qty * currentItem.product_price, 0)
                        },
                    }
                
                ]

            })
            
        }}
  
  
    // onApprove={ async (data, actions) => {
    //     const order = await actions.order.capture();
    //     console.log("order", order);

    //     handleApprove(data.orderID);
    // }}

    onApprove={async (data, actions ) => {
        const details = await actions.order.capture();
        alert(`Transaksi yang dilakukan oleh ${details.payer.name.given_name} telah berhasil`);

        handleApprove(data.orderID);
    }}

    onCancel={() => {
       alert('Pembayaran Anda telah dibatalkan ...');
    }}
    
    onError={(error) => {
        setError(error);
        console.error("Mohon maaf. Terjadi error pada proses Checkout", error);
    }}
    />
        </PayPalScriptProvider>
    )

    
}

export default CheckoutButton;