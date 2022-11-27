import React from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const LandingPage = () => {
  return (
    <div>
         <Helmet>
            <title>Herbal.in - Home</title>
        </Helmet>
        <div className="main">
       
            <div className="left-landing">
                <div className="greeting">
                    <img src="../images/leaf.png" alt="" />
                    <h1>
                        Selamat Datang di Herbal.in !
                    </h1>
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
    </div>
  )
}
