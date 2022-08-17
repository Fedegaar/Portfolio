import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import SedesIMG from '../images/Sedes.png'
import { ContentContainer, Description, button, h2Title, Sedes, SedesP } from './about.module.css'

const About = () => {
  return (
    <main>        
        <Layout pageTitle="Federico Garcia - About me" pageContent="Soy el contenido del about">
          <div className={ContentContainer}>
            <h2 className={h2Title}>Mi mundo fue, es y será éste...</h2>
            <p className={Description}>Si profundizo podria arrancar diciendo que desde pequeño me senti atraido por la informatica en general. Luego de eso no hubo momento en mi vida en el cual no interactue con alguna herramienta digital, ya sea por trabajo, hobbie o entretenimiento. Digamos que siempre tuve una facilidad consciente para desenvolverme en informatica<br></br>
            <br></br>
            Si bien tuve una iniciativa academica cursando dos años de la tecnicatura en <span>Analisis de sistemas y desarrollo de Software</span> en el instituto Sedes Sapientae en mi ciudad natal, no pude culminar mis estudios por problemas personales.
            <br></br>

            <br></br>
            Como <span>Full Stack Web Developer</span> busco profesionalizarme aun mas.
            Hor por hoy con mi stack PERN, (PostgreSQL, Express, React y Node) sigo buscando que tecnologias aprender, estudiando codigo, buenas practicas, manteniendome curioso y en movimiento.<br></br>
            <br></br>
            Tengo inclinaciones por las mobile app's, asi como tambien por el Front-End.<br></br>
            Soy ferviente partidario de que el desarrollo de software es un arte mas, ya que podemos dejar volar nuestra creatividad y es alli cuando logramos verdaderamente el impacto que (creo) todos buscamos..
            De esta manera espero obtener mi primer empleo en IT, se que no va a ser facil, pero estoy convencido de lograrlo. 🚀
            </p>
            <p className={Description}>Ahora que ya sabes un poco sobre mi, te invito a ver mis proyectos...</p>
            <Link to='/projects'><a className={button} href="/projects">Go to projects</a></Link>
          </div>
        </Layout>        
    </main>
  )
}

export default About
