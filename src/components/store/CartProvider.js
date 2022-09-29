import CartContext from "./cart-context";

import React, { useState } from 'react'

const CartProvider = (props) => {

    const [myitem, setMyItems] = useState([])

    function addToCartHandler(item) {
        setMyItems([...myitem, item])
        console.log('hello from cntx', cartContext.items);





    }

    function removeFromCardHandler(id) {

    }

    const cartContext = {
        items: myitem,
        totalAmount: 0,
        addItem: addToCartHandler,
        removeItem: removeFromCardHandler,

    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}

        </CartContext.Provider>
    )
}

export default CartProvider