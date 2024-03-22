import { CDN_URL } from "../utils/constants";
import {useState} from "react";

const RestaurantCard = (props) => {
    const {resData} = props;
 
    return (    
    <div className="restaurant">
        <img src={CDN_URL+resData.info.cloudinaryImageId} className="imgSize"></img>
        <div className="restaurant-content">
            <h2 className="restaurant-name">{resData.info.name}</h2>
            <div>
               <p className="cusine-name">{resData.info.cuisines.join(" ,")}</p>
            </div>
            <div>
               <p>{resData.info.costForTwo}</p>
            </div>
            <div className="rating-type">
                <p>{resData.info.avgRating} stars</p>
            </div>
            <div className="delivery-time">
                <p>{resData.info.sla.deliveryTime} minutes</p>
            </div>
            
            <div>
               <p>{resData.info.areaName}</p>
            </div>
        </div>
    </div>
    )
 }

 export default RestaurantCard;