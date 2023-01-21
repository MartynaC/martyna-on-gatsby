import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"

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
      <div className="col-md-3 sticky">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      </div>
      <div className="col-md-9 scrollable-content">
        {children}
        </div>
      </main>
     
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
