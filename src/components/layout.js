import * as React from 'react'
import { Link } from 'gatsby'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { HiDocumentText } from 'react-icons/hi'
import { SiGmail } from 'react-icons/si'
import {container, navLink, navItems, navLinkText, Footer, iconsContainer, icon } from './layout.module.css'

const Layout = ({pageTitle, children}) => {
  return (
    <>
    <main className={container}>
      <title >{pageTitle}</title>
      <nav>
        <ul className={navLink}>
            <li className={navItems}><Link to="/" className={navLinkText}>Home</Link></li>       
            <li className={navItems}><Link to="/about" className={navLinkText}>¿Quien soy?</Link></li>        
            <li className={navItems}><Link to="/projects" className={navLinkText}>Proyectos</Link></li>
            <li className={navItems}><Link to="/contact" className={navLinkText}>Contacto</Link></li>
        </ul>
      </nav>      
    </main>
    {children}
    <div className={Footer}>
    <div className={iconsContainer}>              
              <Link target='none' className={icon} to='https://www.linkedin.com/in/gaarfede/'><BsLinkedin size={"23px"}/></Link>
              <Link target='none' className={icon} to='https://github.com/Fedegaar'><BsGithub size={"23px"}/></Link>
              <Link target='none' className={icon} to='mailto:fedegaar@gmail.com'><SiGmail size={"23px"}/></Link>
              <Link target='none' className={icon} to='https://drive.google.com/file/d/1PLsMtNsiyeYJ3xr7g-XawFuh0tg0mkAA/view?usp=sharing'><HiDocumentText size={"23px"}/></Link>            
            </div>
    </div>
    </>
  )
}

export default Layout
