import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <div className='main'>
      <Helmet>
        <title>Herbal.in - Page Not Found</title>
      </Helmet>
      <div className="not-found">
        <h1>404 - Halaman tidak ditemukan</h1>
        <br />
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
export default NotFoundPage;