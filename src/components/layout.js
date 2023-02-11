import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import Navbar from "./navbar"
import "./layout.scss"
import RotatingElement from 'react-move-element'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0">
   
    
      <main>
        <div className="row">
      <div className="col-md-3 col-xs-12 sticky">
{/*
      <Link to="/"><img src="/tetha.webp" className="logo" alt="logo" /></Link> */}

     
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
      <div className="col-md-9 col-xs-12 scrollable-content">
        {children}
        </div>
        </div>
      </main>
     
    </div>

  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
