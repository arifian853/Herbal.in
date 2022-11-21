import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const TermsAndServices = () => {
  return (
    <div className='main'>
      <Helmet>
            <title>Herbal.in - Syarat dan Ketentuan</title>
        </Helmet>
      <div className="terms">
        <h1>Syarat dan Ketentuan</h1>
        <hr />
        <p>Belum ada :)</p>
        <hr />
        <br />
        <Link to="/">
          <button className='btn-login-register'>Kembali ke halaman utama</button>
        </Link>
      </div>
    </div>
  )
}
