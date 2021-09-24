import React from 'react';
import './cart.css';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const reducer = (previous, product) => previous + product.price;
    const productPrice = cart.reduce( reducer,0).toFixed(2)
    const shipping = cart.reduce((previous, product) => previous + product.shipping ,0).toFixed(2)
    const totalBeforeTax = (parseFloat(productPrice) + parseFloat(shipping)).toFixed(2);
    const estimatedTax = (totalBeforeTax * .10).toFixed(2);
    const total = (parseFloat(totalBeforeTax) + parseFloat(estimatedTax)).toFixed(2);
    return (
        <div className='cart'>
            <div className="cart-header">
                <h3>Order Summary</h3>
                <h4>Items Ordered: {props.cart.length?props.cart.length: 0}</h4>
            </div>
            <div className="product-cost">
            <p><small>Product Price: </small> <span className='right'>{productPrice>0? productPrice: 0.}</span></p>
            <p><small>Shipping & Handling: </small> <span className='right'>{shipping>0? shipping: 0}</span></p>
            <p><small>Total before tax: </small> <span className='right'>{totalBeforeTax>0? totalBeforeTax: 0}</span></p>
            <p><small>Estimated tax: </small> <span className='right'>{estimatedTax>0? estimatedTax: 0}</span></p>
            <h3 className='total-price'><h3 className='total-order-text'>Order Total: </h3><span className='right'>${total>0? total: 0}</span></h3>
            </div>
            <div className="center">
            <button  className='regular-btn'><a href="/review" className='remove-decoration'>Review your Order</a></button>
            </div>
        </div>
    );
};

export default Cart;