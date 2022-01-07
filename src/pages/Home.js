import React from 'react';
import '../style.css'
import ho from '../images/main-banner.jpg'
import Navbar from '../component/Navbar';
import Footer from './footer';

const Home = () => {
    return (
        <div className="Home-Main">
            <Navbar />
            <div className="right-container">
                <div className="card">
                    <div className="card-top">
                        <h1>Card</h1>
                    </div>
                    <div className="card-body">
                        <img src={ho} alt="main" />
                    </div>
                    <div className="card-body">
                        <p> Card component rendered inside a container </p>
                        <button className="theme-btn-vr"><a style={{
                            textDecoration: "none",
                        }} href="https://forum.kirupa.com/">Watch Now</a></button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <h1>Card</h1>
                    </div>
                    <div className="card-body">
                        <img src={ho} alt="main" />
                    </div>
                    <div className="card-body">
                        <p> Card component rendered inside a container </p>
                        <button className="theme-btn-vr"><a style={{
                            textDecoration: "none",
                        }} href="https://forum.kirupa.com/">Watch Now</a></button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <h1>Card</h1>
                    </div>
                    <div className="card-body">
                        <img src={ho} alt="main" />
                    </div>
                    <div className="card-body">
                        <p> Card component rendered inside a container </p>
                        <button className="theme-btn-vr"><a style={{
                            textDecoration: "none",
                        }} href="https://forum.kirupa.com/">Watch Now</a></button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-top">
                        <h1>Card</h1>
                    </div>
                    <div className="card-body">
                        <img src={ho} alt="main" />
                    </div>
                    <div className="card-body">
                        <p> Card component rendered inside a container </p>
                        <button className="theme-btn-vr"><a style={{
                            textDecoration: "none",
                        }} href="https://forum.kirupa.com/">Watch Now</a></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home
