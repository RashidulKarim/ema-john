import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

function App() {
  const [cart, setCart] = useState([])
  const handleAddToCart= product => {
    const newCart = [...cart];
    newCart.push(product)
    setCart(newCart)  
  }
  return (
    <div className="App">
      <Header cart={cart}></Header>
      <Shop cart = {cart} handleAddToCart= {handleAddToCart}></Shop>
    </div>
  );
}

export default App;
