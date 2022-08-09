import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import profile from '../images/profile.jpg'
import {container, img, name, h1Name, Description, nameF, Info, button, ContentContainer} from './index.module.css'


const IndexPage = () => {
  return (  
    <main>
      <title>Federico Garcia - Portfolio</title>
      <Layout>
        <div className={container}>          
            <img className={img} alt="Profile pic" src={profile} />  
            <div   className={Info}>        
                <h1 className={h1Name}>Hi. I'm <span className={name}>,  Federico Garcia</span></h1>
                <p className={Description}>I'm a passionate <span className={nameF}>Full Stack Web Developer</span> and this is my portfolio made whit Gatsby!</p>
            </div>
        </div>
        <hr/>
        <div className={ContentContainer}>
            <p className={Description}>I incorporate the PERN stack in Herny Academy, and i keep learning and expanding my stack of technologies</p>
            <p className={Description}>I invite you to browse my portfolio. Enjoy!</p>
            <Link to='/about'><a className={button} href="/about">Go to about me</a></Link>
        </div>
      </Layout>
    </main>    
  )
}

export default IndexPage
