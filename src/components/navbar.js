import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "nav-link active" } : {className: "nav-link"}
}

const ExactNavLink = props => (
  <Link getProps={isActive} {...props} />
)

const Navbar = ({ siteTitle }) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <ul className="main-menu">
						<li className="list-item">
						<Link to="/art">ART</Link>
            </li>
            <li className="list-item work">
						<Link to="/work">WORK</Link>
						</li>
						<li className="list-item">
            <Link to="/about">ABOUT</Link>
						</li>
						<li className="list-item">
            <Link to="/contact">CONTACT</Link>	
						</li>
					</ul>

				
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
