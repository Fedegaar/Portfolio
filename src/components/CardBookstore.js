import * as React from 'react'
import bookstore from '../images/bookstore.png'
import { container, Title, cardImg, cardDescription } from './Card.module.css'

const CardBookstore = () => {
  return (
    <div className={container}>
      <img src={bookstore} className={cardImg}/>
      <h2 className={Title}>BookStore</h2>  
      <p className={cardDescription}>BookStore es la SPA con la cual nos consagramos con mi grupo de Henry. En la misma pusimos en practica lo aprendido y aprendimos sobre la marcha varias tecnologias, frameworks y librerias de las cuales no teniamos conocimiento alguno.
      Una experiencia muy rica en la cual junto a mi equipo fortalecimos un vinculo vigente hasta el dia de hoy.. 
</p>    
    </div>
  )
}

export default CardBookstore
