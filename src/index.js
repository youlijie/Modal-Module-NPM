import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import './index.css'

function Modal({ isModalProp, setIsModalProp, content, modalStyle }) {


    const handleClose = () => {
        setIsModalProp("closed")
    }

    return (
        <div className={`modal ${isModalProp}`} style={modalStyle}>
            {content ? <p>{content}</p> : <p>Add text</p> }
            <span className='close_btn'>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} />
            </span>
        </div>
    )
}

export default Modal
