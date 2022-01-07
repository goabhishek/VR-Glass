import React from 'react'
import vr from '../images/home-four-logo.png'

import '../style.css'


export default function Navbar() {
    // const [isMobile, setIsMobile] = useState(false);
    return (
        <div className="navmain">
            <nav className="stmain">
                <div className="logo">
                    <img src={vr} alt="vrlanding" />
                </div>
                <ul className="nav-Links"
                >
                    <a style={{
                        textDecoration: "none",
                    }} href="/#Home" className="home">
                        <li >Home</li>
                    </a>
                    <a style={{
                        textDecoration: "none",
                    }} href="/#About" className="about">
                        <li>About</li>
                    </a>
                    <a style={{
                        textDecoration: "none",
                    }} href="/#Solution" className="solution">
                        <li>Solution</li>
                    </a>
                    <a style={{
                        textDecoration: "none",
                    }} href="/#Case" className="case">
                        <li>Case Studies</li>
                    </a>
                    <a style={{
                        textDecoration: "none",
                    }} href="/#Contact" className="contact">
                        <li>Contact</li>
                    </a>
                </ul>

            </nav>
        </div>
    );
}
