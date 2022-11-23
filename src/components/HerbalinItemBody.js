import React from "react";
import PropTypes from "prop-types";

function HerbalinItemBody({product_name, product_desc, product_price}){
    return (
        <div className="prod-item__body">
            <p className="prod-item__name">{product_name}</p>
            <p className="prod-item__price">Price : Rp. {product_price}</p>
            <p className="prod-item__desc">{product_desc}</p>
        </div>
    )
}

HerbalinItemBody.propTypes = {
    product_name: PropTypes.string.isRequired,
    product_desc: PropTypes.string.isRequired,
    product_price: PropTypes.number.isRequired
}

export default HerbalinItemBody;