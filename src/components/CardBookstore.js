import * as React from 'react'
import bookstore from '../images/bookstore.png'
import { Link } from 'gatsby'
import { DiLess, DiReact, DiJavascript, DiHtml5, DiPostgresql } from 'react-icons/di'
import { SiRedux, SiExpress } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import 'animate.css';
import { container, Title, cardImg, cardDescription, iconsContainer, Redux } from './Card.module.css'

const CardBookstore = () => {
  return (
    <Link className={container} target='none' to='https://bookstore-lyart-six.vercel.app/home'>
      <div class='animate__animated animate__fadeInDown'>
        <img src={bookstore} className={cardImg}/>
        <h2 className={Title}>BookStore</h2>  
        <p className={cardDescription}>BookStore es la SPA con la cual nos consagramos con mis compañeros de Henry. En la misma pusimos en practica lo aprendido y aprendimos sobre la marcha varias tecnologias, frameworks y librerias de las cuales no teniamos conocimiento alguno.
        Una experiencia muy rica en la cual junto a mi equipo fortalecimos un vinculo vigente hasta el dia de hoy.. </p>    
        <br></br>
        <hr></hr>
        <div className={iconsContainer}>
          <IoLogoJavascript size={"25px"} color={"black"}/>
          <DiHtml5 size={"30px"} color={"black"}/>
          <DiLess size={"30px"} color={"black"}/>
          <DiReact size={"30px"} color={"black"}/>
          <SiRedux className={Redux} size={"20px"} color={"black"} padding-top={"5px"}/>
          <SiExpress size={"30px"} color={"black"}/>
          <DiPostgresql size={"30px"} color={"black"}/>         
        </div>
      </div>
    </Link>
  )
}

export default CardBookstore
