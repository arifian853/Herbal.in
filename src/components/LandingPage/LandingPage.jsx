import React from 'react'
import { Link } from 'react-router-dom';

export const LandingPage = () => {
  return (
    <div>
        <div className="main">

            <div className="left-landing">
                <div className="greeting">
                    <img src="../Assets/herb.png" alt="" />
                    <h1>
                        Selamat Datang di Herbal.in !
                    </h1>
                    <p>Temukan obat - obatan herbal terbaik dari seluruh Indonesia disini</p>
                </div>
            </div>
            
            <div className="right-landing">
                <Link to="/login">
                <button>Lebih lengkap</button>
                </Link>
            </div>

        </div>
    </div>
  )
}
