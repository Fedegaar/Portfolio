import * as React from 'react'
import Layout from '../components/layout'
import Card from '../components/Card'
import { container, cardContainer } from './projects.module.css'

const Projects = () => {
  return (
    <main>
      <title>Federico Garcia - Projects</title>
      <Layout>   
        <div className={container}>     
            <h1>This is Federico Garcia's Projects</h1>
            <div className={cardContainer}>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
      </Layout>
    </main>
  )
}

export default Projects