import * as React from 'react'
import countries from '../images/the-country.png'
import { container, Title, cardImg, cardDescription } from './Card.module.css'


const Card = () => {
  return (
    <div className={container}>
      <img src={countries} className={cardImg}/>
      <h2 className={Title}>The Countries Web App</h2>  
      <p className={cardDescription}>En esta oportunidad desarrolle mi primer app completa para el bootcamp Henry y su primer etapa de labs, la cual conclui con exito.
      Se trata de una SPA en la cual podemos realizar busquedas por nombre del pais, ordenar alfabeticamente, etc. La misma cuenta con un formulario controlado en el cual podemos crear actividades turisticas para los paises en los cuales se practique dicha actividad. 
</p>    
    </div>
  )
}

export default Card
