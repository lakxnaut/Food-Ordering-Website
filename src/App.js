import { React, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import CartContext from './components/store/cart-context'
import CartProvider from './components/store/CartProvider'




const App = () => {

  const [isCartShown, setIsCartShown] = useState(false)

  function showCartHandler(value) {


    setIsCartShown(value)

  }
  return (
    <CartProvider>
      {isCartShown && <Cart onCartClick={showCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <Meals />
    </CartProvider>
  )
}

export default App