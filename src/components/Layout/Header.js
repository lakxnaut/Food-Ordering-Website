import { React, Fragment } from 'react'
import classes from './Header.module.css'
import HeaderImg from '../../assets/meals.jpg'

const Header = () => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React</h1>
                <button>Cart</button>
            </header>
            <div className={classes['main-image']}>

                <img src={HeaderImg} alt='ds' />
            </div>


        </Fragment>
    )
}

export default Header