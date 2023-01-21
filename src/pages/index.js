import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Gallery from "../components/Gallery"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import blobGif from "../images/blob_black_slow.gif"
import Metamorfozy from "../images/metamorfozy_home.png"
import Wcs from "../images/wcs.png"
import  Statek from "../images/statek_fota.png"
import ComputerScience from "../videos/COMPUTER SCIENCE 02.mp4"
import Fala from "../videos/mech.mp4"
import Armia from "../videos/armia_wchodzi_wkadr_3.mp4"
import Postac from "../videos/0001-0200_1.mp4"
import Pokoj from "../videos/rozgladanko.mp4"
import MandelGold from "../videos/zloty_mandel_loop.mp4"
import MandelBlue from "../videos/odjazd_kamery_mandel.mp4"
import KolorPostac from "../videos/kolorowy_idzie2_1.mp4"
import Tedx from "../videos/tedx.mp4"
import Odklejanie from "../videos/odklejanie.mp4"

const IndexPage = () => (
	
  <Layout>
    <section className=" text-center front-page">
     

      <div className="container-fluid">
	<div className="row">
	<div className="col-md-12">
		<div className="row">
				<div className="col-md-6">
					<h1><Link to="/art">ART</Link></h1>
					<p>            PHYSICAL COMPUTING
            kinetic sculpture
            laser cutting 
            3d printing
            audioreactive installation            CIRCUIT BENDING</p>
				</div>
				<div className="col-md-6">
					<h1><Link to="/work">WORK</Link></h1>
					<p>cms portfolio
              e-commerce 
              fashion portal
              landing page
              portfolio
              shop
              single page
              website
              applications
              desktop applications</p>
				</div>
		</div>
	<ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
				<StaticImage
            src="../images/blob_dziecko.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
	
		   <img src={blobGif} alt="Otter dancing with a fish" />
		  			<StaticImage
            src="../images/pudelko.jpg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
	
	<img src={Statek} alt="Otter dancing with a fish" />
	<div className="theBreak"><h1>I WORK WITH CODE
		</h1></div>
	 <video loop autoPlay={true} muted>
      <source src={ComputerScience} type="video/mp4" />
    </video>

	<img src={Wcs} alt="Otter dancing with a fish" />

		<StaticImage
            src="../images/blob1.jpg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
 <img src={Metamorfozy} alt="Otter dancing with a fish" />
		<video loop autoPlay={true} muted>
     			 <source src={Armia} type="video/mp4" />
    	</video>
		<video loop autoPlay={true} muted>
     			 <source src={Postac} type="video/mp4" />
    	</video>

		<StaticImage
            src="../images/MD_netflixorange_OWF_0279.jpg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

		  	<StaticImage
            src="../images/MD_netflixorange_OWF_0279.jpg"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
		<video loop autoPlay={true} muted>
     			 <source src={Pokoj} type="video/mp4" />
    	</video>
		<video loop autoPlay={true} muted>
     			 <source src={MandelGold} type="video/mp4" />
    	</video>
		<video loop autoPlay={true} muted>
     			 <source src={MandelBlue} type="video/mp4" />
    	</video>
	
		<video loop autoPlay={true} muted>
     			 <source src={Tedx} type="video/mp4" />
    	</video>
		<video loop autoPlay={true} muted>
     			 <source src={KolorPostac} type="video/mp4" />
    	</video>
		<video loop autoPlay={true} muted>
     			 <source src={Odklejanie} type="video/mp4" />
    	</video>
                    
                </Masonry>
            </ResponsiveMasonry>
	</div>
				
	</div>
	</div>

    </section>
  </Layout>
  
)

export default IndexPage

export const Head = () => (
    <Seo />
)