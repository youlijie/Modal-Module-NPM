import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function Modal({ isModalProp, content, modalStyle }) {
    const [isModal, setIsModal] = useState("closed")

    useEffect(() => { 
        setIsModal(isModalProp)
    }, [isModalProp])

    const handleClose = () => {
        setIsModal("closed")
    }

    return (
        <div className={`modal ${isModal}`} style={modalStyle}>
            {content ? <p>{content}</p> : <p>Add text</p> }
            <span className='close_btn'>
                <FontAwesomeIcon icon={faTimes} onClick={handleClose} />
            </span>
        </div>
    )
}

export default Modal
