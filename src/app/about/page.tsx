// pages/index.js

import React from 'react';

export default function About() {
    return (
        <>
            <section className="section pb-3" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="about-hero">
                                <img src="images/hero.png" className="img-fluid mx-auto d-block about-tween position-relative" alt="Hero" />
                            </div>
                        </div>

                        <div className="col-lg-7 col-md-7 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="section-title mb-0 ml-lg-5 ml-md-3">
                                <h4 className="title text-primary mb-3">Cristino Murphy</h4>
                                <h6 className="designation mb-3">I'm a Passionate <span className="text-primary">Web Designer</span></h6>
                                <p className="text-muted">
                                    I'm a Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects. 
                                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, making it look like readable English.
                                </p>
                                <p className="text-muted">
                                    Using Lorem Ipsum provides a more natural text distribution, unlike placeholder text. It enhances the visual appeal of your designs.
                                </p>
                                <img src="images/sign.png" height="22" alt="Signature" />
                                <div className="mt-4">
                                    <a href="#projects" className="btn btn-primary mouse-down">View Portfolio</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mt-100 mt-60">
                    <div className="row justify-content-center">
                        <div className="col-12 text-center">
                            <div className="section-title">
                                <div className="titles">
                                    <h4 className="title title-line text-uppercase mb-4 pb-4">Hobbies & Interests</h4>
                                </div>
                                <p className="text-muted mx-auto para-desc mb-0">
                                    Explore my diverse hobbies and interests that complement my professional skills.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {[
                            { icon: "monitor", title: "Developing" },
                            { icon: "stop-circle", title: "Mac OS" },
                            { icon: "video", title: "Cinema" },
                            { icon: "coffee", title: "Coffee" },
                            { icon: "music", title: "Music" },
                            { icon: "watch", title: "Games" },
                            { icon: "box", title: "Designing" },
                            { icon: "target", title: "Sports" },
                            { icon: "pen-tool", title: "Painting" },
                            { icon: "book", title: "Reading" },
                            { icon: "smartphone", title: "Android" },
                            { icon: "activity", title: "Other Activity" }
                        ].map((interest, index) => (
                            <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                                <div className="interests-desc bg-light position-relative px-2 py-3 rounded">
                                    <div className="hobbies d-flex align-items-center">
                                        <div className="text-center rounded-pill mr-4">
                                            <i data-feather={interest.icon} className="icon fea icon-md-sm"></i>
                                        </div>
                                        <div className="content">
                                            <h6 className="title mb-0">{interest.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container-fluid mt-100 mt-60">
                    <div className="rounded py-md-5 py-4" style={{ background: "url('images/bg-counter.jpg') center center" }}>
                        <div className="container">
                            <div className="row" id="counter">
                                {[
                                    { icon: "smile", count: 95, label: "Happy Client" },
                                    { icon: "award", count: 1, label: "Award Won" },
                                    { icon: "coffee", count: 30, label: "Cup of Coffee" },
                                    { icon: "thumbs-up", count: 3, label: "Project Complete" }
                                ].map((counter, index) => (
                                    <div className="col-lg-3 col-6" key={index}>
                                        <div className="counter-box rounded py-3 text-center">
                                            <div className="counter-icon">
                                                <i data-feather={counter.icon} className="fea icon-md text-primary"></i>
                                            </div>
                                            <h3 className="counter-value mt-3 text-white title-dark" data-count={counter.count}>{counter.count}</h3>
                                            <h6 className="counter-head font-weight-normal mb-0 text-white title-dark">{counter.label}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
