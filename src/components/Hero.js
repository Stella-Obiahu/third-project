import React from "react";
import Heropix from "../images/photogrid.png"
function Hero(){
    return(
        <section className="hero">
            <img src={Heropix}
            alt="Heropix" 
            className="heropix"/>
            <h1 className="hero--header">Online Experience</h1>
            <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind hosts-all without leaving home
            </p>
        </section>
    )
}

export default Hero