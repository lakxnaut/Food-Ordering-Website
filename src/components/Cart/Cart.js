import classes from './Cart.module.css'

import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartContext from '../store/cart-context'

const Cart = (props) => {
    const items = [{ id: 1, name: 'Rajma', price: 60 }]



    const crtctx = useContext(CartContext)


    const cartValue = crtctx.items.reduce((acc, curr) => {
        return acc + curr.price

    }, 0)
    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {
                    crtctx.items.map(item => <li className={classes.li}>
                        <div>
                            {item.name}
                            <div>₹{item.price}</div>
                        </div>
                        <div className={` ${classes.cartbuttonBox}`}>
                            <button className={classes['button--minus']} >-</button>
                            <button className={classes['button--minus']}>+</button>

                        </div>
                    </li>)
                }


            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{cartValue}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={() => { props.onCartClick(false) }} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>


        </Modal>
    )
}

export default Cart