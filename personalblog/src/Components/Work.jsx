import React from "react";
import { Link } from "react-router-dom";
import "./Work.css";
import bird1 from "../public/bird_1.jpg"
import bird from "../public/bird.jpg"
import plant from "../public/plant.jpg"
import plant1 from "../public/plant1.jpg"
import pongal from "../public/pongal.jpg"
import temple from "../public/temple.jpg"
import bike from "../public/bike.jpg"
import bike1 from "../public/bike_1.jpg"
import dog from "../public/dog.jpg"
const Work = () =>{
    return(
        <div class="gallery">

        <img className="four-grid-cells"
            src={bird1}
            alt="Northern Winter Sky Image" />

        <img className="bird"
            src={bird}
            alt="Shining Stars Image" />

        <img classname="wide-image" style={{borderRadius:"25px"}}
            src={plant}
            alt="A River Flowing Image" />

        <img className="bird"
            src={plant1}
            alt="A cloudy Mountain Image" />

        <img className="bird"
            src={pongal}
            alt="A Winter Rainbow Image" />
        <img className="bird"
            src={temple}
            alt="Temple" />
         <img className="bird"
            src={bike}
            alt="bike" />
        <img className="bird"
            src={bike1}
            alt="bike" />
        <img className="bird"
            src={dog}
            alt="dog" />
    </div>     
    )
}
export default Work;