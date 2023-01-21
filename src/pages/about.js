import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2>My name is Martyna, I am a programmer and artist. I create
            commercial and artistic content, online and in real, creatively and
            efficiently using new technologies. </h2>
            </div>
            <div className="col-md-6">
            I started out as a self-taught
            programmer, mainly working on small cms projects, this made me dive
            into front end programming.
          </div>
          <div className="col-md-6">
            Over the years I have gained experience working on different
            platforms with multiple tools, I learned how to blend my skills in
            accordance to project needs.​ In 2019 I have graduated from the SWPS
            University of Social Sciences and Humanities, where I studied
            Creative Coding on postgraduate level.
          </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <ul>
          Web:
              <li>HTML5 </li>
              <li>sass/scss/css </li>
              <li>javascript / jQuery  </li>
              <li>java </li>
              <li>php </li>
              <li>mySQL</li>
              <li>graphQL</li>
              <li>react.js </li>
              <li>WordPress / Woocommerce</li>
              <li> Other</li>
              <li>Laser Cutting
            </li>
              <li>Android Studio</li>
           
            </ul>
            
                
          </div>
          <div className="col-md-6">
            TOOLS: 
            <ul>
              <li>Creative coding : </li>
              <li>Processing </li>
              <li>p5.js </li>
              <li>Max/MSP/Jitter</li>
              <li>TouchDesigner</li>
              <li>Arduino</li>
              <li>Teensy </li>
              <li>Creative Software :</li>
              <li>Adobe Creative Suite</li>
              <li> Blender</li>
              <li>Cinema4D</li>
              <li>Resolume Avenue</li>
              <li>MadMapper </li>
              <li>VDMX</li>
            </ul>
          </div>
         
        </div>
        <div className="row">
          <div className="col-md-6">
            I have been working with many different clients, from artists and family businesses to big companies and institutions.
          </div>
          <div className="col-md-6">
        Among many, i have been working with musicians, art institutions, theatres and museums. 
        </div>
          </div>
        I blend my profession with art creation. I speak 4 different human
        languages and many computer ones, constantly adding new ones. I believe
        code is the most efficient language in the world. I travel around with
        my projects and for fun. South America is my favourite place in the
        world. Buster is my favourite dog in the world. tetha
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="About Gatsby Bootsrap 5 starter" />
)