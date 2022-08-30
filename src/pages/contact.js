import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { SiGmail } from 'react-icons/si'
import { container, h2Title, iconsContainer, icon, Parrafos, Parrafo, iconEmail } from './contact.module.css'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <main>
      <Layout pageTitle="Federico Garcia - Contacto" pageContent="Soy el contenido">
        <div className={container}>
            <h2 className={h2Title}>Pongamonos en contacto!</h2>
            <p className={Parrafos}>Estoy en busqueda de una oportunidad en el mundo IT, de nuevos desafios que afrontar.
            Si te interesó lo que viste, tenes dudas o simplemente queres contactarte conmigo, podes hacerlo mediante...</p>
            
            <div className={iconsContainer}>              
              <Link target='none' className={icon} to='https://www.linkedin.com/in/gaarfede/'><BsLinkedin size={"30px"}/><span>LinkedIn</span></Link>
              <Link target='none' className={icon} to='https://github.com/Fedegaar'><BsGithub size={"30px"}/><span>GitHub</span></Link>
              <Link target='none' className={iconEmail} to='mailto:fedegaar@gmail.com'><SiGmail size={"30px"}/><span>E-Mail</span></Link>
              <Link target='none' className={icon} to='https://drive.google.com/file/d/1PLsMtNsiyeYJ3xr7g-XawFuh0tg0mkAA/view?usp=sharing'><HiDocumentText size={"30px"}/><span>CV</span></Link>
            
            </div>
            <hr></hr>
            <ContactForm/>
        </div>
      </Layout>
    </main>
  )
}

export default Contact