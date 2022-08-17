import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/Card'
import CardBookstore from '../components/CardBookstore'
import { container, cardContainer, h1Title } from './projects.module.css'
import IncomingProject from '../components/incomingProject'

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
        </div>
      </Layout>
    </main>
  )
}

export default Projects