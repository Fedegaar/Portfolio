import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import profile from '../images/profile.jpg'
import JavaScript from '../images/js.png'
import HTML from '../images/html-5.png'
import CSS from '../images/css-3.png'
import Node from '../images/nodo-js.png'
import Reactt from '../images/React.png'
import PostgreSQL from '../images/postgre.png'
// import Express from '../images/'
import 'animate.css';
import { container, img, name, h1Name, Description, nameF, Info, button, ContentContainer, imgContainer, IMGSTACK, stackArticle, stackName, finalMessage } from './index.module.css'


const IndexPage = () => {
  return (
    <main>
      <title>Federico Garcia - Portfolio</title>
      <Layout>
        <div className={container}>
          <img className={img} class="animate__animated animate__fadeInLeft" alt="Profile pic" src={profile} />
          <div className={Info}>
            <h1 className={h1Name}>Hola! Soy&nbsp;<span className={name} class="animate__animated animate__fadeInRight">Federico Garcia</span></h1>
            <p className={Description}>Un apasionado <span className={nameF} class="animate__animated animate__fadeInUp">Full Stack Web Developer,<br /></span>  y este es mi portfolio! Te invito a recorrerlo...</p>
          </div>
        </div>
        <hr />
        <div className={ContentContainer}>
          <p className={Description}>He incorporado el stack PERN en el bootcamp de la Academia Henry, pero siempre me mantengo aprendiendo y fortaleciendo mis skills tecnicos.</p>
          <div className={imgContainer}>
            <article className={stackArticle}>
              <img src={HTML} className={IMGSTACK} alt="HTML"/>
              <p className={stackName}>HTML</p>
            </article>
            <article className={stackArticle}>
              <img src={CSS} className={IMGSTACK} alt="CSS"/>
              <p className={stackName}>CSS</p>
            </article>
            <article className={stackArticle}>
              <img src={JavaScript} className={IMGSTACK} alt="JavaScript"/>
              <p className={stackName}>JavaScript</p>
            </article>
            <article className={stackArticle}>
              <img src={Reactt} className={IMGSTACK} alt="React"/>
              <p className={stackName}>React</p>
            </article>
            <article className={stackArticle}>
              <img src={Node} className={IMGSTACK} alt="Node"/>
              <p className={stackName}>Node</p>
            </article>
            <article className={stackArticle}>
              <img src={PostgreSQL} className={IMGSTACK} alt="PostgreSQL"/>
              <p className={stackName}>PostgreSQL</p>
            </article>
          </div>
          <p className={finalMessage}>Te invito a que recorras mi portfolio...</p>
          <Link to='/about'><a className={button} href="/about">¿Quien soy?</a></Link>
        </div>
      </Layout>
    </main>
  )
}

export default IndexPage
