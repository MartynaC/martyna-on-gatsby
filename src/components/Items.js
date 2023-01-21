import * as React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

function Items({data}){
    return (
        <div className="row image-grid">
          <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry>
        {
          data.map((value)=>{
           const {id, image, title, description, link} = value;
           return (
       
             <div className=" text-center">
                <a href={link}>
                 <img src={image} className="img-fluid" style={{height:"100%"}}/>
                 </a>
                 {/*<h3>{title}</h3>
                 <p>{description}</p>*/}
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