import * as React from 'react'
import bookstore from '../images/bookstore.png'
import { container, Title, cardImg, cardDescription } from './Card.module.css'

const CardBookstore = () => {
  return (
    <div className={container}>
      <img src={bookstore} className={cardImg}/>
      <h2 className={Title}>BookStore</h2>  
      <p className={cardDescription}>Lorem ipsum dolor sit amet, vide debet partiendo duo cu. Eu suscipit urbanitas mea, agam dolore alterum ut pro, eros aperiri accusam quo ut. Ad sed malis consetetur. 
</p>    
    </div>
  )
}

export default CardBookstore
