import React, { useState } from 'react'
import { Link } from 'gatsby'



function Navbar({ location }) {

    const [navOn, setNavOn] = useState(false)
    // const [navbarStyle, setNavbarStyle] = useState('navbar')

    const navSwitch = () => {
        console.log('it is working')
        setNavOn(!navOn)
    }


    const navbarStyle = location === '/' ?  'navbar' : 'navbar navbar-absolute' 

    return (
        <div className = {navbarStyle}> 
            <div className = 'navbar-content'>
                <div className = 'nav-brand'>
                    <Link to = '/'>
                        Prabhi
                    </Link>
                </div>
                <div className = 'nav-list'>
                    <div className = {`nav-toggle ${navOn ? 'nav-toggle-on' : ''}`} onClick = {navSwitch}>
                        <div></div>
                    </div>
                    <div className = {`nav-list-content ${navOn ? 'nav-list-on' : ''}`}>
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
                        <div className = 'btn btn-light'>
                            <a href = 'mailto:iamprabhie@gmail.com'>
                                Hire Me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
