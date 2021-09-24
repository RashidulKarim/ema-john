import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './products.css';


const Products = (props) => {

    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
      fetch("./fakeData/products.JSON")
      .then(res => res.json())
      .then(products => setProducts(products)
      )
    },[])
    return (
        <div className='products'>
            {
                products.map(product => <Product handleAddToCart = {props.handleAddToCart} product={product} key={product.key}></Product>)
            }
        </div>
    );
};

export default Products;