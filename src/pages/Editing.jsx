import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Editing = () => {
  return (
    <div className='editing'>
        <Helmet>
            <title>Herbal.in - Admin Edit Page</title>
        </Helmet>
        <div className="edit-container">
            {/* <Link to="/admin-herbalin-produk-edit"><button>Add/Delete Products</button></Link> */}
            <Link to="/admin-herbalin-artikel-edit"><button>Add/Delete Articles</button></Link>
        </div>
    </div>
  )
}
