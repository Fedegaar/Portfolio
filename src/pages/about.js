import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { ContentContainer, Description, button } from './about.module.css'

const About = () => {
  return (
    <main>        
        <Layout pageTitle="Federico Garcia - About me" pageContent="Soy el contenido del about">
          <div className={ContentContainer}>
            <h2>Mi mundo fue, es y será éste...</h2>
            <p>Desde muy chico tuve la suerte de sentarme en una PC, desde ahi quede encantado y ya nunca me pude alejar de este mundillo.</p>
            <p className={Description}>Ahora que ya sabes un poco sobre mi, te invito a ver mis proyectos...</p>
            <Link to='/projects'><a className={button} href="/projects">Go to projects</a></Link>
          </div>
        </Layout>        
    </main>
  )
}

export default About
