import React from 'react'
import Contact from '../components/Contact'
import Head from '../components/Head'
import Layout from '../components/Layout'
import TechList from '../components/TechList'

function about() {
    return (
        <Layout>
            <Head title = 'About' />
            <div className = 'about-content'>
                <div className = 'page-heading'>
                    <h1>
                     About Me
                    </h1>
                </div>
                <div className = 'about-txt'>
                    <p>
                        Hi, my name is Prabhsharan Gosal. I am a front-end web developer currently based in Ontario, Canada. I was born and raised in India, and I moved to Canada for my higher studies when I was 17. I am coding and learning web development since I was 15. I solely ran a website called business youngsters, where I did a bunch of stuff like copywriting, designing, recording podcast episodes, marketing, etc.
                    </p>
                    <p>
                        Recently I graduated from Georgian College in Barrie, with a diploma in Advertising and Marketing. I was an enthusiast for business and technology as a kid, and I loved to learn about different technological concepts. Apart from coding, I have also worked as a sales associate selling laptops and PCs. As for hobbies, I love to workout and read books.
                    </p>
                    <TechList />
                </div>
            </div>
            <Contact />
        </Layout>
    )
}

export default about
