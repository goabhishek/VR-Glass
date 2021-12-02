import React from 'react'

export default function Home() {
    return (
        <div className="wrap">

            <section
                id="home"
                className="parallax-fixed main-banner"
                data-stellar-background-ratio="0.5"
                style={{ backgroundPosition: "0% 0px" }}
            >
                <div id="particles-js" />
                <div className="content-table">
                    <div className="content-middle">
                        <div className="container">
                            <div className="row align-items-center">
                                <div
                                    className="col-12 text-center mx-auto wow zoomIn"
                                    data-wow-duration=".2s"
                                    data-wow-delay=".1s"
                                >
                                    <h1 className="text-capitalize strong mt-0 text-white">
                                        Enjoy Virtual-Reality glasses
                                    </h1>
                                    <a
                                        href="#"
                                        className="btn btn-light btn-xl btn-rounded mr-md-4 mb-4 mb-md-0 align-top"
                                    >
                                        Purchase Now
                                    </a>
                                    <a
                                        href="#"
                                        className="btn btn-light btn-xl btn-rounded mr-md-4 mb-4 mb-md-0 align-top"
                                    >
                                        <i className="fa fa-play" /> Watch Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
