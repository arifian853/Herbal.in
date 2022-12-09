import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import CurrencyFormat from "react-currency-format";
import { Helmet } from 'react-helmet';

import { ThemeContext } from "../context/ThemeContext";

const DetailPage = ({ products, onAddHandler }) => {

    let { id } = useParams();
    const product = products[(id-1)];
    const { product_name, product_img, product_desc, product_price, product_ctg } = product;
    const { theme } = React.useContext(ThemeContext);

    return (
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <div className="detail-page" >
                <Helmet>
                    <title>Herbal.in - {id}, {product_name}</title>
                </Helmet>
                <img className="detail-page__image" src={product_img} alt={product_name} />
                    
                <div className="specification">
                    <h1 className="detail-page__name">{product_name}</h1>
                    <p className="detail-page__price">Product Price : <CurrencyFormat value={product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} /></p>
                    <p className="detail-page__ctg">Category : {product_ctg}</p>
                    
                    <div className="detail-page__add-to-cart">
                        <button className="product-item__addToCart" onClick={() => onAddHandler(product)}>
                            <MdOutlineAddShoppingCart /> Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <div className="detail-page-addition">
                 <p className="detail-page__text">Product Description :</p>
                 <p className="detail-page__desc"> {product_desc}</p>
            </div>
            
        </div>
    )
}

DetailPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddHandler: PropTypes.func.isRequired 
}

export default DetailPage;

