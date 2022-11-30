import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { useUserAuth } from "../context/UserAuthContext";

const Navigation = ({ logout, cartItems }) => {
    const { user } = useUserAuth();
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/cart">Cart <span class='badge badge-warning' id='lblCartCount'>{cartItems.length}</span> </Link></li>
                <li id="nav_username"><button onClick={logout}> {user && user.email} <FiLogOut /></button></li>
            </ul>
        </nav>
    )
}

export default Navigation;