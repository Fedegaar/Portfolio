import * as React from 'react'
import { Link } from 'gatsby'
import {container, navLink, navItems, navLinkText, Footer, FooterText} from './layout.module.css'

const Layout = ({pageTitle, children}) => {
  return (
    <>
    <main className={container}>
      <title >{pageTitle}</title>
      <nav>
        <ul className={navLink}>
            <li className={navItems}><Link to="/" className={navLinkText}>Home</Link></li>       
            <li className={navItems}><Link to="/about" className={navLinkText}>About</Link></li>        
            <li className={navItems}><Link to="/projects" className={navLinkText}>Projects</Link></li>
            {/* <li className={navItems}><Link to="/contact" className={navLinkText}>Contact</Link></li> */}
        </ul>
      </nav>      
    </main>
    {children}
    <div className={Footer}>
      <p className={FooterText}>Federico Garcia. © Todos los derechos Reservados 2022.</p>
    </div>
    </>
  )
}

export default Layout
