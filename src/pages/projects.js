import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Card from '../components/Card'
import CardBookstore from '../components/CardBookstore'
import { container, cardContainer, h1Title, button, Description, buttonContact } from './projects.module.css'
import IncomingProject from '../components/IncomingProject'

const Projects = () => {
  return (
    <main>
      <title>Federico Garcia - Projects</title>
      <Layout>   
        <div className={container}>     
            <h1 className={h1Title}>Proyectos</h1>
            <div className={cardContainer}>
                <Card/>
                <CardBookstore/>
                <IncomingProject/>
            </div>
            <div className={buttonContact}>
              <p className={Description}>Si despues de ver mis proyectos, te interesa contactarme hace click en el siguiente boton!</p>
              <Link to='/contact'><a className={button} href="/contact">Contacto</a></Link>
            </div>
        </div>
      </Layout>
    </main>
  )
}

export default Projects