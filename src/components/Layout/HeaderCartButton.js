import React, { useContext, useState, useEffect } from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon'
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {

    const cartctx = useContext(CartContext);
    const cartValue = cartctx.items.reduce((acc, curr) => {
        return acc + curr.price

    }, 0)

    const [cartNumber, setCartNumber] = useState(0);

    useEffect(() => {
        setCartNumber(cartctx.items.length)
    }, [cartNumber, cartctx.items])

    // console.log(cartValue);

    return (
        <button className={classes.button} onClick={() => props.onCartClick(true)}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{cartNumber}</span>
        </button>
    )
}

export default HeaderCartButton