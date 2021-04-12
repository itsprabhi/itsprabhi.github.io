import React, {useState,useEffect} from 'react'
import {graphql, Link, useStaticQuery} from 'gatsby'
// import '../styles/style.css'
import Layout from '../components/Layout'
import Contact from '../components/Contact'

import {useInView} from 'react-intersection-observer'
import {motion, useAnimation} from 'framer-motion'
import Head from '../components/Head'


const Work = () => {

    const [projects,setProjects] = useState(useStaticQuery(graphql`
        query{
            allContentfulProject(sort:{fields:[date]}) {
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

  
    const revList = projects.allContentfulProject.edges

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
        <Layout>
            <Head title = 'work' />
            <div className = 'work'>
                <div className = 'work-heading'>
                    <h1>
                        Work
                    </h1>
                </div>
                <div className = 'work-content'>
                    <div className = 'work-grid'>
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
                    </div>
                    <div className = 'work-grid-extras'>
                        <div>
                            <div className = 'work-grid-extras-card work-grid-extra-codepen'>
                                <h5>
                                    Check my other projects on Codepen
                                </h5>
                                <div class = 'btn btn-light'>
                                    <a href = 'https://codepen.io/prabhi/' target = '_blank'>View</a>
                                </div>
                            </div>
                            <div className = 'work-grid-extras-card work-grid-extra-behance'>
                                <h5>
                                    Check my UI designs on Behance
                                </h5>
                                <div class = 'btn btn-light'>
                                    <a href = 'https://www.behance.net/itsprabhi' target = '_blank'>View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Contact />
            </div>
        </Layout>
    )
}

export default Work
