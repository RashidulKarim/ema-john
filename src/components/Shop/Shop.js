import React from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './shop.css';

const Shop = (props) => {
    
    return (
        <div className='shop'>
           <Products handleAddToCart = {props.handleAddToCart}></Products>
           <Cart cart={props.cart}></Cart>
        </div>
    );
};

export default Shop;