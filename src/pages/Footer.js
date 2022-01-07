import React from 'react'

const Footer = () => {
    return (
        <div className="footer-five">
            <div
                className=""
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    flexWrap: "wrap",

                }}
            >
                <ul>
                    <li><a style={{
                        textDecoration: "none",
                    }} href="/#About">About</a></li>
                    <li><a style={{
                        textDecoration: "none",
                    }} href="/#Home">Privacy &amp; Policy</a></li>
                    <li><a style={{
                        textDecoration: "none",
                    }} href="/#Home">Terms &amp; Conditions</a></li>
                    <li><a style={{
                        textDecoration: "none",
                    }} href="/#Home">Career</a></li>
                    <li><a style={{
                        textDecoration: "none",
                    }} href="/#Home">Management</a></li>
                </ul>

            </div>



        </div>


    )
}

export default Footer
