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
        <a href="#home">Home</a>
        <a href="#testimoni">Testimoni</a>
        <a href="#offer">Offer</a>
        <a href="#contact">About Us</a>

    </div>
      
    <div className="main" id="home">
        <div className="left-landing">
            <div className="greeting">
                <img src="../images/leaf.png" alt="Logo Herbal.in" />
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

            <br /> <br />
            <Link to="/admin-herbalin-login">
                <button>ADMIN</button>
            </Link>
        </div>
    
    </div>

    <div id="testimoni">
        <Testimoni />
    </div>

    <div id="offer">
        <Offer />
    </div>

    <div className="About" id="contact"></div>
        <Teams />
    </div>

    
  );
};
