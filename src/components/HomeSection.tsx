// components/HomeSection.js

import Link from 'next/link';
import React from 'react';


export default function HomeSection () {

  return (

    <>
 
    <section className="bg-home bg-light d-table w-100" id="home">
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
                <Link href="/" className="btn btn-primary rounded mb-2 mr-2">Hire me</Link>
                <Link href="/" className="btn btn-outline-primary rounded mb-2">Download CV <i data-feather="download" className="fea icon-sm"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="#about" data-scroll-nav="1" className="mouse-icon rounded-pill bg-transparent mouse-down">
        <span className="wheel position-relative d-block mover"></span>
      </a>
    </section></>
  );
};


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
 // You can use any data fetching library
 const res = await fetch('https://api.github.com/repos/vercel/next.js')
 const posts = await res.json()
     // By returning { props: { data } }, the component
 // will receive `data` as a prop at build time
   return {
     props: {posts},
       

     }
   }
