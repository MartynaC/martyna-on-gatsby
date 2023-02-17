import * as React from "react"
import { useState } from 'react';
import PropTypes from "prop-types"
import { Link } from "gatsby"




const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false);


  return (
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
          <ul className="main-menu">
            <li className="list-item">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              >
                PROJECTS
              </a>
              <div
                className={`dropdown-menu dropdown-menu-right${isOpen ? ' show' : ''}`}
                aria-labelledby="navbarDropdown"
              >
                <Link to="/art" className="dropdown-item">CREATIVE</Link>
                <Link to="/work" className="dropdown-item">COMMERCIAL</Link>
              </div>
            </li>
            <li className="list-item">
              <Link to="/about">ABOUT</Link>
            </li>
            <li className="list-item">
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
          <p className="sticky-bottom">Martyna Chojnacka <br></br>
    Web Developer | Creative Coder | Visual Artist</p>
        </nav>

    
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
