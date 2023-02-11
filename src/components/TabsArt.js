import * as React from "react"

function Tabs({filterCategory, tabsData}){
    return(
        <>

 <div className="text-center tags-list my-4">
 {
 tabsData.map((category, index)=>{
      return (
        
        <div class="col-md-3 tag-table-cell">
        <button type="button" className="btn btn-outline-primary mx-2 text-capitalize" onClick={()=> filterCategory(category)} key={index}>{category}</button>
        
        </div>
        )
 })
 }


</div>
        </>
    )
}

export default Tabs;