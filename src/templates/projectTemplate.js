import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
import ReactPlayer from "react-player"
import GifPlayer from "react-gif-player"

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson

  const location = useLocation()
  let link

  if (location.pathname.includes("creative")) {
    link = "/art"
  } else if (location.pathname.includes("commercial")) {
    link = "/work"
  } else {
    link = project.link
  }

  return (
    <Layout>
      <div className="container ">
        <div className="row page-description">
          <div className="col-md-12">
            <h1>{project.title}</h1>
            <div className="col-md-10">
              <p>{project.description}</p>
            </div>
          </div>
          <div className="col-md-7">
  {project.gif.length > 0 && (
    <GifPlayer gif={project.gif} autoplay={true} className="img-fluid project-main" />
  )}
  {project.video.length > 0 && (
    <ReactPlayer
      url={project.video}
      playing={true}
      loop={true}
      muted={true}
      playsinline={true}
      className="img-fluid"
    />
  )}
</div>
          <div className="col-md-5 project-data">
            <p>&#91; {project.stack} &#93;</p>
            <p>
              <a target="_blank" rel="noreferrer" href={project.link}>
                {project.link}
              </a>{" "}
            </p>
            <p>{project.date}</p>

            <div className="back-btn">
              <Link to={link}>Back to the list</Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Project($id: String!) {
    projectsJson(id: { eq: $id }) {
      title
      description
      gif
      video
      stack
      link
      date
    }
  }
`

export default ProjectTemplate
