import * as React from 'react'
import countries from '../images/the-country.png'
import 'animate.css';
import { container, Title, cardImg, cardDescription } from './Card.module.css'


const IncomingProject = () => {
  return (
    <div className={container}>
      <div class='animate__animated animate__fadeInDown'>
        <img src={countries} className={cardImg} alt=""/>
        <h2 className={Title}>Incoming Project</h2>  
        <p className={cardDescription}>En esta instancia y mas que nunca es necesario el estar en movimiento. Por eso es que en este momento me encuentro realizando un proyecto para reforzar/afianzar conocimientos y tecnologias nuevas en mi stack...
        </p>    
      </div>
    </div>
  )
}

export default IncomingProject
