import * as React from 'react'
import countries from '../images/the-country.png'
import { Link } from 'gatsby'
import 'animate.css';
import { container, Title, cardImg, cardDescription } from './Card.module.css'


const Card = () => {
  return (
    <Link  className={container} target="none" to='https://the-countries-app.vercel.app/'>
    <div class='animate__animated animate__fadeInDown'>
      <img src={countries} className={cardImg}/>
      <h2 className={Title}>The Countries Web App</h2>  
      <p className={cardDescription}>En esta oportunidad desarrolle mi primer app completa para el bootcamp Henry y su primer etapa de labs, la cual conclui con exito.
        Se trata de una SPA en la cual podemos realizar busquedas por nombre del pais, ordenar alfabeticamente, etc. La misma cuenta con un formulario controlado en el cual podemos crear actividades turisticas para los paises en los cuales se practique dicha actividad. 
      </p>    
    </div>
    </Link>
  )
}

export default Card
