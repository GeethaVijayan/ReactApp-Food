import RestaurantCard  from "./RestaurantCard";
import reslist  from "../utils/MockData";
import { useEffect, useState } from "react";

const BodyComponent = () => {

   //React is fast in DOM Manipulation compared to normal JS so we are using super powerful variables for faster DOM manipulations
   //Super Variables are also at the end of the normal JS variables . This function is normal utility function and these functions are having 
   //written some logic behind the scenes

//Local state Variable - super powerful variable
  //(it maintains state of the component)

  const [listOfRestaurants,setlistOfRestaurants] = useState(reslist);

   // useEffect(()=>{
   //    fetchData();
   // },[])

   const fetchData  = async()=>{
      const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&collection=80403&tags=layout_Shawarma_Contextual&sortBy=&filters=&type=rcv2&offset=0&page_type=null');
      const json = await data.json();
      console.log(json)
   }


//Normalvariable
//let listOfRestaurants = ['apple'];
//In react
//let [listOfRestaurants] = useState(['apple']);

//Normalvariable
//let listOfRestaurants;
//In react
//let [listOfRestaurants] = useState();

// we cannot modify the values normally here so we introduce second function as second parameter

/**
 * For example
 * let [listOfRestaurants] = useState([{
      
        "avgRating": 4.1,
        "parentId": "1776",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
      }]);

 * we need to modify means
      we need to use set before that varible
      we have listOfRestaurants so setlistofRestaurants is used to update the list
      let [listOfRestaurants, setlistOfRestaurants] = 
 */
    return (
       <div className="body">
         <div className="filter">
            <button className="filter-btn" 
            onClick={()=> {
               console.log("inside Topratesd")
               let filteredRestuarnts =  listOfRestaurants.filter((item)=>item.info.avgRating>4)
               console.log(filteredRestuarnts,'filteredRestuarnts')
             //for updating the list we are using setlistofrestuarant
               setlistOfRestaurants(filteredRestuarnts);
            }}>Top Rated Buttons</button>
         </div>
          <div className="Search">
             Searchl
             
              <div className="res-container">
                {
                 reslist.map((restuarant)=>(
               <RestaurantCard resData = {restuarant}  key = {restuarant.info.id}/>
                 ))
                }
 
 
                
              </div>
          </div>
       </div>
    )
 }

 export default BodyComponent;