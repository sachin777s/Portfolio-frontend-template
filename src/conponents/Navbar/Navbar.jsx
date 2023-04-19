import React from 'react'
import Toggle from '../Toggle/Toggle'
import "./Navbar.css"
import { Link } from 'react-scroll'

function Navbar() {
    return (
        <div className="n-wrapper">
            <div className="n-left">
                <div className="n-name">Deepak</div>
                <Toggle />
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul style={{ listStyleType: "none" }}>
                        <Link spy={true} to="Navbar" activeClass='activeClass' offset={50} duration={500} smooth={true}>
                            <li>Home</li>
                        </Link>
                        <Link spy={true} to="Services" activeClass='activeClass' offset={50} duration={500} smooth={true}>
                            <li>Services</li>
                        </Link>
                        <Link spy={true} to="Experience" activeClass='activeClass' offset={50} duration={500} smooth={true}>
                            <li>Experience</li>
                        </Link>
                        <Link spy={true} to="Portfolio" activeClass='activeClass' offset={50} duration={500} smooth={true}>
                            <li>Portolio</li>
                        </Link>
                        <Link spy={true} to="Testomonials" activeClass='activeClass' offset={50} duration={500} smooth={true}>
                            <li>Testomonials</li>
                        </Link>
                    </ul>
                </div>
                <Link spy={true} to="Contact" activeClass='activeClass' offset={50} duration={20000} smooth={true}>
                    <button className="button n-button">
                        Cantact Us
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar