import React from "react";
import PropTypes from "prop-types";

function HerbalinItemImage({product_img}){
    return (
        <div className="prod-item__image">
            <img src={product_img} alt="herbalin product" />
        </div>
    )
}

HerbalinItemImage.propTypes = {
    product_img: PropTypes.string.isRequired,
}

export default HerbalinItemImage;