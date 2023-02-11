import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { Seo } from "../components/seo"

//import { createTruncatedTetrahedron } from './tetrahedron'
import { useTypewriter } from 'react-simple-typewriter'
const IndexPage = ({ data }) => {
 const projects = data.allProjectsJson.edges
 const [hello] = useTypewriter({
  words: ['Hello.', 'I am an actively experimenting'],
  loop: 3,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })
const [text] = useTypewriter({
  words: [' My name is Martyna. ',   'creative coder and artist,', 'constantly looking for new challenges'],
  loop: 0,
  deleteSpeed:100,
})

   {/*const containerRef = React.useRef(null)

  React.useEffect(() => {
    const tetrahedron = createTruncatedTetrahedron()
    if(containerRef.current) {
      containerRef.current.appendChild(tetrahedron)
  }
  
    return () => {
      containerRef.current.removeChild(tetrahedron)
    }
  }, [])*/}
  return (
    <>
    {/*
      <h1>Projects</h1>
      <ul>
        {projects.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/projects/${node.id}`}>{node.title}</Link>
          </li>
        ))}
      </ul>*/}
	   
  <Layout>
    <section className=" text-center front-page">
     

      <div className="container-fluid">
	<div className="row">
	<div className="col-md-12">
  <div className="welcome">
  <h1>
  <span>{hello}</span>
  <span>{text}</span></h1>
  </div>
  
 
 
 <div className="row home page-description">
  </div>
	
	
	{/* } <video loop autoPlay={true} muted className="homepagevideo">
      <source src={ComputerScience} type="video/mp4" />
    </video> */}
    




		


                    
              
	</div>
				
	</div>
	</div>

    </section>
  </Layout>
    </>
  )
  
}

export const query = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`


export default IndexPage

export const Head = () => (
    <Seo />
)