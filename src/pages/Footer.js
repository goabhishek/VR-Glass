import React from 'react'

export default function Footer() {
    return (
        <div className="wrap">

            <section className="footer bg-dark pb-3">
                <div className="container">
                    <div className="row pb-5">
                        <div className="col-12 text-center wow fadeInUp">
                            <img src="assets/images/footer-logo.png" className="img-fluid" alt />
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row text-lg-left text-center text-dark-skin pt-3">
                            <div className="col-12 col-lg-6">
                                <p>
                                    Copyright @ 2017 Zero Virtual Reality Glass. | All right reserved.
                                </p>
                            </div>
                            <div className="col-12 col-lg-6 text-center text-lg-right">
                                <ul className="list-inline my-auto social">
                                    <li className="list-inline-item pr-2">
                                        <a href="#" className title="facebook">
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item pr-2">
                                        <a href="#" className title="twitter">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item pr-2">
                                        <a href="#" className title="dribbble">
                                            <i className="fa fa-dribbble" />
                                        </a>
                                    </li>
                                    <li className="list-inline-item pr-2">
                                        <a href="#" className title="pinterest">
                                            <i className="fa fa-pinterest-p" />
                                        </a>
                                    </li>
                                    <li className="pr-0 list-inline-item pr-0">
                                        <a href="#" className title="linkedin">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
