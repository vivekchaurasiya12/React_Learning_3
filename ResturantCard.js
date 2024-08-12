//ResturantCard

import {IMAGE_URL}  from "../utils/constants";

const ResturantCard = (props) =>{
    const { resData } = props;
   // we can here destructure due to this we don't need to write again resdata. in <h> tag like that
//    const {cloudinaryImageId,name,cuisines,avgRating,deliveryTime,costForTwo} = resData;
    // this is destructuring of object 
    
    return(
        <div className = "resturant-card">
            <img  alt="restura-image" className="restura-image" src={IMAGE_URL + resData.cloudinaryImageId} />
         <h3>{resData.name}</h3>
         <h5>{resData.cuisines.join(", ")}</h5>
         <h6>{resData.avgRating} Stars</h6>
         <h5>{resData.sla.deliveryTime} Minutes</h5>
         <h5>{resData.costForTwo}</h5>
        </div>
    )
}

export default ResturantCard;