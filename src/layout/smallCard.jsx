import React, { useEffect } from "react";
import './smallCard.css';
import {IoLocationSharp} from 'react-icons/io5';
import {BsFillStarFill} from 'react-icons/bs';
import {BsFillEyeFill} from 'react-icons/bs';
import { getAllListings } from "../components/addNew/creatSlice";
import { useSelector, useDispatch } from "react-redux";

export const SmallCard = () => {
    const dispatch = useDispatch()
    const listings = useSelector((state)=>state.listings.listings)

    useEffect(()=>{
        getAllListings()
        console.log("On small card")
        dispatch(getAllListings())
    },[])
    console.log(listings)
    return(


<>
<div style={{display:"flex", flexWrap: "wrap"}}>

        {listings.map((item)=>{
            return (
                <div id="listing-card">
            <div id="listing-card-image"></div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    {item.description}
                </div>
                <div id="listing-card-address">
                    <IoLocationSharp style={{color:"#3270FC"}}/>
                    70 Bright St New York, USA
                </div>
                <div id="listing-card-rating">
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill/>
                </div>
                <div id="listing-card-viewership">
                    <BsFillEyeFill style={{marginRight:5,color:"#3270FC"}}/>
                    <span>Viewed - 645</span>
                </div>
            </div>
        </div>
            )
        })}


</div>
</>
    )
}
export default SmallCard