import React from "react";
import { name, city } from "../data/data.js";
import "./index.js";


const divStyle = {
  color: 'firebrick',
};

function Home() {
  <div id ="home" >
      <h1>
     
      `${name} is a Web Developer from ${city}`
      </h1>
  </div>
  return <div style ={ divStyle} >Home</div>;
}

export default Home;
