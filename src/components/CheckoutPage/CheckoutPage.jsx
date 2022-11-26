import React from 'react'


function CheckoutPage() {
  return (
    <div className='checkout-container'>    
        <div className='checkout-content'>
        <h1>Billing Details</h1>
            <form className='checkout-form' action="">
                <div className='checkout-name'>
                    <div className="checkout-Fname">
                        <label for="fname">First Name</label><br />
                        <input type="text" id="fname" name="fname" /><br />
                    </div>
                    <div className="checkout-Lname">
                        <label for="lname">Last Name</label><br />
                        <input type="text" id="lname" name="lname" />
                    </div>
                </div>
                <div className='checkout-country'>
                    <div className="checkout-region">
                        <label for="country">Country/Region</label><br />
                        <input type="text" id="country" name="country" /><br />
                    </div>
                    <div className="checkout-city">
                        <label for="city">City</label><br />
                        <input type="text" id="city" name="city" />
                    </div>
                </div>
                <div className='checkout-address'>
                    <label for="address">Address</label><br />
                    <input type="text" id="address" name="address" /><br />                    
                </div>
                <div className='checkout-postal'>
                    <div className="postalCode">
                        <label for="postal">Postal Code</label><br />
                        <input type="text" id="postal" name="postal" /><br />        
                    </div>
                    <button>Place Order</button>                    
                </div>                    
            </form>
        </div>
    </div>
  )
}

export default CheckoutPage