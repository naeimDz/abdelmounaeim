import Link from 'next/link'; // Import Next.js Link component
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-custom navbar-light sticky">
      <div className="container">
        <Link className='nav-link' href="/"> {/* Replace with your logo or website title */}
          Your Brand
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span data-feather="menu" className="fea icon-md"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav navbar-nav-link mx-auto">
            <li  key='/services' className="nav-item active">
              <Link className='nav-link' href="/services">
                Services
              </Link>
            </li>
            <li key='/about' className="nav-item">
              <Link className='nav-link'href="/about">
                About me
              </Link>
            </li>
            <li key='/dji' className="nav-item">
              <Link className='nav-link'href="/dji">
                Dji
              </Link>
            </li>
            <li  key='/portfolio' className="nav-item">
              <Link className='nav-link'href="/portfolio">
                Portfolio
              </Link>
            </li>
            <li key='/projects' className="nav-item">
              <Link className='nav-link'href="/projects">
                Projects
              </Link>
            </li>
            <li key='/blog' className="nav-item">
              <Link className='nav-link'href="/blog">
                Blog
              </Link>
            </li>
            <li key='/contact' className="nav-item">
              <Link className='nav-link'href="/contact">
                Contact
              </Link>
            </li>
            {/* Add dropdown menu items here (if needed) */}
          </ul>

          <ul className="list-unstyled mb-0 mt-2 mt-sm-0 social-icon">
            <li className="list-inline-item"><Link className='nav-link'href="https://www.facebook.com/"><i className="mdi mdi-facebook"></i></Link></li>
            <li className="list-inline-item"><Link className='nav-link'href="https://twitter.com/"><i className="mdi mdi-twitter"></i></Link></li>
            <li className="list-inline-item"><Link className='nav-link'href="https://www.instagram.com/"><i className="mdi mdi-instagram"></i></Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;