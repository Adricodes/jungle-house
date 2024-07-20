        function Cart() {
    const monsteraPrice = 8
    const ivyPrice = 10
    const flowerPrice = 15
    return (<div>
        <h2>Cart</h2>
        <ul>
        <li>Montsera: {monsteraPrice}€</li>
         <li>Ivy: {ivyPrice}€</li>
         <li>Flowers: {flowerPrice}€</li>
        </ul>
          Total: {monsteraPrice + ivyPrice + flowerPrice }€
          </div>)
}

import { useState } from 'react'
const [cart, updateCart] = useState(0)

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)

    return (
        <div className='jh-cart'>
            <h2>Cart</h2>
            <div>
                Monstera: {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Add
                </button>
            </div>
            <h3>Total: {monsteraPrice * cart}€</h3>
        </div>
    )
}

const [isOpen, setIsOpen] = useState(true)

function Cart() {
    const monsteraPrice = 8
    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    alert(`I have ${total}€ to pay 💸`)
    return isOpen ? (
        <div className='jh-cart'>
            <button onClick={() => setIsOpen(false)}>Close</button>
            <h2>Cart</h2>
            <div>
                Monstera: {monsteraPrice}€
                <button onClick={() => updateCart(cart + 1)}>
                    Add
                </button>
                </div>
                <h3>Total: {monsteraPrice * cart}€</h3>
            </div>
) : (
        <button onClick={() => setIsOpen(true)}>Open Cart</button>
    )
}

<Cart cart={cart} updateCart={updateCart} />

useEffect(() => {
  alert(`I have ${total}€ to pay 💸`)
})

  export default Cart