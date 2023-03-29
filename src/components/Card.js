import React from "react";
function Card(props){
    let badgeText 
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location ==="online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="First" className="card--image" />
            <div className="card--stats">
               <img src={props.star} alt="star" className="star" />
               <span>{props.rating}</span>
               <span className="gray">{props.reviewCount}</span>
               <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            {/* <p>{props. mydata.description}</p> */}
            <p><span className="bold">From {props.price}</span> / person</p>
            {/* <p>{props.location}</p>
            <p>{props.openSpots}</p> */}
        </div>
    )
}

export default Card