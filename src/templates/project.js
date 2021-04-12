import React, {useState} from 'react'
import {Link,graphql} from 'gatsby'
import Layout from '../components/Layout'
import {documentToReactComponents} from '@contentful/rich-text-react-renderer'
import Head from '../components/Head'

export const query = graphql`
    query($slug:String!){
        contentfulProject(slug: {eq: $slug}){ 
            slug
            tech
            title
            projectContent {
            raw
            }
            duties
            id
            date
            images{
                file{
                    url
                }
            }
            liveUrl
            }          
        }
`

const Modal = (props) => {
    const image = props.image
    const [modalSwitch, setModalSwitch] = useState(false)
    const checkImage = image === '' ? 'none': 'block'
    const modalStyle = modalSwitch === true ? 'project-modal modal-on' : 'project-modal modal-off'
    const handleChange = () => {
        setModalSwitch(!modalSwitch)
    }
    return (
        <div className = {modalStyle} style = {{checkImage}}>
            <div className = 'project-gallery-card' onClick = {handleChange}>
                <div className = 'closing-btn'>
                    <span></span>
                </div>
                <img src = {image}></img>
            </div>
        </div>
    )
}
const ImageGallery = (props) => {
    const [modalImage,setModalImage] = useState('')
    const images = props.images
    console.log(images)
    return(
        <div className = 'project-gallery'>
            {images.map(image => {
                return (
                    <Modal image = {image.file.url} />
                )
            })}
        </div>
    )
}

function Project(props) {

    const frontMatter = props.data.contentfulProject
    console.log(props)
    console.log(frontMatter)
    const content = JSON.parse(frontMatter.projectContent.raw)
    // console.log(typeof content)

    const isLiveSite = frontMatter.liveUrl ? (
        <div className = 'btn btn-light'>
            <Link to = {frontMatter.liveUrl} target="_blank">
                View live site
            </Link>
        </div>
    ) : <></>

    console.log()
    return (
        <Layout>
            <Head title = {frontMatter.title} />
            <div className = 'project-content'>
                <div className = 'project-heading'>
                <h1>
                    {frontMatter.title}
                </h1>
                
                <p><span>Responsibilities - </span>{frontMatter.duties}</p>
                {isLiveSite}
                <ImageGallery images = {frontMatter.images} />
                </div>
                {documentToReactComponents(content)}
            </div>
        </Layout>
    )
}

export default Project
