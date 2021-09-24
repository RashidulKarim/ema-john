import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './product.css';

const Product = (props) => {
    const {name, img, price, seller, stock, star} = props.product
    
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-description'>
                <h3 className='product-name'>{name}</h3>
                <h4>By: {seller}</h4>
                <h3>$ {price}</h3>
                <h5>Only {stock} left in stock- order soon</h5>
                <button className='regular-btn' onClick = {()=> props.handleAddToCart(props.product)}><FontAwesomeIcon className='btn-cart-icon' icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;