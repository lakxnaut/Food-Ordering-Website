import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDOM from 'react-dom'

const BackDrop = (props) => {
    return (
        <div className={classes.backdrop}> </div>
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>

        </div>
    )
}



const Modal = (props) => {

    const root = document.getElementById('overlays')
    return (
        <Fragment>
            {ReactDOM.createPortal(<BackDrop />, root)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, root)}
        </Fragment>
    )
}

export default Modal