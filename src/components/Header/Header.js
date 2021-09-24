import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = (props) => {
    
    return (
        <div className='header'>
           <div className='header-logo'>
            <img className='logo' src={logo} alt="" />
            </div>
                <nav className='nav-section'>
                    <ul>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/review">Order Review</a></li>
                        <li><a href="/inventory">Manage Inventory</a></li>
                    </ul>
                </nav>
                <div className='search-section'>
                    <input className='search-field' type="text" placeholder='Type here to search'/>
                    <button className='search-btn'>Search</button>
                    <span><FontAwesomeIcon className='cart-icon' icon={faShoppingCart} /> <span className='cart-count'>{props.cart.length?props.cart.length: 0}</span></span>
                </div>
        </div>
    );
};

export default Header;