import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import {Seo} from "../components/seo"
import GalleryArt from "../components/GalleryArt"

const ArtPage = () => (
  <Layout>
    <div className="container creative ">
  
    <div className="row page-description">
      <h1>Physical computing | Visual Arts  </h1>
  
      <p>Working with music visualization is like creating a playground for the spectator's imagination. Approached well, it can be conceived as an extra layer to the sound.</p>
    </div>
    <GalleryArt />
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default ArtPage

export const Head = () => (
    <Seo title="Visual Arts and Physical Computing Portfolio" />
)
