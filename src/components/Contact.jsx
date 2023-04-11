import React from 'react'

export default function Contact() {
    return (
        <>
            {/* contact us */}
            <section id="contactus" className="section gray-bg">
                <div className="container">
                    <div className="row justify-content-center sm-m-40px-b m-60px-b">
                        <div className="col-md-12 col-lg-8">
                            <div className="section-title text-center">
                                <h2 className="dark-color">Get in touch</h2>
                                <p>
                                    Use our web application to get in touch with us and learn more about our products and services. We look forward to hearing from you!
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* form */}
                    <div className="contact-form border box-shadow white-bg">
                        <div className="sm-title p-25px-b">
                            <h5 className="dark-color">Drop us a line</h5>
                            <p className="m-0px">
                                We are here to answer any question you may have
                            </p>
                            <i className="far fa-paper-plane" />
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Name"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            className="form-control"
                                            required=""
                                        />
                                    </div>
                                </div>
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <textarea
                                            id="message"
                                            placeholder="Your Comment"
                                            name="message"
                                            className="form-control"
                                            required=""
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-8 sm-m-15px-b">
                                    <small>
                                        We respect your privacy and do not tolerate spam and will never
                                        sell, rent, lease or give away your information
                                    </small>
                                </div>
                                <div className="col-md-4 text-left text-md-right">
                                    <div className="send">
                                        <button className="m-btn m-btn-theme" type="submit" name="send">
                                            Get in touch
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* end form */}
                </div>
            </section>
            {/* end contact us */}
        </>

    )
}
