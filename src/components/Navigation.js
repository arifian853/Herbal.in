import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

function Navigation({ logout, name }){
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li id="nav_username"><button onClick={logout}>{name} <FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    logout: PropTypes.func.isRequired,
}

export default Navigation;