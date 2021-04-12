import * as React from "react"
import {useState,useEffect} from 'react'
import HomeBanner from "../components/HomeBanner"
import Layout from "../components/Layout"
import TechList from "../components/TechList"
import { graphql, Link, useStaticQuery } from 'gatsby'

import resume from '../resume/prabhsharan_resume.pdf'

import {useInView} from 'react-intersection-observer'
import {motion, useAnimation} from 'framer-motion'



// PICTURES

import prabh1 from '../images/1.png'
import Contact from "../components/Contact"
import Head from "../components/Head"

// markup

const HomeAbout = () => {

  const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce:true
    })
    const variants = {
        visible:{
            opacity:1,
            y:0,
            transition:{duration:1, ease:[0.6,0.05,-0.01,0.9]}
        },
        hidden:{
            opacity:0,
            y:100
        }
    }

    useEffect(() => {
        if(inView){
            animation.start('visible')
        }
    },[animation, inView])


  return (
    <div className = 'home-about'>
      <div className = 'home-about-content'>
        <div className = 'prabhi-pic'>
          <img src = {prabh1} />
        </div>
        <motion.div className = 'home-about-txt' ref = {contentRef} animate = {animation} initial = 'hidden' variants = {variants}>
          <div>
            <h2>
            Let me Introduce Myself
            </h2>
            <p>
            My name is Prabhsharan Gosal (Prabhi).  I previously worked as a freelancer with some small businesses and helped them build high-quality and effective websites and web applications focusing on user engagement, user experience, and performance. I specialize in working with JavaScript and React.             
            </p>
          </div>
          <div className = 'button-group'>
            <div className = 'btn btn-light'>
                <a href = {resume} target="_blank">
                    Download my Resume
                </a>
            </div>
            <div className = 'btn btn-dark'>
                <Link to = '/about' target = '_blank'>
                    Know more about me
                </Link>
            </div>
          </div>
          {/* <TechList /> */}
        </motion.div>
        
      </div>
    </div>
  )
}

const HomeWork = () => {

  const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce:true
    })
    const variants = {
        visible:{
            opacity:1,
            y:0,
            transition:{duration:.5, ease:[0.6,0.05,-0.01,0.9]}
        },
        hidden:{
            opacity:0,
            y:72
        }
    }

    useEffect(() => {
        if(inView){
            animation.start('visible')
        }
    },[animation, inView])


  const [projects,setProjects] = useState(useStaticQuery(graphql`
  query{
      allContentfulProject (sort:{fields:[date]}){
          edges {
          node {
              slug
              tech
              title
              duties
              hex
              images{
                file{
                  url
                }
              }
              }  
          }
      }
  }
`))

  // useEffect(() => {
  //   const data = 
  //   setProjects(projects.push(data.allContentfulProject.edges))
    console.log(projects)
  // })

  const revList = projects.allContentfulProject.edges
  
  return (
    <div className = 'home-work'>
      <div className = 'home-work-content'>
        <div>
          <span>PORTFOLIO</span>
          <h2>My Work</h2>
        </div>
        <motion.div className = 'home-work-grid' ref = {contentRef} animate = {animation} initial = 'hidden' variants = {variants}>
          {revList.map(edge => {
            return(
              <div style = {{background:edge.node.hex}} className = 'home-work-grid-card'>
                <div className = 'home-grid-txt'>
                  <h3>{edge.node.title}</h3>
                  <h5>Tech Stack</h5>
                  <p>{edge.node.tech}</p>
                    <div className = 'btn btn-light'>
                        <Link to = {`/work/${edge.node.slug}`}>
                            View Project
                        </Link>
                    </div>
                </div>
                <div className = 'home-grid-img'>
                  <img src = {edge.node.images[0].file.url}></img>
                </div>
              </div>
            )
          })}
        </motion.div>
        <div className = 'home-work-link'>
          <div className = 'btn btn-dark'>
              <Link to = '/work'>
                  View More
              </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const IndexPage = ({location}) => {

  // console.log(location.pathname)

  return (
    <Layout location = {location.pathname}>
      <Head title = 'home' />
      <HomeBanner />
      <HomeAbout />
      <HomeWork />
      <Contact />
    </Layout>
  )

}

export default IndexPage
