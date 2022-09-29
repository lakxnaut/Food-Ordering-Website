import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../store/cart-context'

import React, { useContext, useDebugValue } from 'react'

const MealItemForm = (props) => {

    const cartctx = useContext(CartContext);


    function addCartHandler(e) {

        e.preventDefault();
        // console.log(props.item);
        cartctx.addItem(props.item)
        console.log(cartctx.items);


    }
    return (
        <form className={classes.form}>
            <Input
                label='Amount'
                input={{
                    id: props.id,
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button onClick={addCartHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm