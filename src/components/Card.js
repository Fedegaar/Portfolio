import * as React from 'react'
import img from '../images/images.jpg'
import { container, Title } from './Card.module.css'

const Card = () => {
  return (
    <div className={container}>
      <h2 className={Title}>The Countries Web App</h2>      
    </div>
  )
}

export default Card
