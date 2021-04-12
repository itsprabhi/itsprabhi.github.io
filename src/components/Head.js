import React from 'react'
import {Helmet} from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Head({ title }) {

    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)

    console.log(data)
    return (
        <Helmet title = {`${data.site.siteMetadata.title} | ${title}`} />
    )
}

export default Head
