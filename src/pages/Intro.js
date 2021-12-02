import React from 'react'

export default function Intro() {
    return (
        <div className="wrap">
            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-12 col-lg-5 wow zoomIn"
                            data-wow-duration=".5s"
                            data-wow-delay=".2s"
                        >
                            <img className="img-fluid" src="images/vr-glass/img-3.png" alt />
                        </div>
                        <div
                            className="col-lg-6 ml-auto wow zoomIn"
                            data-wow-duration=".5s"
                            data-wow-delay=".2s"
                        >
                            <h3 className="text-capitalize">
                                User Friendly Interface, Very Easy to Use
                            </h3>
                            <p>
                                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                                varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                                vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-0">
                <div className="container">
                    <div className="row align-items-center">
                        <div
                            className="col-lg-6 wow zoomIn order-2 order-lg-1"
                            data-wow-duration=".5s"
                            data-wow-delay=".2s"
                        >
                            <h3 className="text-capitalize">
                                User Friendly Interface,
                                <br />
                                Very Easy to Use
                            </h3>
                            <p>
                                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                                consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
                                viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                                varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi
                                vel augue. Curabitur ullamcorper ultricies nisi.
                            </p>
                        </div>
                        <div
                            className="col-lg-5 ml-auto wow zoomIn order-1 order-lg-2"
                            data-wow-duration=".5s"
                            data-wow-delay=".2s"
                        >
                            <img className="img-fluid" src="assets/images/vr-glass/img-4.png" alt />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
