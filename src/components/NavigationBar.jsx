import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { useUserAuth } from '../context/UserAuthContext';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';
import { ThemeContext } from '../context/ThemeContext';

const Navigation = ({ cartItems }) => {
  const { user, logOut } = useUserAuth();
  const handleLogout = async () => {
    try {
      await logOut();
    } catch (err) {
      console.log(err.message);
    }
  };

  const [activeTab, setActiveTab] = useState('Home');
  const location = useLocation();

  const { toggle, darkMode } = React.useContext(ThemeContext);

  useEffect(() => {
    if (location.pathname === '/home') {
      setActiveTab('Home');
    } else if (location.pathname === '/articles') {
      setActiveTab('Articles');
    } else if (location.pathname === '/products') {
      setActiveTab('Products');
    } else if (location.pathname === '/cart') {
      setActiveTab('Cart');
    } else {
      setActiveTab('');
    }
  }, [location]);

  return (
    <nav className="navigation">
      <p>Herbal.In</p>

      <div className="navigation-bar">
        <Link to="/home">
          <p className={`${activeTab === 'Home' ? 'active-tab' : ''}`} onClick={() => setActiveTab('Home')}>
            Home
          </p>
        </Link>

        <Link to="/articles">
          <p className={`${activeTab === 'Articles' ? 'active-tab' : ''}`} onClick={() => setActiveTab('Articles')}>
            Articles
          </p>
        </Link>

        <Link to="/products">
          <p className={`${activeTab === 'Products' ? 'active-tab' : ''}`} onClick={() => setActiveTab('Products')}>
            Products
          </p>
        </Link>

        <Link to="/cart">
          <p className={`${activeTab === 'Cart' ? 'active-tab' : ''}`} onClick={() => setActiveTab('Cart')}>
            Cart{' '}
            <span className="badge  badge-warning" id="lblCartCount">
              {cartItems.length}
            </span>
          </p>
        </Link>

        <button className="toggle-theme" onClick={toggle}>
          {' '}
          {!darkMode ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>

      <p id="nav_username">
        <button onClick={handleLogout}>
          {user && user.email}
          <FiLogOut />
        </button>
      </p>
    </nav>
  );
};

Navigation.propTypes = {
  logout: PropTypes.func,
};

export default Navigation;
