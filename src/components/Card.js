import * as React from 'react'
import countries from '../images/the-country.png'
import { Link } from 'gatsby'
import { DiReact, DiHtml5, DiPostgresql } from 'react-icons/di'
import { SiRedux, SiExpress } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import 'animate.css';
import { container, Title, cardImg, cardDescription, iconsContainer, Redux } from './Card.module.css'


const Card = () => {
  return (
    <Link  className={container} target="none" to='https://the-countries-app.vercel.app/'>
    <div class='animate__animated animate__fadeInDown'>
      <img src={countries} className={cardImg}/>
      <h2 className={Title}>The Countries Web App</h2>  
      <p className={cardDescription}>En esta oportunidad desarrolle mi primer app completa para el bootcamp Henry y su primer etapa de labs, la cual conclui con exito.
        Se trata de una SPA en la cual podemos realizar busquedas por nombre del pais, ordenar alfabeticamente, etc. La misma cuenta con un formulario controlado en el cual podemos crear actividades turisticas para los paises en los cuales se practique dicha actividad. 
      </p>
      <hr></hr>
      <div className={iconsContainer}>
          <IoLogoJavascript size={"25px"} color={"black"}/>
          <DiHtml5 size={"30px"} color={"black"}/>
          <DiReact size={"30px"} color={"black"}/>
          <SiRedux className={Redux} size={"20px"} color={"black"} padding-top={"5px"}/>
          <SiExpress size={"30px"} color={"black"}/>
          <DiPostgresql size={"30px"} color={"black"}/>         
        </div>    
    </div>
    </Link>
  )
}

export default Card
