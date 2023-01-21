import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const ArtPage = () => (
  <Layout>
    <div className="container text-center">

      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ArtPage

export const Head = () => (
    <Seo title="Page two" />
)
