import classes from './Cart.module.css'

import React from 'react'
import Modal from '../UI/Modal'

const Cart = () => {
    const items = [{ id: 1, name: 'Rajma', price: 60 }]

    const cartItems = (<ul className={classes['cart-items']}>{[{ id: 1, name: 'Rajma', price: 60 }].map(item => <li>    {item.name}</li>)}</ul>)
    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {
                    items.map(item => <li> {item.name}</li>)
                }
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>120</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>


        </Modal>
    )
}

export default Cart