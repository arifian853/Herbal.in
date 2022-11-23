import React from "react";
// import HerbalinOffers from "../components/HerbalinOffers";
import ProductList from "../components/ProductList";
import { getProdOffers } from "../utils/localdata_prodOffers";
import { ImPriceTags } from 'react-icons/im';
import { MdHealthAndSafety } from 'react-icons/md';
import { BsBagCheckFill } from 'react-icons/bs';


function HomePage() {
  const products = getProdOffers();

  return (
    <div className="home-page">
      <div className="home-page__banner">
          <h1>Herbal.in</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet, tempora?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, molestias.</p>
          <p>Dengan solusi Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptate vero fugiat quas voluptatibus. Assumenda minus inventore expedita quia deleniti. Quibusdam incidunt tenetur non sed?</p>

          <div className="home-page__benefit">
            <ul>
              <li><ImPriceTags /> Special Price</li>
              <li><MdHealthAndSafety /> 100% Natural</li>
              <li>< BsBagCheckFill /> Fast and Easy</li>
            </ul>
          </div>
      </div>

      <h2 className="product-offers__title">Special Offers</h2>
      <ProductList products={products}/>
      </div>
  )
  
}




export default HomePage;
