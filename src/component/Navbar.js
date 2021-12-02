import React from 'react'
// import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className="wrap">
            <header className="header">
                {/* Navbar */}
                <nav className="navbar navbar-expand-lg navbar-sticky">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img className="img-fluid" src="images/vr-glass/logo.png" alt="logo" />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" data-scroll href="#home">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-scroll href="#intro">
                                        Features
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-scroll href="#about-product">
                                        About Product
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-scroll href="#how-it-work">
                                        How it work
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" data-scroll href="#faqs">
                                        Faq's
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* End Navbar */}
            </header>

        </div>
    )
}
