import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const TermsAndServices = () => {
  return (
    <div className='main'>
      <Helmet>
            <title>Herbal.in - Terms & Service</title>
        </Helmet>
      <div className="terms">
        <h1>404 NOT FOUND</h1>
        <hr />
        <p>There's nothing here yet. Coming Soon !</p>
        <hr />
        <br />
        <Link to="/">
          <button className='btn-login-register'>Back to Home</button>
        </Link>
      </div>
    </div>
  )
}
