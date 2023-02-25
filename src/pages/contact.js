import * as React from "react"
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
            <p><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/martynachojnacka/">LINKEDIN</a> <a target="_blank" rel="noreferrer" href="https://www.instagram.com/martyna_chojnacka/">INSTAGRAM</a> </p>
            <p><a target="_blank" rel="noreferrer" href="https://github.com/MartynaC">GITHUB</a><a target="_blank"  rel="noreferrer" href="https://vimeo.com/user21520909"> VIMEO</a></p>  
            </div>
        
          </div>

      </div>
  </Layout>
)

export default ContactPage

export const Head = () => (
    <Seo title="Contact me" />
)
