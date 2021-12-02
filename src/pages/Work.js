import React from 'react'

export default function Work() {
    return (
        <div className="wrap">
            <section id="how-it-work" className="how-it-work bg-sky">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-10 col-lg-8 mx-auto">
                            <h3>How It Work</h3>
                            <p>
                                Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
                                fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
                                consequat, leo eget bibendum sodales, augue velit cursus nunc mi a
                                libero.
                            </p>
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div
                            className="col-md-4 work-steps wow fadeIn"
                            data-wow-duration=".2s"
                            data-wow-delay=".1s"
                        >
                            <div className="content">
                                <img
                                    src="images/vr-glass/icon/quill.svg"
                                    alt
                                    style={{ height: 70, width: 70 }}
                                />
                                <h4 className="font-weight-bold">Sign up now</h4>
                                <p>
                                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 work-steps wow fadeIn"
                            data-wow-duration=".2s"
                            data-wow-delay=".1s"
                        >
                            <div className="content">
                                <img
                                    src="images/vr-glass/icon/chat.svg"
                                    alt
                                    style={{ height: 70, width: 70 }}
                                />
                                <h4 className="font-weight-bold">Buy product</h4>
                                <p>
                                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-md-4 work-steps wow fadeIn"
                            data-wow-duration=".2s"
                            data-wow-delay=".1s"
                        >
                            <div className="content">
                                <img
                                    src="images/vr-glass/icon/virtual-reality.svg"
                                    alt
                                    style={{ height: 70, width: 70 }}
                                />
                                <h4 className="font-weight-bold">Enjoy with product</h4>
                                <p>
                                    Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                                    In enim justo, rhoncus ut, imperdiet a, venenatis vitae.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
