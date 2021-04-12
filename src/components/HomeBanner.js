import React, {useEffect} from 'react'
import { Link } from 'gatsby'
import bannerImg from '../images/banner_img.png'

import {useInView} from 'react-intersection-observer'
import {motion, useAnimation} from 'framer-motion'

function HomeBanner() {

    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce:true
    })
    const variants = {
        visible:{
            opacity:1,
            y:0,
            transition:{duration:.7, ease:[0.6,0.05,-0.01,0.9]}
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


    return (
        <div className = 'home-banner'>
            <div className = 'home-banner-content'>
                <motion.div className = 'home-banner-txt' ref = {contentRef} animate = {animation} initial = 'hidden' variants = {variants}>
                    <h1>
                        Prabhsharan<br />Gosal
                    </h1>
                    <p>I am a frontend developer helping businesses develop high-quality websites and web applications.</p>
                    <div className = 'button-group'>
                        <div className = 'btn btn-light'>
                            <Link to = '/work'>
                                See my work
                            </Link>
                        </div>
                        <div className = 'btn btn-dark'>
                            <Link to = '/#contact'>
                                Let's Connect
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <div className = 'home-banner-image'>
                    <div className = 'home-bannner-filter'></div>
                    <img src = {bannerImg} alt = 'portfolio project thumbnails'></img>
                </div>
            </div>
        </div>
    )
}

export default HomeBanner
