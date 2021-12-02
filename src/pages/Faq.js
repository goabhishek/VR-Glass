import React from 'react'

export default function Faq() {
    return (
        <div className="wrap">

            <section id="faqs" className="bg-light">
                <div className="container">
                    <div className="row pb-4">
                        <div className="col-lg-8 mx-auto text-center">
                            <h3>Frequently Asked Questions?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-lg-12 mx-auto wow zoomIn"
                            data-wow-duration=".5s"
                            data-wow-delay=".2s"
                        >
                            <div className="accordion panel-group" id="faq">
                                <div className="card">
                                    <div className="card-header">
                                        <a
                                            data-toggle="collapse"
                                            data-parent="#faq"
                                            aria-expanded="true"
                                            href="#collapse2"
                                        >
                                            In magna posuere eget, vestibulum tempor auctor?
                                        </a>
                                    </div>
                                    <div className="collapse show" id="collapse2" style={{}}>
                                        <div className="card-body border-top-0 py-4 px-4">
                                            <p>
                                                Quis gravida magna mi a libero. Fusce vulputate eleifend
                                                sapien. Vestibulum purus quam, scelerisque ut, mollis sed,
                                                nonummy id, metus. Nullam accumsan lorem in dui. Cras
                                                ultricies mi eu turpis hendrerit fringilla.
                                            </p>
                                            <p>
                                                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                                                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                                                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                                                mauris sit amet nibh. Donec sodales sagittis magna.
                                            </p>
                                            <ul>
                                                <li>Vestibulum ante ipsum primis in faucibus orci.</li>
                                                <li>Luctus et ultrices posuere cubilia quis.</li>
                                                <li>In ac dui quis mi consectetuer lacinia.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a
                                            data-toggle="collapse"
                                            data-parent="#faq"
                                            aria-expanded="false"
                                            href="#collapse3"
                                            className="collapsed"
                                        >
                                            Donec pede justo fringilla vel aliquet nec vulputate?
                                        </a>
                                    </div>
                                    <div className="collapse" id="collapse3">
                                        <div className="card-body border-top-0 py-4 px-4">
                                            <p>
                                                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                                                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                                                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                                                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                                                consequat, leo eget bibendum sodales, augue velit cursus nunc,
                                                quis gravida magna mi a libero. Fusce vulputate eleifend
                                                sapien. Vestibulum purus quam, scelerisque ut, mollis sed,
                                                nonummy id, metus. Nullam accumsan lorem in dui. Cras
                                                ultricies mi eu turpis hendrerit fringilla.
                                            </p>
                                            <p>
                                                Vestibulum ante ipsum primis in faucibus orci luctus et
                                                ultrices posuere cubilia Curae; In ac dui quis mi consectetuer
                                                lacinia. Nam pretium turpis et arcu. Duis arcu tortor,
                                                suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed
                                                aliquam ultrices mauris. Integer ante arcu, accumsan a,
                                                consectetuer eget, posuere ut, mauris. Praesent adipiscing.
                                                Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus.
                                                Vestibulum volutpat pretium libero. Cras id dui. Aenean ut
                                                eros et nisl sagittis vestibulum.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <a
                                            data-toggle="collapse"
                                            data-parent="#faq"
                                            aria-expanded="false"
                                            href="#collapse4"
                                            className="collapsed"
                                        >
                                            Aenean commodo ligula eget dolor aenean massa?
                                        </a>
                                    </div>
                                    <div className="collapse" id="collapse4">
                                        <div className="card-body border-top-0 py-4 px-4 list-style-1">
                                            <p>
                                                Quis gravida magna mi a libero. Fusce vulputate eleifend
                                                sapien. Vestibulum purus quam, scelerisque ut, mollis sed,
                                                nonummy id, metus. Nullam accumsan lorem in dui. Cras
                                                ultricies mi eu turpis hendrerit fringilla. Maecenas nec odio
                                                et ante tincidunt tempus. Donec vitae sapien ut libero
                                                venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                                                eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                                                amet nibh. Donec sodales sagittis magna.
                                            </p>
                                            <ul className="list-unstyled">
                                                <li>Vestibulum ante ipsum primis in faucibus orci.</li>
                                                <li>Luctus et ultrices posuere cubilia quis.</li>
                                                <li>In ac dui quis mi consectetuer lacinia.</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
