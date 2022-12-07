import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Testimoni } from './Testimoni';
import { Teams } from './Teams';
import { Offer } from './Offer';

export const LandingPage = () => {
  return (
    <div>
      <Helmet>
        <title>Herbal.in - Home</title>
      </Helmet>
      <div className="navbar">
        <a href="#Home">Home</a>
        <a href="">Testimoni</a>
        <a href="#Offer">Offer</a>
        <a href="#contact">About Us</a>
      </div>
      <div className="main">
        <div className="left-landing">
          <div className="greeting">
            <img src="../Assets/herb.png" alt="" />
            <h1>Selamat Datang di Herbal.in !</h1>
            <p>Temukan obat - obatan herbal terbaik dari seluruh Indonesia disini</p>
          </div>
        </div>

        <div className="right-landing">
          <br />
          <br />
          <br />
          <Link to="/login">
            <button>Selengkapnya</button>
          </Link>
        </div>
      </div>
      <Testimoni />
      <Offer />
      <Teams />
      <div className="About"></div>
      <div className="footer"></div>
    </div>
  );
};
