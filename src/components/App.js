
import Banner from './Banner'
import Cart from './Cart'
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";

function App () {
	return (
		<div>
			<Banner />
			<Cart />
		</div>
	)
}

<form onSubmit={handleSubmit}>
    <input type='text' name='my_input' defaultValue='Type your text' />
    <button type='submit'>Enter</button>
</form>

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function Cart({ cart, updateCart }) {
    const monsteraPrice = 8
    const [isOpen, setIsOpen] = useState(true)

    return isOpen ? (
        <div className='jh-cart'>
            <button
                className='jh-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Close
            </button>
            <h2>Cart</h2>
            <h3>Total: {monsteraPrice * cart}€</h3>
            <button onClick={() => updateCart(0)}>Clear cart</button>
        </div>
) : (
        <div className='jh-cart-closed'>
            <button
                className='jh-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Open cart
            </button>
        </div>
    )
}

function App() {
    const [cart, updateCart] = useState([])
    
    return (
        <div>
            <Banner>
                <img src={logo} alt='Jungle House' className='jh-logo' />
                <h1 className='jh-title'>Jungle House</h1>
            </Banner>
            <div className='jh-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App

export default Cart

