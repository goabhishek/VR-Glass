import React from 'react'

export default function About() {
    return (
        <div className="wrap">
            <section id="about-product" className="bg-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <img
                                src="images/vr-glass/vr-box.png"
                                className="img-fluid floating"
                                alt
                            />
                        </div>
                        <div
                            className="col-12 col-lg-5 ml-auto align-self-center wow zoomIn text-white"
                            data-wow-duration=".2s"
                            data-wow-delay=".1s"
                        >
                            <h2>The Best One For You</h2>
                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                dictum felis eu pede mollis pretium vivamus elementum nisi.
                            </p>
                            <a
                                href="#"
                                className="btn btn-light btn-xl btn-rounded mr-md-4 mb-4 mb-md-0 align-top"
                            >
                                Purchase Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
