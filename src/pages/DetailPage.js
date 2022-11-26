import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { MdOutlineAddShoppingCart } from "react-icons/md";


function DetailPage({ products, onAddHandler }) {

    let { id } = useParams();
    const product = products[(id-1)];

    const { product_name, product_img, product_desc, product_price, product_ctg } = product;

    return (
        <>
            <div className="detail-page">
                <img className="detail-page__image" src={product_img} alt={product_name} />
                    
                <div className="specification">
                    <h1 className="detail-page__name">{product_name}</h1>
                    <p className="detail-page__price">Product Price : {product_price}</p>
                    <p className="detail-page__ctg">Category : {product_ctg}</p>
                    
                    <div className="add-to-cart">
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
            
        </>
    )
}

DetailPage.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddHandler: PropTypes.func.isRequired 
}

export default DetailPage;

