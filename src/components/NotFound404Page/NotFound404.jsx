import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const NotFound404 = () => {
  return (
    <div className='main'>
      <Helmet>
        <title>Herbal.in - Page Not Found</title>
      </Helmet>
      <div className="terms">
        <h1>404 - Halaman tidak ditemukan</h1>
        <hr />
        <p>Sepertinya halaman yang anda cari tidak ditemukan :) Silakan kembali ke halaman utama.</p>
        <hr />
        <br />
        <Link to="/">
          <button className='btn-login-register'>Kembali ke Halaman Utama</button>
        </Link>
      </div>
    </div>
  )
}
