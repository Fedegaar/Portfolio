import React from 'react'
import { container, Parrafos } from './Message.module.css'

const Message = () => {
  return (
    <div >
        <div className={container}>
            <p className={Parrafos}>Datos enviados.</p>
        </div>
    </div>
  )
}

export default Message
