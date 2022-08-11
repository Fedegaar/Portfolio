import * as React from 'react'
import countries from '../images/the-country.png'
import { container, Title, cardImg, cardDescription } from './Card.module.css'


const Card = () => {
  return (
    <div className={container}>
      <img src={countries} className={cardImg}/>
      <h2 className={Title}>The Countries Web App</h2>  
      <p className={cardDescription}>Lorem ipsum dolor sit amet, vide debet partiendo duo cu. Eu suscipit urbanitas mea, agam dolore alterum ut pro, eros aperiri accusam quo ut. Ad sed malis consetetur. 
</p>    
    </div>
  )
}

export default Card
