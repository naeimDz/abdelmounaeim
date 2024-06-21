import React from "react";

export default function Contact() {
    return (
        <>
            <section className="section pb-0" id="contact">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <div className="titles">
                                    <h4 className="title title-line text-uppercase mb-4 pb-4">Contact Me</h4>
                                    <span></span>
                                </div>
                                <p className="text-muted mx-auto para-desc mb-0">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <i data-feather="phone" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title text-uppercase">Phone</h5>
                                    <p className="text-muted">Promising development turmoil inclusive education transformative community</p>
                                    <a href="tel:+152534-468-854" className="text-primary">+152 534-468-854</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <i data-feather="mail" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title text-uppercase">Email</h5>
                                    <p className="text-muted">Promising development turmoil inclusive education transformative community</p>
                                    <a href="mailto:contact@example.com" className="text-primary">contact@example.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4 pt-2">
                            <div className="contact-detail text-center">
                                <div className="icon">
                                    <i data-feather="map-pin" className="fea icon-md"></i>
                                </div>
                                <div className="content mt-4">
                                    <h5 className="title text-uppercase">Location</h5>
                                    <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485</p>
                                    <a href="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569" className="video-play-icon text-primary">View on Google map</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section pt-5 mt-3">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="custom-form mb-sm-30">
                                <div id="message"></div>
                                <form method="post" action="php/contact.php" name="contact-form" id="contact-form">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="form-group">
                                                        <input name="name" id="name" type="text" className="form-control border rounded" placeholder="First Name :" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="form-group">
                                                        <input name="email" id="email" type="email" className="form-control border rounded" placeholder="Your email :" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <input name="subject" id="subject" className="form-control border rounded" placeholder="Your subject :" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <textarea name="comments" id="comments" rows={4} className="form-control border rounded" placeholder="Your Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 text-right">
                                            <input type="submit" id="submit" name="send" className="submitBnt btn btn-primary" value="Send Message" />
                                            <div id="simple-msg"></div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
