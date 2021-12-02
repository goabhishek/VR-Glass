import React from 'react'

export default function Why() {
    return (
        <div className="wrap">
            <section id="why-choose">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-md-12 col-lg-6 align-self-center wow zoomIn order-2 order-lg-1"
                            data-wow-duration=".2s"
                            data-wow-delay=".1s"
                        >
                            <h3>Why you choose</h3>
                            <p>
                                Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
                                enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
                                dictum felis eu pede mollis pretium.
                            </p>
                            <div className="row list-style-1">
                                <div className="col-12">
                                    <ul className="list-unstyled">
                                        <li>Nulla consequat massa quis enim.</li>
                                        <li>Donec pede justo, fringilla</li>
                                        <li>In enim justo, rhoncus ut</li>
                                        <li>Aenean leo ligula porttitor</li>
                                        <li>Phasellus viverra nulla</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-md-12 col-lg-5 ml-auto wow fadeInUp order-1 order-lg-2"
                            data-wow-duration=".2s"
                            data-wow-delay=".1s"
                        >
                            <img
                                src="assets/images/vr-glass/img-2.png"
                                className="img-fluid floating"
                                alt
                            />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
