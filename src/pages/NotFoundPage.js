import React from 'react';
import { Link } from 'react-router-dom';


function NotFoundPage(){
  return (
    <div className='main'>
      <div className="not-found">
        <h1>404 - Halaman tidak ditemukan</h1>
        <br />
        <hr />
        <p>Sepertinya halaman yang anda cari tidak ditemukan :) <br /> Silakan kembali ke halaman utama.</p>
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