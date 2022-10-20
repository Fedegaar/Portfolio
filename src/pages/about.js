import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'
import { ContentContainer, Description, button, h2Title, finalMessage} from './about.module.css'

const About = () => {
  return (
    <main>
      <Layout pageTitle="Federico Garcia - About me" pageContent="Soy el contenido del about">
        <div className={ContentContainer}>
          <h2 className={h2Title}>Mi mundo fue, es y será éste...</h2>
          <div class='animate__animated animate__fadeInRight'>
            <p className={Description}>
              Mi nombre es <span>Federico Eduardo Garcia</span>, tengo 28 años y soy oriundio de la ciudad de Gualeguaychu, Entre Rios. Desde hace 2 años padre orgulloso de <span>Helena</span>, quien me inspira todos los dias a superarme...
              <br></br>              
              <br></br>
              Como <span>Full Stack Web Developer</span> con inclinacion por el <span>Front-End</span> y las mobile app's, busco profesionalizarme aun mas.
              Hoy por hoy con mi stack <span>PERN</span>, (PostgreSQL, Express, React y Node) sigo buscando que tecnologias aprender, estudiando codigo, buenas practicas, manteniendome curioso y en movimiento.<br></br>
              <br></br>
      
              Soy ferviente partidario de que el desarrollo de software es un arte mas, ya que podemos dejar volar nuestra creatividad y es alli cuando logramos verdaderamente el impacto que (creo) todos buscamos...
              <br></br>              
              Con esto en mente es como espero obtener mi primer oportunidad en el mundio IT, tarea para nada facil, pero estoy convencido de que  <span>siendo perseverante, tarde o temprano, todo llega...</span> 🚀

              <br></br>
              <br></br>
              Si profundizo podria contar que desde pequeño me senti atraido por la informatica en general. Luego de eso no hubo momento en mi vida en el cual no interactue con alguna herramienta digital, ya sea por trabajo, hobbie o entretenimiento. Creo que desde siempre fui consciente de mi afinidad con la informatica.<br></br>
              <br></br>
              Si bien no pude concluir la tecnicatura en <span>Analisis de sistemas y desarrollo de Software</span> en el instituto Sedes Sapientae en mi ciudad natal cursando dos años de la misma, fue un primer acercamiento academico en el área IT, lo que me genera curiosidad especifica en la programacion, vigente hasta el dia de hoy...
              <br></br>

            </p>
          </div>
          <p className={finalMessage}>Ahora que ya sabes un poco sobre mi, te invito a ver mis proyectos...</p>
          <Link to='/projects'><a className={button} href="/projects">Proyectos</a></Link>
        </div>
      </Layout>
    </main>
  )
}

export default About
