import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useUserAuth } from "../context/UserAuthContext";


const Navigation = ({ cartItems }) => {

        const { user, logOut } = useUserAuth();
            const handleLogout = async () => {
        try {
          await logOut();
        } catch (err){
                console.log(err.message)
            }
        }

    const [ activeTab, setActiveTab ] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === '/home'){
            setActiveTab('Home');
        } else if(location.pathname === '/articles'){
            setActiveTab('Articles');
        } else if(location.pathname === '/products'){
            setActiveTab('Products');
        } else if(location.pathname === '/cart'){
            setActiveTab('Cart');
        } else {
            setActiveTab('');
        }
    }, [location]);

    return (
        <nav className="navigation">
            <ul>
                <Link to="/home">
                <li className={`${activeTab === 'Home' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Home")}>Home
                </li>
                </Link>

                <Link to="/articles">
                <li className={`${activeTab === 'Articles' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Articles")}>Articles
                </li>
                </Link>

                <Link to="/products">
                <li className={`${activeTab === 'Products' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Products")}>Products
                </li>
                </Link>
               
                <Link to="/cart">
                <li className={`${activeTab === 'Cart' ? 'active-tab' : ''}`} onClick={() => setActiveTab("Cart")}>Cart <span className='badge  badge-warning' id='lblCartCount'>{cartItems.length}</span>
                </li>
                </Link>

                <li id="nav_username"><button onClick={handleLogout}>{user && user.email}<FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
}

export default Navigation;


