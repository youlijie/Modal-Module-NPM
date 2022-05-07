import React from 'react'
import 'modal/dist/index.css'
import Modal from './Modal'

const App = () => {
  return (
    <Modal isModalProp = {isModalProp} setIsModalProp = {setIsModalProp} content = {content} modalStyle = {modalStyle} />
  )
}

export default App
