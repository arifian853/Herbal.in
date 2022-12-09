import React from "react";
import PropTypes from "prop-types";
import { getProdOffers } from "../utils/localdata_prodOffers";
import { ImPriceTags } from 'react-icons/im';
import { MdHealthAndSafety } from 'react-icons/md';
import { BsBagCheckFill } from 'react-icons/bs';
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { Footer } from "../components/Footer";

import { ThemeContext } from "../context/ThemeContext";

const HomePage = ({ onAddHandler }) => {
  const productsOffer = getProdOffers();

  const { theme } = React.useContext(ThemeContext);

  return (
    <div className="home-page" style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
      <div className="home-page__banner" >
        <h1>Herbal.in</h1>
        <p>Herbal medicines are natural botanical products that derived from plants. Herbal medicines can help treat a variety of conditions, and in some cases, may have fewer side effects than some conventional medications. They are sold as tablets, capsules, powders, teas, extracts, and fresh or dried plants. </p>
        <p>Are you ready to see how herbal medicines can work for you ? <span className="home-page__banner-italicText">Grab it now ! </span><span className="home-page__banner-boldText">Because your health matters.</span></p>

        <div className="home-page__benefit">
          <ul>
            <li><ImPriceTags /> Special Price</li>
            <li><MdHealthAndSafety /> 100% Natural</li>
            <li>< BsBagCheckFill /> Fast and Easy</li>
          </ul>
        </div>
      </div>

      <h2 className="product-offers__title">Special Offers</h2>
      <hr className="product-offers__line" />

      <div className="product-list">
      {
        productsOffer.map((productOffer) => (
          <div className="product-item" key={productOffer.id}>
            <div className="prod-item__image">
              <img src={productOffer.product_img} alt="herbalin product" />
            </div>

            <p className="prod-item__ctg">{productOffer.product_ctg}</p>
            <p className="prod-item__name"><Link to={`/products/${productOffer.id}`}>{productOffer.product_name}</Link></p>
            <p className="prod-item__price">Price :  <CurrencyFormat value={productOffer.product_price} displayType={'text'} thousandSeparator={true} prefix={' Rp. '} /></p>
            <p className="prod-item__desc">{productOffer.product_desc}</p>

            <div className="add-to-cart">
              <button className="product-item__addToCart" onClick={() => onAddHandler(productOffer)}>Add to Cart</button>
            </div>
          </div>

        ))
      }
      </div>
      <Footer></Footer>
    </div>
  )
}

HomePage.propTypes = {
  onAddHandler: PropTypes.func.isRequired
}

export default HomePage;
