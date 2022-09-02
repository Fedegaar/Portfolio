import * as React from 'react'
import Portfolio from '../images/Portfolio.png'
import 'animate.css';
import { DiReact, DiHtml5 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiGatsby } from 'react-icons/si'
import { container, Title, cardImg, cardDescription, iconsContainer } from './Card.module.css'


const MyPortfolio = () => {
  return (
    <div className={container}>
      <div class='animate__animated animate__fadeInDown'>
        <img src={Portfolio} className={cardImg} alt="" />
        <h2 className={Title}>Portfolio Personal</h2>
        <p className={cardDescription}>Para este proyecto decidi enfocarme en el diseño mobile first, del cual me llevo buenos conocimientos al ser un diseño adaptado para mobiles y computadoras de escritorio. Tambien implemente Gatsby, un framework de React muy divertido de usar.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <hr></hr>
        <div className={iconsContainer}>
          <IoLogoJavascript size={"25px"} color={"black"} />
          <DiHtml5 size={"30px"} color={"black"} />
          <DiReact size={"30px"} color={"black"} />
          <SiGatsby size={"25px"} color={"black"} />
        </div>
      </div>
    </div>
  )
}

export default MyPortfolio
