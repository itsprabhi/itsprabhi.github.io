import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Navbar from './Navbar'

function Header({location}) {

   

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    author
                }
            }
        }
    `)


    return (
        <header>
            <Navbar location = {location}/>
        </header>
    )
}

export default Header
