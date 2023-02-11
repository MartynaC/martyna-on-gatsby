import * as React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { useState } from "react"


function Items({data}){
  const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="row image-grid">
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 350: 3, 900: 2}}
            >
                <Masonry>
        {
          data.map((value)=>{
           const {id, image, title, description, link, gif, role, stack } = value;
           return (
       
             <div className="grid-img">
              <div className="gradient-making">
                <a href={link}>
          
                <img src={image} className="img-fluid" style={{height:"100%"}}/>
                <div className="project-short-desc">
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
</ResponsiveMasonry>
</div>

    )
}

export default Items;