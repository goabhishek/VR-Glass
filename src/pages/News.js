import React from 'react'

export default function News() {
    return (
        <div className="wrap">

            <section>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8 mx-auto wow fadeInUp text-center">
                            <h3 className="mb-0">Subscribe to Newsletter</h3>
                            <p>Stay up to date with our latest news and products.</p>
                            <div className="row">
                                <div className="col-md-10 col-lg-10 mx-auto">
                                    <form
                                        action="mailchimp/process-subscribe.php"
                                        id="mc-form"
                                        method="post"
                                    >
                                        <div className="row">
                                            <div className="col-12 col-lg-7 px-md-0 px-lg-2 text-center mx-auto">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        name="mc_email"
                                                        required="required"
                                                        className="form-control"
                                                        placeholder="Your eamil address..."
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-5 px-md-0">
                                                <input
                                                    type="submit"
                                                    name="mc_add"
                                                    className="btn btn-warning btn-block"
                                                    defaultValue="Subscribe Now!"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-center" id="mc-result" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
