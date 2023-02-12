import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"
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
    <div>
    <div className="container ">
   
      <div className="row page-description">
     
        <div className="col-md-12">
      <h1>{project.title}</h1>
      <div className="col-md-10">
      <p>{project.description}</p>
      </div>
      </div>
      <div className="col-md-7">
      {project.gif.length > 0 && 
      <img src={project.gif} className="img-fluid project-main" alt="Gif with a project content" style={{height:"100%"}}/>
      }
      {project.video.length > 0 && 
      <video className="img-fluid" loop autoPlay={true} muted>
     			              <source src={project.video} type="video/mp4" />
           </video>
      }
      </div>
      <div className="col-md-5 project-data">
        <p>&#91; {project.stack} &#93;</p>
        <p><a href={project.link}>{project.link}</a> </p>
        <p>{project.date}</p>

        <div className="back-btn">
      
      <Link to={link}>Back to the list</Link>
      
      </div>
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
