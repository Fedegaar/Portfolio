import * as React from 'react'
import bookstore from '../images/bookstore.png'
import { Link } from 'gatsby'
import { DiSass } from 'react-icons/di'
import 'animate.css';
import { container, Title, cardImg, cardDescription } from './Card.module.css'

const CardBookstore = () => {
  return (
    <Link className={container} target='none' to='https://bookstore-lyart-six.vercel.app/home'>
      <div class='animate__animated animate__fadeInDown'>
        <img src={bookstore} className={cardImg}/>
        <h2 className={Title}>BookStore</h2>  
        <p className={cardDescription}>BookStore es la SPA con la cual nos consagramos con mi grupo de Henry. En la misma pusimos en practica lo aprendido y aprendimos sobre la marcha varias tecnologias, frameworks y librerias de las cuales no teniamos conocimiento alguno.
        Una experiencia muy rica en la cual junto a mi equipo fortalecimos un vinculo vigente hasta el dia de hoy.. </p>    
        <hr></hr>
        <div>
          <DiSass size={"30px"}/>
        </div>
      </div>
    </Link>
  )
}

export default CardBookstore
