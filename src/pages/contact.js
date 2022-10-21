import * as React from 'react'
import Layout from '../components/layout'
import { container, h2Title, Parrafos, } from './contact.module.css'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  return (
    <main>
      <Layout pageTitle="Federico Garcia - Contacto" pageContent="Soy el contenido">
        <div className={container}>
            <h2 className={h2Title}>Pongamonos en contacto!</h2>
            <p className={Parrafos}>Estoy en busqueda de una oportunidad en el mundo IT, de nuevos desafios que afrontar.
            Si te interesó lo que viste, tenes dudas o simplemente queres contactarte conmigo, podes hacerlo por ésta via. Desde ya muchas gracias!</p>
            <ContactForm/>
        </div>
      </Layout>
    </main>
  )
}

export default Contact