import React from 'react'
import Footer from './Footer'
import Header from './Header'

import '../styles/style.css'
import { AnimatePresence } from 'framer-motion'

const Layout = ({ location, children }) => {


    // const data = useStaticQuery(graphql`
    // query SiteTitleQuery {
    //     site {
    //         siteMetadata {
    //         title
    //         }
    //     }
    //     }
    // `)




    return (
        <div>
            <Header location = {location}/>
                <AnimatePresence>
                {children}
                </AnimatePresence>
            <Footer />
        </div>
    )
}

export default Layout
