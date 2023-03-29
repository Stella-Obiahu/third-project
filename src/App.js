import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
// import myImage from "../src/images/img2.png";
// import star from "../src/images/star.png";
import data from "./data";
function App() {
   const card = data.map(mydata =>{
     return (
      <Card 
       key = {mydata.id}
       {...mydata}
      />
     )
   })
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <section className="cards--list">
        {card}
      </section>
    </div>
  );
}

export default App;