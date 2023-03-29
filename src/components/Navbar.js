import React from "react";
import Logo from "../images/airbnb.png";

function Navbar(){
    return(
        <nav>
            <img src= {Logo}
            alt="Logo"
            className="nav--logo" />
        </nav>
    )
}

export default Navbar