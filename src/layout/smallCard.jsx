import React, { useEffect, useState } from "react";
import './smallCard.css';
import {IoLocationSharp} from 'react-icons/io5';

import {BsFillEyeFill} from 'react-icons/bs';
import { getAllListings } from "../components/addNew/creatSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsFillStarFill, BsPencil, BsTrash } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { Delete } from "../components/addNew/creatSlice";
import { EditingListing } from "../components/addNew/creatSlice";

export const SmallCard = () => {
    const dispatch = useDispatch()
    const listings = useSelector((state)=>state.listings.listings)
    const [mouseover,setMouseOver] = useState(false);

    useEffect(()=>{
        getAllListings()
        console.log("On small card")
        dispatch(getAllListings())
    },[])
    console.log(listings)
    return(


<>
<div className="warning-container" id="warning-message">
        <div className="warning-message">
          <p>Are You Sure You Want To Delete This Post?</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 40 }}>
            <div className="cancel-deletion" onClick={()=>{
                document.getElementById("warning-message").style.display = "none";
            }}>Cancel</div>
            <div className="approve-deletion" onClick={()=>{
              document.getElementById("warning-message").style.display = "none";
              dispatch(Delete());
            }}>Delete</div>
          </div>
        </div>
      </div>


<div style={{display:"flex", flexWrap: "wrap"}}>

        {listings.map((item)=>{
            return (
                <div id="listing-card">
            <div id="listing-card-image"
            onMouseOver={()=>{
                setMouseOver(true)
            }}
            onMouseOut={()=>{setMouseOver(false)}}
             style={{
                background: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            
                
                }}>
                    {/*<button style={{backgroundColor:"blue",color:"white"}}>VIEW</button>*/}

                    <div id="view-pop" style={{
                        display: mouseover ? "flex" : "none"
                    }}>
                        <NavLink to={'/view'}>
                            <div id="view-listing-details" onClick={()=>{
                                localStorage.setItem("properties",JSON.stringfy(properties))
                                localStorage.setItem("cardsarry",JSON.stringfy(array))
                            }}>VIEW</div>
                        </NavLink>
                    </div>
                </div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    {item.description}
                </div>
                <div id="listing-card-address">
                    <IoLocationSharp style={{color:"#3270FC"}}/>
                   {item.location.province} {item.location.district} {item.location.street}
                </div>
                <div id="listing-card-rating">
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill className="verified"/>
                    <BsFillStarFill/>
                    <div className="verified-delete"><BsTrash  onClick={()=>{
                        document.getElementById("warning-message").style.display = "flex";
                        localStorage.setItem("tobe_deleted_id",item._id)
                    }}/></div>
                    <NavLink to={`editListing/${item._id}`}>
              <BsPencil className="verified-edit" /></NavLink>
                </div>

                
                <div id="listing-card-viewership">
                    <BsFillEyeFill style={{marginRight:5,color:"#3270FC"}}/>
                   
                    <p>Viewed - 645</p>

             
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