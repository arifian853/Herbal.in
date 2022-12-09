import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import HerbalinMainProd from "../components/HerbalinMainProd";
import CurrencyFormat from "react-currency-format";
import { Helmet } from 'react-helmet';
import { Footer } from "../components/Footer";

const EditProducts = ({ productItems, onAddHandler, keyword, keywordChange, selectedFilter, setSelectedFilter, loading, id, onDeleteHandler }) => {

 
    const searchProducts = productItems.filter((productItem) => productItem.product_name.toLowerCase().includes(keyword.toLowerCase())); 
    const ctgFilteredProducts = productItems.filter((productItem) => productItem.product_ctg === selectedFilter);
    const searchFilteredProducts = ctgFilteredProducts.filter((productItem) => productItem.product_name.toLowerCase().includes(keyword.toLowerCase())); 


    if(loading){
        return (
            <div className="loading">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )
    }

    return (

        <div>
            <Helmet>
                <title>Herbal.in - Produk</title>
            </Helmet>
            <div className="products-page-main">
                <HerbalinMainProd keyword={keyword} keywordChange={keywordChange} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}/>
            </div>

            <div className="product-list">
                {
                    searchFilteredProducts.length > 0 ? 
                
                    searchFilteredProducts.map((productItem) => (

                        <div className="product-item" key={productItem.id}>
                            <div className="prod-item__image">
                                <img src={productItem.product_img} alt="herbalin product" />
                            </div>

                            <p className="prod-item__ctg">{productItem.product_ctg}</p>
                            <p className="prod-item__name"><Link to={`/products/${productItem.id}`}>{productItem.product_name}</Link></p>
                            <p className="prod-item__price">Price : <CurrencyFormat value={productItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} /></p>
                            <p className="prod-item__desc">{productItem.product_desc}</p>

                            <div className="add-to-cart">
                                <button className="product-item__addToCart" onClick={() => onAddHandler(productItem)}>Add to Cart</button> <br /> <br />
                                <button className="delete-button" id={id} onClick={() => onDeleteHandler(id)}>Delete</button>
                            </div>
                        </div>
                        
                    ))

                    :

                    searchProducts.map((productItem) => (
                    
                        <div className="product-item" key={productItem.id}>
                            <div className="prod-item__image">
                                <img src={productItem.product_img} alt="herbalin product" />
                            </div>

                            <p className="prod-item__ctg">{productItem.product_ctg}</p>
                            <p className="prod-item__name"><Link to={`/products/${productItem.id}`}>{productItem.product_name}</Link></p>
                            <p className="prod-item__price">Price : <CurrencyFormat value={productItem.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} /></p>
                            <p className="prod-item__desc">{productItem.product_desc}</p>

                            <div className="add-to-cart">
                                <button className="product-item__addToCart" onClick={() => onAddHandler(productItem)}>Add to Cart</button> <br /> <br />
                                <button className="delete-button" id={id} onClick={() => onDeleteHandler(id)}>Delete</button>
                            </div>
                        </div>
                        
                    ))
                } 
                    
            </div>
            <Footer></Footer>
        </div>
    );
};

EditProducts.propTypes = {
    productItems: PropTypes.arrayOf(PropTypes.object).isRequired, 
    onAddHandler: PropTypes.func.isRequired, 
    keyword: PropTypes.string.isRequired, 
    keywordChange: PropTypes.func.isRequired, 
    selectedFilter: PropTypes.string, 
    setSelectedFilter: PropTypes.func,
}

export default EditProducts;