import * as React from "react"
import { Link } from "gatsby"
import Gallery from "../components/Gallery"
import Layout from "../components/layout"
import {Seo} from "../components/seo"

const WorkPage = () => (
  <Layout>
    <div className="container text-center my-5">
    <Gallery />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default WorkPage

export const Head = () => (
    <Seo title="Page two" />
)
