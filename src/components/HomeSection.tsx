// components/HomeSection.js

import React from 'react';

const HomeSection = () => {
  return (
    <section className="bg-home bg-light d-table w-100" style={{ backgroundImage: "url('/images/home/01.png')" }} id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="title-heading mt-5">
              <h6 className="sub-title">Looking for a Designer !</h6>
              <h1 className="heading text-primary mb-3">I'm Cristino Murphy</h1>
              <p className="para-desc text-muted">
                Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of the development cycle for dynamic web projects.
              </p>
              <div className="mt-4 pt-2">
                <a href="javascript:void(0)" className="btn btn-primary rounded mb-2 mr-2">Hire me</a>
                <a href="javascript:void(0)" className="btn btn-outline-primary rounded mb-2">Download CV <i data-feather="download" className="fea icon-sm"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" data-scroll-nav="1" className="mouse-icon rounded-pill bg-transparent mouse-down">
        <span className="wheel position-relative d-block mover"></span>
      </a>
    </section>
  );
};

export default HomeSection;
