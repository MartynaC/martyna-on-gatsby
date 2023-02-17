import * as React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"


function Items({data}){
    return (
        <div className="row image-grid">
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 0: 1, 700: 2, 900: 2 }}
            >
                  <Masonry>
        {
          data.map((value)=>{
           const {image, title,  link,  role, stack } = value;
           return (
       
             <div className="grid-img">
              <div className="gradient-making">
                <a href={link}>
          
                <img src={image} className="img-fluid" style={{height:"100%"}}/>
                {/*<video className="img-fluid" loop autoPlay={true} muted>
     			              <source src={video} type="video/mp4" />
           </video>*/}
                <div className="project-short-desc d-none d-md-block">
                 <h3>{title}</h3>
                 <p>{stack}</p>
                 <p>{role}</p>
                 </div>
         
                 </a>
             </div>
            </div>



    
           )
          })
        }
</Masonry>
                 {/* <img src={image} className="staticgif img-fluid" style={{height:"100%"}}/>    <img className="active" src={gif} /> */}
                 
</ResponsiveMasonry>
</div>

    )
}

export default Items;