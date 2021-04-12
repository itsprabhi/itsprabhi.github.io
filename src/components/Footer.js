import React from 'react'
import {Link} from 'gatsby'

function Footer() {

    const year = new Date().getFullYear()
    console.log(year)
    return (
        <div className = 'footer'>
            <div className = 'footer-content'>
                <div className = 'nav-list'>
                    <div className = 'nav-footer-list'>
                        <ul>
                            <li>
                                <Link to = '/'>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to = '/work'>
                                    Work
                                </Link>
                            </li>
                            <li>
                                <Link to = '/about'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to = '/#contact'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <p>Prabhi@{year}. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
