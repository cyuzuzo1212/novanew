import React from "react";
import './smallCard.css';
import {IoLocationSharp} from 'react-icons/io5';
import {BsFillStarFill} from 'react-icons/bs';
import {BsFillEyeFill} from 'react-icons/bs';

export const SmallCard = () => {
    return(


<>
<div style={{display:"flex"}}>
<div id="listing-card">
            <div id="listing-card-image"></div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    Gourgeous House For Sale
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
        <div id="listing-card">
            <div id="listing-card-image"></div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    Gourgeous House For Sale
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


</div>
<div style={{display:"flex",marginTop:"40px"}}>
<div id="listing-card">
            <div id="listing-card-image"></div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    Gourgeous House For Sale
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
        <div id="listing-card">
            <div id="listing-card-image"></div>
            <div id="listing-card-desc">
                <div id="listing-card-title">
                    Gourgeous House For Sale
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


</div>
</>
    )
}
export default SmallCard