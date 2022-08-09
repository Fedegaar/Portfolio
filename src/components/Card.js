import * as React from 'react'
import img from '../images/images.jpg'
import { container } from './Card.module.css'

const Card = () => {
  return (
    <div className={container}>
      <h2>The Countries Web App</h2>
      <img src={img} alt="better call saul" />
    </div>
  )
}

export default Card
