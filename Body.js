import resList from "../utils/mockdata";
import ResturantCard from "./ResturantCard";
import { useState } from "react";
//BODY

const Body = () =>{

     const [listOfResturant,setListOfResturant] = useState(resList)
    // const [time,setTime] = useState(resList)
     
    // we can write like this also ,this is destructuring
     //const arr  = useState(resList);
     //const [listOfResturant,setListOfResturant] = arr;

    return (
    <div className="body">
            <div className="search filter">
            {/* <input type="text" placeholder="Search here"></input> */}
            
            <button className="filter-btn" onClick={()=>{
              const filterdList = listOfResturant.filter((res) => res.info.avgRating > 4.5);
              setListOfResturant(filterdList);
            }}>Top Rated Resturant</button>

            {/* <button className="time-btn" onClick={()=>{
              const filterdList1 = time.filter((ti) => ti.info.sla.deliveryTime < 20);
              setListOfResturant(filterdList1);
            }}>Faster delivery</button> */} 
            {/* this  function is for faster delivery wale resturant */}


            </div>
            <div className="resturant-container">

           {/* MAP method which is used to create many number of card that we required it depend the number of object present in the reslist array  other wise we have to create individual card one by one which not a good practise*/}

           {listOfResturant.map((resturant) =>(
             <ResturantCard key={resturant.info.id} resData = {resturant.info}/>
             // always include a unique key in a map
           ))}
           
             {/* <ResturantCard resData = {resList[0].info}/>
                      <ResturantCard resData = {resList[1].info}/>
                      <ResturantCard resData = {resList[2].info}/>
this will display 3 card but we can have more so we will not create a card every time we will use MAP METHOD map() to create card */}


            </div>
     </div>
    )
}
 

export default Body;