import React from 'react'
import {Link} from 'gatsby'

import resume from '../resume/prabhsharan_resume.pdf'

function Contact() {
    return (
        <div className = 'contact' id = 'contact'>
            <div className = 'contact-content'>
                <div className = 'contact-txt'>
                    <span>LIKE MY WORK?</span>
                    <h2>
                        Contact Me
                    </h2>
                    <p>
                        Let's have a chat and discuss how we can help you and your company.
                    </p>
                    <div className = 'button-group button-group-block'>
                        <div className = 'btn btn-light'>
                            <a href = 'mailto:iamprabhie@gmail.com'>
                                Shoot me an Email
                            </a>
                        </div>
                        <div className = 'btn btn-dark'>
                            <a href = {resume} target = '_blank'>
                                Download my Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className = 'social-links'>
                    <h4>
                        My social media handles
                    </h4>
                    <div className = 'social-list'>
                        <div className = 'social-list-card'>
                            <a target = '_blank' href = 'https://twitter.com/itsprabhi'>
                                <img src="https://img.icons8.com/fluent/48/000000/twitter.png"/>
                            </a>
                        </div>
                        <div className = 'social-list-card'>
                            <a target = '_blank' href = 'https://github.com/itsprabhi'>
                                <img src="https://img.icons8.com/fluent/48/000000/github.png"/>
                            </a>
                        </div>
                        <div className = 'social-list-card'>
                            <a target = '_blank' href = 'https://www.linkedin.com/in/prabhsharangosal/'>
                                <img src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
                            </a>
                        </div>
                        {/* <div className = 'social-list-card'>
                            <a target = '_blank' href = ''>
                                <img src="https://img.icons8.com/fluent/48/000000/instagram-new.png"/>
                            </a>
                        </div> */}
                        <div className = 'social-list-card'>
                            <a target = '_blank' href = 'https://www.behance.net/itsprabhi'>
                                <img src="https://img.icons8.com/color/48/000000/behance.png"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
