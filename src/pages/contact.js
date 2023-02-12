import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div className="container  contact-page">
        <div className="row row page-description">
          <div className="col-md-12">
            <h1>
            <strong>hello</strong>@martynachojnacka.com</h1>
            <h1>0048 577 083 564</h1>
            <p>LINKEDIN INSTAGRAM VIMEO</p>

            </div>
        
          </div>

      </div>
  </Layout>
)

export default ContactPage

export const Head = () => (
    <Seo title="Contact page" />
)