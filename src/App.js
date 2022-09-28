import { React, Fragment, useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'




const App = () => {

  const [isCartShown, setIsCartShown] = useState(false)

  function showCartHandler(value) {


    setIsCartShown(value)

  }
  return (
    <Fragment>
      {isCartShown && <Cart onCartClick={showCartHandler} />}
      <Header onCartClick={showCartHandler} />
      <Meals />
    </Fragment>
  )
}

export default App